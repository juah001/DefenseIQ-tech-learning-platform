async function getLabs() {
  try {
    const res = await fetch("http://localhost:5000/labs", { cache: "no-store" });
    return res.json();
  } catch {
    return [];
  }
}

export default async function LabsPage() {
  const labs = await getLabs();

  return (
    <div>
      <h1>Cybersecurity Labs</h1>
      <div className="grid grid-3">
        {labs.map((lab) => (
          <div key={lab.id} className="card">
            <h3>{lab.title}</h3>
            <p>{lab.type}</p>
            <p className="small">{lab.difficulty}</p>
            <button className="button">Start Lab</button>
          </div>
        ))}
      </div>
    </div>
  );
}
