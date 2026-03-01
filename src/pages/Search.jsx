import Header from "../components/Header";
import { useState } from "react";
import { useTracker } from "../context/TrackerContext";
import FormInput from "../components/FormInput";

function Search() {
  const { addItem } = useTracker();

  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");

  const handleAdd = () => {
    if (!name || !calories) return;

    addItem({
      id: Date.now(),
      name,
      calories: Number(calories),
    });

    setName("");
    setCalories("");
  };

  return (
    <div>
      <Header title="Add Food / Exercise" />

      <FormInput
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <FormInput
        label="Calories"
        type="number"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
      />

      <button onClick={handleAdd}>Add to Log</button>
    </div>
  );
}

export default Search;