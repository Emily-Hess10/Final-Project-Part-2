function Card({ name, calories, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <h3>{name}</h3>
      <p>Calories: {calories}</p>
    </div>
  );
}

export default Card;