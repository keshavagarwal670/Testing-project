// @ts-nocheck
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginForm from "./LoginForm";

describe("LoginForm Component", () => {
  test("renders LoginForm with email and password fields and a submit button", () => {
    render(<LoginForm startLogin={jest.fn()} />);

    expect(screen.getByPlaceholderText("Enter your username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter your password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  test("updates email and password state on input change", () => {
    render(<LoginForm startLogin={jest.fn()} />);

    const emailInput = screen.getByPlaceholderText("Enter your username");
    const passwordInput = screen.getByPlaceholderText("Enter your password");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(emailInput.value).toBe("test@example.com");
    expect(passwordInput.value).toBe("password123");
  });

  test("calls startLogin with the correct credentials on form submission", () => {
    const startLoginMock = jest.fn();
    render(<LoginForm startLogin={startLoginMock} />);

    const emailInput = screen.getByPlaceholderText("Enter your username");
    const passwordInput = screen.getByPlaceholderText("Enter your password");
    const submitButton = screen.getByRole("button", { name: /login/i });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(submitButton);

    expect(startLoginMock).toHaveBeenCalledTimes(1);
    expect(startLoginMock).toHaveBeenCalledWith({
      email: "test@example.com",
      password: "password123",
    });

    expect(emailInput.value).toBe(""); // Form should reset
    expect(passwordInput.value).toBe(""); // Form should reset
  });
});
