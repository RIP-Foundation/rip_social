import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HomePage from "../src/app/page";

/**
 * TDD: Component tests
 * These tests define the expected UI behavior BEFORE implementation
 */

describe("Home Page", () => {
  it("should render the main heading", () => {
    render(<HomePage />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /rip social/i
    );
  });

  it("should render the tagline", () => {
    render(<HomePage />);
    expect(screen.getByText(/real identity/i)).toBeInTheDocument();
  });

  it("should have a get started button", () => {
    render(<HomePage />);
    const button = screen.getByRole("link", { name: /get started/i });
    expect(button).toBeInTheDocument();
  });

  it("should have a learn more link", () => {
    render(<HomePage />);
    const link = screen.getByText(/learn more/i);
    expect(link).toBeInTheDocument();
  });
});
