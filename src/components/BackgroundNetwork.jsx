import React, { useEffect, useRef } from 'react';

export default function BackgroundNetwork() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Generate network nodes (representing cloud servers, edge points, routers)
    const nodeCount = Math.min(Math.floor((width * height) / 22000), 55);
    const nodes = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1.2,
        isHub: Math.random() > 0.82, // Special cloud hub nodes
        pulse: Math.random() * Math.PI,
      });
    }

    // Packet simulation along lines
    const packets = [];
    for (let i = 0; i < 8; i++) {
      packets.push({
        from: Math.floor(Math.random() * nodes.length),
        to: Math.floor(Math.random() * nodes.length),
        progress: Math.random(),
        speed: 0.004 + Math.random() * 0.005,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];

        // Move node
        nodeA.x += nodeA.vx;
        nodeA.y += nodeA.vy;

        if (nodeA.x < 0 || nodeA.x > width) nodeA.vx *= -1;
        if (nodeA.y < 0 || nodeA.y > height) nodeA.vy *= -1;

        nodeA.pulse += 0.03;

        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 160;

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.16;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw packets
      packets.forEach((p) => {
        const nodeFrom = nodes[p.from];
        const nodeTo = nodes[p.to];
        if (nodeFrom && nodeTo) {
          const dist = Math.hypot(nodeFrom.x - nodeTo.x, nodeFrom.y - nodeTo.y);
          if (dist < 180) {
            p.progress += p.speed;
            if (p.progress >= 1) {
              p.progress = 0;
              p.from = Math.floor(Math.random() * nodes.length);
              p.to = Math.floor(Math.random() * nodes.length);
            }
            const px = nodeFrom.x + (nodeTo.x - nodeFrom.x) * p.progress;
            const py = nodeFrom.y + (nodeTo.y - nodeFrom.y) * p.progress;

            ctx.beginPath();
            ctx.arc(px, py, 2, 0, Math.PI * 2);
            ctx.fillStyle = '#06B6D4';
            ctx.shadowColor = '#06B6D4';
            ctx.shadowBlur = 8;
            ctx.fill();
            ctx.shadowBlur = 0; // reset
          } else {
            p.from = Math.floor(Math.random() * nodes.length);
            p.to = Math.floor(Math.random() * nodes.length);
          }
        }
      });

      // Draw nodes
      nodes.forEach((node) => {
        ctx.beginPath();
        const r = node.isHub ? node.radius + Math.sin(node.pulse) * 0.8 + 1 : node.radius;
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
        
        if (node.isHub) {
          ctx.fillStyle = '#38BDF8';
          ctx.shadowColor = '#0EA5E9';
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0;

          // Subtle hub halo ring
          ctx.beginPath();
          ctx.arc(node.x, node.y, r + 4 + Math.sin(node.pulse) * 2, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(56, 189, 248, 0.18)';
          ctx.lineWidth = 1;
          ctx.stroke();
        } else {
          ctx.fillStyle = 'rgba(148, 163, 184, 0.45)';
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background dark gradient overlays */}
      <div className="absolute inset-0 bg-[#030712] opacity-95" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 grid-bg-pattern opacity-40" />

      {/* Network Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />
    </div>
  );
}
