import { useState } from "react";
import { useFitness } from "../context/FitnessContext";

function Profile() {
  const { goal, setGoal, steps, setSteps, profile, updateProfile } = useFitness();

  const [formData, setFormData] = useState(profile);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(formData);
  };

  return (
    <div className="dashboard">
      <h2 className="section-title">Profile & Settings</h2>

      {/* FITNESS GOAL DROPDOWN */}
      <label>Fitness Goal</label>
      <select value={goal} onChange={(e) => setGoal(e.target.value)}>
        <option value="Stay Fit">Stay Fit</option>
        <option value="Lose Weight">Lose Weight</option>
        <option value="Gain Muscle">Gain Muscle</option>
        <option value="Move More">Move More</option>
        <option value="Improve Endurance">Improve Endurance</option>
      </select>

      {/* STEPS */}
      <label>Today's Steps</label>
      <input
        type="number"
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
      />

      {/* PROFILE FORM */}
      <form onSubmit={handleSubmit} className="profile-form">
        <label>Current Weight (lbs)</label>
        <input
          name="currentWeight"
          type="number"
          value={formData.currentWeight}
          onChange={handleChange}
        />

        <label>Goal Weight (lbs)</label>
        <input
          name="goalWeight"
          type="number"
          value={formData.goalWeight}
          onChange={handleChange}
        />

        <label>Height</label>
        <div className="height-inputs">
          <input
            name="heightFeet"
            type="number"
            placeholder="Feet"
            value={formData.heightFeet}
            onChange={handleChange}
          />
          <input
            name="heightInches"
            type="number"
            placeholder="Inches"
            value={formData.heightInches}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Save Profile</button>
      </form>

      {/* PROFILE DISPLAY */}
      <div className="profile-summary">
        <h3>Your Information</h3>
        <p>Current Weight: {profile.currentWeight} lbs</p>
        <p>Goal Weight: {profile.goalWeight} lbs</p>
        <p>
          Height: {profile.heightFeet} ft {profile.heightInches} in
        </p>
        <p>Fitness Goal: {goal}</p>
        <p>Today's Steps: {steps}</p>
      </div>
    </div>
  );
}

export default Profile;