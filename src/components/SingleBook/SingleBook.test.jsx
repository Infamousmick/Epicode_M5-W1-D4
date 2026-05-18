import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";

import App from "../../App";

describe("Testing Book Selection", () => {
  it("Should change border color when clicked and restore previous one if another is clicked", async () => {
    render(<App />);
    const user = userEvent.setup();

    const bookCards = screen.getAllByTestId("book-card");
    const firstBook = bookCards[0];
    const secondBook = bookCards[1];

    expect(firstBook).not.toHaveClass("border-danger");

    await user.click(firstBook);

    expect(firstBook).toHaveClass("border-danger");

    await user.click(secondBook);

    expect(firstBook).not.toHaveClass("border-danger");

    expect(secondBook).toHaveClass("border-danger");
  });
});
