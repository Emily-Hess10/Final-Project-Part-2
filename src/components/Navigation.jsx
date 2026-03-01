import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="nav-bar">
      <Link to="/">Dashboard</Link>
      <Link to="/search">Search</Link>
      <Link to="/log">My Log</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
}

export default Navigation;