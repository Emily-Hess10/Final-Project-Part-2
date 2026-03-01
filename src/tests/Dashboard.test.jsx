import { render, screen } from "@testing-library/react";
import Dashboard from "../pages/Dashboard";
import { FitnessProvider } from "../context/FitnessContext";
import { BrowserRouter } from "react-router-dom";

test("Dashboard renders summary section", () => {
  render(
    <BrowserRouter>
      <FitnessProvider>
        <Dashboard />
      </FitnessProvider>
    </BrowserRouter>
  );

  const title = screen.getByText(/Today's Summary/i);
  expect(title).toBeInTheDocument();
});