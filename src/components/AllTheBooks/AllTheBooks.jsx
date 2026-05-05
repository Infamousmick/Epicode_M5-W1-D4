import { useState, useContext } from "react";
import fantasy from "../../books/fantasy.json";
import history from "../../books/history.json";
import horror from "../../books/horror.json";
import romance from "../../books/romance.json";
import scifi from "../../books/scifi.json";
import { Container, Col, Row } from "react-bootstrap";
import SingleBook from "../SingleBook.jsx/SingleBook";
import MyForm from "../MyForm/MyForm";

import { ThemeContext } from "../../contexts/ThemeContext";

const AllTheBooks = ({ showedBooks, searchQuery, limitBooks }) => {
  const bookCategories = {
    fantasy: fantasy,
    history: history,
    horror: horror,
    romance: romance,
    scifi: scifi,
  };

  const { computedTextClass } = useContext(ThemeContext);

  return (
    <>
      <Container className="pb-5">
        <h2 className={computedTextClass}>{showedBooks}</h2>
        <Row xs={2} md={4} lg={6} className="gy-3">
          {bookCategories[showedBooks.toLowerCase()]
            .filter((book) =>
              book.title
                .toLowerCase()
                .includes(searchQuery.toLocaleLowerCase()),
            )
            .slice(0, limitBooks)
            .reverse()
            .map((book) => {
              return <SingleBook key={book.asin} book={book} />;
            })}
        </Row>
      </Container>
    </>
  );
};

export default AllTheBooks;
