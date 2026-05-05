import { Container, Col, Card, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import "./SingleBook.css";
import CommentArea from "../CommentArea/CommentArea";
import { ThemeContext } from "../../contexts/ThemeContext";

const SingleBook = ({ book }) => {
  const { computedVariant } = useContext(ThemeContext);
  const [selected, setSelected] = useState(false);
  const { title, category, img, asin } = book;
  return (
    <Col>
      {selected && (
        <CommentArea
          title={title}
          show={selected}
          setShow={setSelected}
          asin={asin}
        ></CommentArea>
      )}
      <Card
        onClick={() => setSelected(!selected)}
        className={selected ? "border border-danger border-4" : ""}
      >
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{category}</Card.Text>
          <Button variant={computedVariant}>Acquista</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
