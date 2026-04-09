export default function StepCard({ step, index }) {
  return (
    <div className="card">
      <h2>Step {index + 1}: {step.title}</h2>
      <p>{step.description}</p>
    </div>
  );
}
