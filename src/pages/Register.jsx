import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("All fields are required");
      return;
    }

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters");
      return;
    }

    const result = await register(email, password);

    if (result.success) {
      navigate("/login");
    } else {
      setMessage(result.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>

      {message && <p className="error">{message}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Register</button>
      </form>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Register;