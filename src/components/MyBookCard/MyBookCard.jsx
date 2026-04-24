import Button from "react-bootstrap/Button";
import { Card, Col } from "react-bootstrap";
import "./MyBookCard.css";

const MyBookCard = ({ title, category, imgURL, btnText }) => {
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={imgURL} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{category}</Card.Text>
          <Button variant="primary">{btnText}</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MyBookCard;
