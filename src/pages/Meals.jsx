import { useState } from "react";
import { useFitness } from "../context/FitnessContext";

function Meals() {
  const { meals, addMeal } = useFitness();
  const [food, setFood] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `https://api.nal.usda.gov/fdc/v1/foods/search?query=${food}&api_key=${import.meta.env.VITE_API_KEY}`
      );

      const data = await res.json();

      if (!data.foods || data.foods.length === 0) return;

      const nutrients = data.foods[0].foodNutrients;

      const caloriesObj = nutrients.find(
        (n) => n.nutrientName === "Energy"
      );

      const calories = caloriesObj ? caloriesObj.value : "N/A";

      addMeal({
        food,
        calories,
      });

      setFood("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="dashboard">
      <h2 className="section-title">Log Meal</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter food (ex: chicken)"
          value={food}
          onChange={(e) => setFood(e.target.value)}
        />

        <button type="submit">Add Meal</button>
      </form>

      {meals.map((m, i) => (
        <div key={i} className="summary-card">
          {m.food} — {m.calories} cal
        </div>
      ))}
    </div>
  );
}

export default Meals;