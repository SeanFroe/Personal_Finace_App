import React from "react";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import BackendDataComponent from "./src/components/BackendDataComponent";

// Mock fetch globally
global.fetch = jest.fn();

describe("BackendDataComponent", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders loading state initially", () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ users: [] }),
    });

    render(<BackendDataComponent />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("renders data when API call is successful", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ users: ["Alice", "Bob"] }),
    });

    render(<BackendDataComponent />);

    // Wait for users to be rendered
    await waitFor(() => {
      expect(screen.getByText("Alice")).toBeInTheDocument();
      expect(screen.getByText("Bob")).toBeInTheDocument();
    });
  });

  test("renders an error message when API call fails", async () => {
    fetch.mockRejectedValueOnce(new Error("Failed to fetch"));

    render(<BackendDataComponent />);

    await waitFor(() => {
      expect(screen.getByText(/Error: Failed to fetch/i)).toBeInTheDocument();
    });
  });

  test("renders 'No users found' when API returns an empty list", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ users: [] }),
    });

    render(<BackendDataComponent />);

    await waitFor(() => {
      expect(screen.getByText("No users found.")).toBeInTheDocument();
    });
  });
});
