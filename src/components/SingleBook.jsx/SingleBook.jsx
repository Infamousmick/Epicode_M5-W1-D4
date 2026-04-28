import { Container, Col, Card, Button } from "react-bootstrap";
import { useState } from "react";
import "./SingleBook.css";

const SingleBook = ({ book }) => {
  const [selected, setSelected] = useState(false);
  const { title, category, img } = book;
  return (
    <Col>
      <Card
        onClick={() => setSelected(!selected)}
        className={selected ? "border border-danger border-4" : ""}
      >
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{category}</Card.Text>
          <Button variant="primary">Acquista</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
