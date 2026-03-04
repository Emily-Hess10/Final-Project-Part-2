import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    const result = await login(email, password);
    if (result.success) navigate("/"); // redirect to dashboard
    else setError(result.message);
  };

  return (
    <div className="dashboard">
      <h2 className="section-title">Login</h2>
      <form onSubmit={handleSubmit} className="profile-form">
        <label>Email</label>
        <input
          type="email"
          value={email}
          placeholder="you@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          placeholder="••••••••"
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;