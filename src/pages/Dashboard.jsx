import { useFitness } from "../context/FitnessContext";
import { useEffect, useState } from "react";
import { fetchFitnessTip } from "../services/api";

function Dashboard() {
  const { meals, workouts, steps } = useFitness();

  const [tip, setTip] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFitnessTip()
      .then(setTip)
      .catch(() => setTip("Stay consistent and keep moving"))
      .finally(() => setLoading(false));
  }, []);

  const totalCalories = meals.reduce(
    (sum, meal) => sum + Number(meal.calories || 0),
    0
  );

  return (
    <div className="dashboard">

      <h2 className="section-title">Today's Summary</h2>

      <div className="card-grid">

        <div className="summary-card">
          <h3>Calories</h3>
          <p className="value">{totalCalories}</p>
        </div>

        <div className="summary-card">
          <h3>Workouts</h3>
          <p className="value">{workouts.length}</p>
        </div>

        <div className="summary-card">
          <h3>Steps</h3>
          <p className="value">{steps}</p>
        </div>

        <div className="summary-card">
          <h3>Meals Logged</h3>
          <p className="value">{meals.length}</p>
        </div>

      </div>

      <h2 className="section-title">Daily Fitness Tip</h2>

      <div className="summary-card">
        {loading ? <p>Loading...</p> : <p>{tip}</p>}
      </div>

    </div>
  );
}

export default Dashboard;