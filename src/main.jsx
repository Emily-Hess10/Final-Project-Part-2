import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";
import "./App.css";

import { AuthProvider } from "./context/AuthContext";
import { TrackerProvider } from "./context/TrackerContext";
import { FitnessProvider } from "./context/FitnessContext"; // 👈 ADD THIS

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <TrackerProvider>
        <FitnessProvider>   {/* 👈 ADD THIS */}
          <App />
        </FitnessProvider>
      </TrackerProvider>
    </AuthProvider>
  </BrowserRouter>
);
