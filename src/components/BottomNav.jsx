import { NavLink } from "react-router-dom";
import { Home, Utensils, Activity, User } from "lucide-react";

function BottomNav() {
  return (
    <nav className="bottom-nav">

      <NavLink to="/" className="nav-icon">
        <Home />
      </NavLink>

      <NavLink to="/meals" className="nav-icon">
        <Utensils />
      </NavLink>

      <NavLink to="/workouts" className="nav-icon">
        <Activity />
      </NavLink>

      <NavLink to="/profile" className="nav-icon">
        <User />
      </NavLink>

    </nav>
  );
}

export default BottomNav;