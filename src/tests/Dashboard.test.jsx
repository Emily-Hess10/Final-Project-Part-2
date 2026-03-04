import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import { TrackerProvider } from "../context/TrackerContext";
import { AuthContext } from "../context/AuthContext";

test("Dashboard renders summary section", () => {
  render(
    <BrowserRouter>
      <AuthContext.Provider value={{ user: { email: "test@test.com" }, logout: vi.fn() }}>
        <TrackerProvider>
          <Dashboard />
        </TrackerProvider>
      </AuthContext.Provider>
    </BrowserRouter>
  );

  expect(screen.getByText(/Today's Summary/i)).toBeInTheDocument();
});