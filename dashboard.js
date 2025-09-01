import { useState } from 'react';

export default function Dashboard() {
  const [plan, setPlan] = useState("");

  const generatePlan = async () => {
    const res = await fetch('/api/generatePlan', { method: 'POST' });
    const data = await res.json();
    setPlan(data.plan);
  };

  return (
    <div>
      <h1>Your AI Side Hustle Plan</h1>
      <button onClick={generatePlan}>Generate Plan</button>
      {plan && <pre>{plan}</pre>}
    </div>
  );
}
