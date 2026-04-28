import { useState } from "react";
import fantasy from "../../books/fantasy.json";
import history from "../../books/history.json";
import horror from "../../books/horror.json";
import romance from "../../books/romance.json";
import scifi from "../../books/scifi.json";
import { Container, Col, Row } from "react-bootstrap";
import SingleBook from "../SingleBook.jsx/SingleBook";
import MyForm from "../MyForm/MyForm";

const AllTheBooks = ({ showedBooks }) => {
  const [limitBooks, setLimitBooks] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");

  const bookCategories = {
    fantasy: fantasy,
    history: history,
    horror: horror,
    romance: romance,
    scifi: scifi,
  };
  return (
    <>
      <Container>
        <Col>
          <MyForm
            limitBooks={limitBooks}
            setLimitBooks={setLimitBooks}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </Col>
      </Container>{" "}
      <Container>
        <h2>{showedBooks}</h2>
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
