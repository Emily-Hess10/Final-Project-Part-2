import { useState } from "react";
import { useTracker } from "../context/TrackerContext";

function Meals() {
  const { meals, addMeal } = useTracker();
  const [food, setFood] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!food.trim()) return;

    try {
      const res = await fetch(
        `https://api.nal.usda.gov/fdc/v1/foods/search?query=${food}&api_key=${import.meta.env.VITE_API_KEY}`
      );
      const data = await res.json();

      if (!data.foods || data.foods.length === 0) return;

      const nutrients = data.foods[0].foodNutrients;
      const caloriesObj = nutrients.find((n) => n.nutrientName === "Energy");
      const calories = caloriesObj ? caloriesObj.value : 0;

      addMeal({ food, calories });
      setFood("");
    } catch (err) {
      console.error(err);
      alert("Failed to fetch calories. Try again.");
    }
  };

  return (
    <div>
      <h2>Log Meal</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter food (ex: chicken)"
          value={food}
          onChange={(e) => setFood(e.target.value)}
        />
        <button type="submit">Add Meal</button>
      </form>

      {meals.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          {meals.map((m, i) => (
            <div key={i}>
              {m.food} — {m.calories} cal
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Meals;
