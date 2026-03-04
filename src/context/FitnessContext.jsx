import { createContext, useContext, useState } from "react";

const FitnessContext = createContext();

export function FitnessProvider({ children }) {
  const [meals, setMeals] = useState([]);
  const [workouts, setWorkouts] = useState([]);
  const [steps, setSteps] = useState(0);
  const [goal, setGoal] = useState("Stay Fit");

  // Profile data
  const [profile, setProfile] = useState({
    currentWeight: "",
    goalWeight: "",
    height: ""
  });

  const addMeal = (meal) => setMeals([...meals, meal]);
  const addWorkout = (workout) => setWorkouts([...workouts, workout]);
  const updateProfile = (newProfile) => setProfile(newProfile);

  return (
    <FitnessContext.Provider
      value={{
        meals,
        workouts,
        steps,
        goal,
        profile,
        setSteps,
        setGoal,
        addMeal,
        addWorkout,
        updateProfile
      }}
    >
      {children}
    </FitnessContext.Provider>
  );
}

export function useFitness() {
  return useContext(FitnessContext);
}