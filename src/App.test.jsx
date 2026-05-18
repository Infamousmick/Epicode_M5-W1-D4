import { render, screen } from "@testing-library/react";
import App from "./App";
import { describe, expect } from "vitest";
import fantasyBooks from "./books/fantasy.json";
import userEvent from "@testing-library/user-event";

describe("Testing App component", () => {
  it("Should render the correct amount of books card on load", () => {
    render(<App />);

    const bookCards = screen.getAllByTestId("book-card");

    expect(bookCards).toHaveLength(fantasyBooks.length);
  });
});

describe("Testing Search functionality", () => {
  it("Should filter books correctly based on a search input", async () => {
    render(<App />);

    const user = userEvent.setup();

    const searchInput = screen.getByPlaceholderText(/Insert title/i);

    await user.type(searchInput, "this is a test");

    const emptyCards = screen.queryAllByTestId("book-card");

    expect(emptyCards).toHaveLength(0);

    await user.clear(searchInput);
    await user.type(searchInput, "sword");

    const filteredCards = screen.getAllByTestId("book-card");
    expect(filteredCards.length).toBeGreaterThan(0);
    expect(filteredCards.length).toBeLessThan(fantasyBooks.length);
  });
});
