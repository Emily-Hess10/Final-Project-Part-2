import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Navigation from "./components/Navigation";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Meals from "./pages/Meals";
import Workouts from "./pages/Workouts";
import Profile from "./pages/Profile";
import Log from "./pages/Log";
import Details from "./pages/Details";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        element={
          <ProtectedRoute>
            <Navigation />
          </ProtectedRoute>
        }
      >
        <Route path="/" element={<Dashboard />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/log" element={<Log />} />
        <Route path="/details/:id" element={<Details />} />
      </Route>
    </Routes>
  );
}

export default App;
