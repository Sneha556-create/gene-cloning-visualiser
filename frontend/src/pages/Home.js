import { useState } from "react";
import GeneVisualizer from "../components/GeneVisualizer";

export default function Home() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);

  const steps = [
    "Gene Mapping",
    "DNA Cutting",
    "Vector Preparation",
    "Gene Insertion",
    "Transformation",
    "Cloning Complete"
  ];

  const handleStart = () => {
    setStarted(true);
    setStep(0);
  };

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const reset = () => {
    setStarted(false);
    setStep(0);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🧬 Gene Cloning Simulation</h1>

      {!started ? (
        <button onClick={handleStart}>Start Cloning</button>
      ) : (
        <>
          <h2>Step {step + 1}: {steps[step]}</h2>

          <GeneVisualizer step={step} />

          <div>
            <button onClick={nextStep}>Next Step →</button>
            <button onClick={reset} style={{ marginLeft: "10px", background: "gray" }}>
              Reset
            </button>
          </div>
        </>
      )}
    </div>
  );
}




