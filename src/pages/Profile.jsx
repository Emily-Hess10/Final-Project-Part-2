import { useState, useEffect } from "react";
import { useFitness } from "../context/FitnessContext";

function Profile() {
  const { profile, updateProfile, steps, goal, setGoal } = useFitness();

  const [currentWeight, setCurrentWeight] = useState("");
  const [goalWeight, setGoalWeight] = useState("");
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [message, setMessage] = useState("");

  // Load profile into form
  useEffect(() => {
    if (profile) {
      setCurrentWeight(profile.currentWeight || "");
      setGoalWeight(profile.goalWeight || "");
      if (profile.height) {
        setHeightFeet(profile.height.feet || "");
        setHeightInches(profile.height.inches || "");
      }
    }
  }, [profile]);

  const handleSubmit = (e) => {
    e.preventDefault();

    updateProfile({
      currentWeight,
      goalWeight,
      height: { feet: heightFeet, inches: heightInches },
      fitnessGoal: goal,
    });

    setMessage("Profile updated successfully! ✅");
  };

  return (
    <div className="dashboard">
      <h2 className="section-title">Profile & Settings</h2>

      <form onSubmit={handleSubmit} className="profile-form">
        <label>Fitness Goal</label>
        <input
          type="text"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />

        <label>Today's Steps</label>
        <input type="number" value={steps} readOnly />

        <label>Current Weight (lbs)</label>
        <input
          type="number"
          value={currentWeight}
          onChange={(e) => setCurrentWeight(e.target.value)}
        />

        <label>Goal Weight (lbs)</label>
        <input
          type="number"
          value={goalWeight}
          onChange={(e) => setGoalWeight(e.target.value)}
        />

        <label>Height</label>
        <div style={{ display: "flex", gap: "10px" }}>
          <input
            type="number"
            placeholder="Feet"
            value={heightFeet}
            onChange={(e) => setHeightFeet(e.target.value)}
          />
          <input
            type="number"
            placeholder="Inches"
            value={heightInches}
            onChange={(e) => setHeightInches(e.target.value)}
          />
        </div>

        <button type="submit">Save Profile</button>
        {message && <p style={{ color: "green" }}>{message}</p>}
      </form>

      <div className="profile-summary" style={{ marginTop: "20px" }}>
        <h3>Your Information</h3>
        <p>Current Weight: {currentWeight || "lbs"}</p>
        <p>Goal Weight: {goalWeight || "lbs"}</p>
        <p>Height: {heightFeet || "ft"} {heightInches || "in"}</p>
        <p>Fitness Goal: {goal || "Stay Fit"}</p>
        <p>Today's Steps: {steps || 0}</p>
      </div>
    </div>
  );
}

export default Profile;
