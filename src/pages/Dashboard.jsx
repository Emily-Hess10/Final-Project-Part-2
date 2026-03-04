import { useTracker } from "../context/TrackerContext";
import { useFitness } from "../context/FitnessContext";
import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { meals } = useTracker();          
  const { workouts, steps } = useFitness(); 
  const { user, logout } = useAuth();       
 
  const totalCalories = meals.reduce(
    (sum, item) => sum + Number(item.calories || 0),
    0
  );

  return (
    <div className="dashboard">
      <header>
        <h1>FitTrack</h1>
        <p>Your Daily Health Dashboard</p>
        <button onClick={logout}>Logout</button>
      </header>

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
    </div>
  );
}

export default Dashboard;
