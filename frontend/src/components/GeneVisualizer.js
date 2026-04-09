import AnimationCanvas from "./AnimationCanvas";

export default function GeneVisualizer({ step }) {
  return (
    <div style={{ marginTop: "30px" }}>
      <AnimationCanvas step={step} />

      {step === 0 && <p>🧬 Highlighting gene region in DNA...</p>}
      {step === 1 && <p>✂️ DNA is cut using restriction enzymes...</p>}
      {step === 2 && <p>🔵 Plasmid vector is prepared...</p>}
      {step === 3 && <p>🧬 Gene inserted into plasmid...</p>}
      {step === 4 && <p>🦠 Recombinant DNA enters host cell...</p>}
      {step === 5 && <p>🎉 Cloning successful! Cells multiply...</p>}
    </div>
  );
}
