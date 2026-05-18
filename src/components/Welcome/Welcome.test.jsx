import { render, screen } from "@testing-library/react";
import Welcome from "./Welcome";
import { ThemeProvider } from "../../contexts/ThemeContext";
import { expect } from "vitest";

describe("Testing Welcome component", () => {
  it("Should render correctly a h1", () => {
    render(
      <ThemeProvider>
        <Welcome />
      </ThemeProvider>,
    );

    const title = screen.getByText(/Epibooks/i);

    expect(title).toBeInTheDocument();
  });

  it("Should have class 'text-dark' by default", () => {
    render(
      <ThemeProvider>
        <Welcome />
      </ThemeProvider>,
    );
    const title = screen.getByText(/Epibooks/i);

    expect(title).toHaveClass("text-dark");
  });
});
