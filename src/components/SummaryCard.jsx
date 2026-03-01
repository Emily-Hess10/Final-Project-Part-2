function SummaryCard({ title, value, goal, progress }) {
  return (
    <div className="summary-card">
      <h3>{title}</h3>
      <p className="value">{value}</p>
      <p className="goal">{goal}</p>

      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default SummaryCard;