// src/pages/Log.jsx
import { useState } from "react";
import { useTracker } from "../context/TrackerContext";

function Log() {
  const { meals, addMeal, removeMeal } = useTracker();
  const [food, setFood] = useState("");

  const handleAddMeal = async (e) => {
    e.preventDefault();
    if (!food.trim()) return;

    try {
      const res = await fetch(
        `https://api.nal.usda.gov/fdc/v1/foods/search?query=${food}&api_key=${import.meta.env.VITE_API_KEY}`
      );

      const data = await res.json();

      if (!data.foods || data.foods.length === 0) {
        alert("Food not found");
        return;
      }

      const nutrients = data.foods[0].foodNutrients;

      const caloriesObj = nutrients.find(
        (n) => n.nutrientName === "Energy"
      );

      const calories = caloriesObj ? caloriesObj.value : 0;

      addMeal({
        food,
        calories,
      });

      setFood("");
    } catch (error) {
      console.error("API error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>FitTrack</h1>
      <p>Your Daily Health Dashboard</p>

      <h2>Log Meal</h2>

      <form onSubmit={handleAddMeal}>
        <input
          type="text"
          placeholder="Enter food (ex: chicken)"
          value={food}
          onChange={(e) => setFood(e.target.value)}
          style={{ padding: "8px", width: "70%", marginRight: "10px" }}
        />
        <button type="submit" style={{ padding: "8px 16px" }}>
          Add Meal
        </button>
      </form>

      <div style={{ marginTop: "30px" }}>
        {meals.length === 0 && <p>No items logged yet</p>}

        {meals.map((meal, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              border: "1px solid #ddd",
              marginBottom: "10px",
              borderRadius: "8px",
            }}
          >
            <div>
              <strong>{meal.food}</strong>
              <p>{meal.calories} calories</p>
            </div>

            <button
              onClick={() => removeMeal(index)}
              style={{
                backgroundColor: "red",
                color: "white",
                border: "none",
                padding: "6px 12px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Log;
