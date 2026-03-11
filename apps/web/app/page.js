export default function Page() {
  return (
    <div className="grid grid-3">
      <div className="card">
        <div className="small">Today</div>
        <div className="metric">50</div>
        <div>Cards target</div>
      </div>
      <div className="card">
        <div className="small">Streak</div>
        <div className="metric">12</div>
        <div>Study days</div>
      </div>
      <div className="card">
        <div className="small">Labs</div>
        <div className="metric">2</div>
        <div>Active scenarios</div>
      </div>
      <div className="card">
        <h2>Platform Overview</h2>
        <p>
          This starter app brings together flashcards, coding practice, labs,
          AI card generation, tutoring, analytics, and a shared deck marketplace.
        </p>
      </div>
    </div>
  );
}
