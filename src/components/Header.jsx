import { useAuth } from "../context/AuthContext";

function Header() {
  const { logout } = useAuth();

  return (
    <header className="header">
      <h1>FitTrack</h1>
      <p className="subtitle">Your Daily Health Dashboard</p>
      <button onClick={logout}>Logout</button>
    </header>
  );
}

export default Header;