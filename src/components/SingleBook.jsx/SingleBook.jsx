import { Container, Card, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import "./SingleBook.css";

import { ThemeContext } from "../../contexts/ThemeContext";

const SingleBook = ({ book, selectedAsin, setSelectedAsin }) => {
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
        onClick={toggleAsin}
        className={
          selectedAsin === book.asin ? "border border-2 border-danger" : ""
        }
      >
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{category}</Card.Text>
          <Button variant={computedVariant}>Acquista</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;
