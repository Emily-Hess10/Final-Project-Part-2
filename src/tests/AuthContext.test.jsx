import { renderHook, act } from "@testing-library/react";
import { AuthProvider, useAuth } from "../context/AuthContext";

global.fetch = vi.fn();

test("login success sets user", async () => {
  fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => ({
      email: "test@test.com",
      role: "user",
      token: "123",
    }),
  });

  const wrapper = ({ children }) => (
    <AuthProvider>{children}</AuthProvider>
  );

  const { result } = renderHook(() => useAuth(), { wrapper });

  await act(async () => {
    await result.current.login("test@test.com", "password");
  });

  expect(result.current.user.email).toBe("test@test.com");
});

test("login failure returns error", async () => {
  fetch.mockResolvedValueOnce({
    ok: false,
    json: async () => ({
      message: "Invalid credentials",
    }),
  });

  const wrapper = ({ children }) => (
    <AuthProvider>{children}</AuthProvider>
  );

  const { result } = renderHook(() => useAuth(), { wrapper });

  const response = await result.current.login("wrong@test.com", "bad");

  expect(response.success).toBe(false);
});