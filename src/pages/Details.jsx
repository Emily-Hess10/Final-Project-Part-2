import { useParams } from "react-router-dom";
import { useTracker } from "../context/TrackerContext";

function Details() {
  const { id } = useParams();
  const { log } = useTracker();

  const item = log.find((item) => item.id === Number(id));

  if (!item) return <p>Item not found</p>;

  return (
    <div>
      <h1>{item.name}</h1>
      <p>Calories: {item.calories}</p>
    </div>
  );
}

export default Details;