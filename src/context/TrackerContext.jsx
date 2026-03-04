// src/context/TrackerContext.jsx
import { createContext, useContext, useState } from "react";

const TrackerContext = createContext();

export function TrackerProvider({ children }) {
  const [meals, setMeals] = useState([]);

  const addMeal = (meal) => {
    setMeals((prev) => [...prev, meal]);
  };

  const removeMeal = (index) => {
    setMeals((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <TrackerContext.Provider value={{ meals, addMeal, removeMeal }}>
      {children}
    </TrackerContext.Provider>
  );
}

export function useTracker() {
  return useContext(TrackerContext);
}
