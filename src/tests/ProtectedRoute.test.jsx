import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import { AuthContext } from "../context/AuthContext";

test("renders children when authenticated", () => {
  render(
    <AuthContext.Provider value={{ user: { email: "test@test.com" } }}>
      <MemoryRouter>
        <ProtectedRoute>
          <div>Private Page</div>
        </ProtectedRoute>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  expect(screen.getByText("Private Page")).toBeInTheDocument();
});

test("does not render children when not authenticated", () => {
  render(
    <AuthContext.Provider value={{ user: null }}>
      <MemoryRouter>
        <ProtectedRoute>
          <div>Private Page</div>
        </ProtectedRoute>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  expect(screen.queryByText("Private Page")).not.toBeInTheDocument();
});