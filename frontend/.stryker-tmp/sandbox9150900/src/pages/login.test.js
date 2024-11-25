// @ts-nocheck
import axios from "axios";
import loginService from "./login";

// jest.mock("axios");
// login.test.js
jest.mock("axios", () => ({
    post: jest.fn(), // Mock the `post` method
  }));
  

describe("Login Service", () => {
  test("sends a POST request with the correct credentials and returns data", async () => {
    const credentials = { email: "test@example.com", password: "password123" };
    const mockResponse = { data: { token: "mock-token", user: { id: 1, email: "test@example.com" } } };

    axios.post.mockResolvedValueOnce(mockResponse);

    const result = await loginService.login(credentials);

    expect(axios.post).toHaveBeenCalledWith("/api/v1/auth/authenticate", credentials);
    expect(result).toEqual(mockResponse.data);
  });

  test("throws an error if the login request fails", async () => {
    const credentials = { email: "test@example.com", password: "wrongpassword" };

    axios.post.mockRejectedValueOnce(new Error("Invalid credentials"));

    await expect(loginService.login(credentials)).rejects.toThrow("Invalid credentials");
    expect(axios.post).toHaveBeenCalledWith("/api/v1/auth/authenticate", credentials);
  });
});
