import { Container, Card, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import "./SingleBook.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useNavigate } from "react-router-dom";

const SingleBook = ({ book, selectedAsin, setSelectedAsin }) => {
  let navigate = useNavigate();

  const { computedVariant } = useContext(ThemeContext);
  const toggleAsin = () => {
    if (selectedAsin === book.asin) {
      setSelectedAsin(null);
    } else {
      setSelectedAsin(book.asin);
    }
  };

  const { title, category, img, asin } = book;
  return (
    <>
      <Card
        data-testid="book-card"
        className={`single-book-card ${selectedAsin === book.asin ? "border border-2 border-danger" : ""}`}
        onClick={toggleAsin}
      >
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{category}</Card.Text>
          <Button
            variant={computedVariant}
            onClick={() => {
              toggleAsin();
              navigate(`/details/${book.asin}`);
            }}
          >
            Vedi dettagli
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;
