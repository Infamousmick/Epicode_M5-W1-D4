import fantasy from "../../books/fantasy.json";
import history from "../../books/history.json";
import horror from "../../books/horror.json";
import romance from "../../books/romance.json";
import scifi from "../../books/scifi.json";
import MyCard from "../MyBookCard/MyBookCard";
import { Container, Row } from "react-bootstrap";

const AllTheBooks = ({ showedBooks, limitBooks }) => {
  const bookCategories = {
    fantasy: fantasy,
    history: history,
    horror: horror,
    romance: romance,
    scifi: scifi,
  };
  return (
    <Container>
      <h2>{showedBooks}</h2>
      <Row xs={2} md={4} lg={6} className="gy-3">
        {bookCategories[showedBooks.toLowerCase()]
          .slice(0, limitBooks)
          .reverse()
          .map((book) => {
            return (
              <MyCard
                key={book.asin}
                title={book.title}
                category={book.category}
                imgURL={book.img}
                btnText="Acquista"
              />
            );
          })}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
