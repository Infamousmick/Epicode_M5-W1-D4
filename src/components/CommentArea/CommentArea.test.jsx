import { render, screen } from "@testing-library/react";
import CommentArea from "./CommentArea";
import { ThemeProvider } from "../../contexts/ThemeContext";
import userEvent from "@testing-library/user-event";
import App from "../../App";

describe("Testing CommentArea component", () => {
  it("Should render correctly", () => {
    render(
      <ThemeProvider>
        <CommentArea />
      </ThemeProvider>,
    );

    const title = screen.getByText(/Area Commenti/i);
    expect(title).toBeInTheDocument();
  });

  it("Should not render any single comment on page load", () => {
    render(<App />);

    const singleComments = screen.queryAllByText(/Autore:/i);

    expect(singleComments).toHaveLength(0);
  });

  it("Should load comments when a book is clicked", async () => {
    render(<App />);
    const user = userEvent.setup();

    const bookCards = screen.getAllByTestId("book-card");
    await user.hover(bookCards[0]);

    const bookBtns = screen.getAllByText(/Vedi dettagli/i);
    await user.click(bookBtns[0]);

    const singleComments = await screen.findAllByText(/Autore:/i);

    expect(singleComments.length).toBeGreaterThan(0);
  });
});
