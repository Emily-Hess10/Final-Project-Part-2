import "./Navigation.css";
import { Link, Outlet } from "react-router-dom";

function Navigation() {
  return (
    <>
      <nav className="nav-bar">
        <Link to="/">Dashboard</Link>
        <Link to="/log">My Log</Link>
        <Link to="/workouts">Workouts</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      <Outlet />
    </>
  );
}

export default Navigation;

