import { render, screen } from "@testing-library/react";
import Profile from "../pages/Profile";
import { FitnessProvider } from "../context/FitnessContext";

test("renders profile title", () => {
  render(
    <FitnessProvider>
      <Profile />
    </FitnessProvider>
  );

  expect(screen.getByText(/Profile & Settings/i)).toBeInTheDocument();
});