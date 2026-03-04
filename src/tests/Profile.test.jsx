import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Profile from "../pages/Profile";
import { TrackerProvider } from "../context/TrackerContext";
import { AuthContext } from "../context/AuthContext";

test("renders profile title", () => {
  render(
    <BrowserRouter>
      <AuthContext.Provider value={{ user: { email: "test@test.com" } }}>
        <TrackerProvider>
          <Profile />
        </TrackerProvider>
      </AuthContext.Provider>
    </BrowserRouter>
  );

  expect(
    screen.getByRole("heading", { name: /your profile/i })
  ).toBeInTheDocument();
});