import Header from "../components/Header";
import { useTracker } from "../context/TrackerContext";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

function Log() {
  const { log, removeItem } = useTracker();
  const navigate = useNavigate();

  return (
    <div>
      <Header title="My Log" />

      {log.length === 0 && <p>No items logged yet</p>}

      {log.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          calories={item.calories}
          onClick={() => navigate(`/details/${item.id}`)}
        />
      ))}
    </div>
  );
}

export default Log;