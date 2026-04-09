import { useEffect, useRef } from "react";

export default function AnimationCanvas({ step }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let x = 0;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // DNA helix
      for (let i = 0; i < 20; i++) {
        let y = 20 + i * 12;
        let offset = Math.sin(x + i * 0.3) * 60;

        // Highlight gene region (Step 0)
        let isGene = i > 7 && i < 12;

        // Left strand
        ctx.beginPath();
        ctx.arc(200 + offset, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = (step === 0 && isGene) ? "yellow" : "cyan";
        ctx.fill();

        // Right strand
        ctx.beginPath();
        ctx.arc(200 - offset, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = "pink";
        ctx.fill();

        // Cut animation (Step 1)
        if (step === 1 && i === 10) {
          ctx.strokeStyle = "red";
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(140, y);
          ctx.lineTo(260, y);
          ctx.stroke();
        }
      }

      // Vector circle (Step 2+)
      if (step >= 2) {
        ctx.beginPath();
        ctx.arc(100, 150, 40, 0, Math.PI * 2);
        ctx.strokeStyle = "lightgreen";
        ctx.lineWidth = 3;
        ctx.stroke();
      }

      // Gene insertion (Step 3+)
      if (step >= 3) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(80, 140, 40, 5);
      }

      // Cell (Step 4+)
      if (step >= 4) {
        ctx.beginPath();
        ctx.arc(320, 150, 50, 0, Math.PI * 2);
        ctx.strokeStyle = "orange";
        ctx.lineWidth = 3;
        ctx.stroke();
      }

      // Cloning effect (Step 5)
      if (step === 5) {
        for (let i = 0; i < 5; i++) {
          ctx.beginPath();
          ctx.arc(320 + i * 20, 250, 10, 0, Math.PI * 2);
          ctx.fillStyle = "lightgreen";
          ctx.fill();
        }
      }

      x += 0.05;
      requestAnimationFrame(draw);
    }

    draw();
  }, [step]);

  return <canvas ref={canvasRef} width={500} height={350} />;
}

