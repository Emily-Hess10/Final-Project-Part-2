import { useState } from "react";
import { useFitness } from "../context/FitnessContext";

function Workouts() {
  const { workouts, addWorkout } = useFitness();
  const [activity, setActivity] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addWorkout({ activity, duration });
    setActivity("");
    setDuration("");
  };

  return (
    <div className="dashboard">
      <h2 className="section-title">Log Workout</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Workout (ex: Run)"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <input
          placeholder="Duration (ex: 1 hour)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <button type="submit">Add Workout</button>
      </form>

      {workouts.map((w, i) => (
        <div key={i} className="summary-card">
          {w.activity} - {w.duration}
        </div>
      ))}
    </div>
  );
}

export default Workouts;