import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { Container, Row, Col, Card, Alert } from "react-bootstrap";
import BaseLayout from "../Layout/BaseLayout";
import CommentArea from "../components/CommentArea/CommentArea";
import { ThemeContext } from "../contexts/ThemeContext";
import { CircleAlert } from "lucide-react";
import fantasy from "../books/fantasy.json";
import history from "../books/history.json";
import horror from "../books/horror.json";
import romance from "../books/romance.json";
import scifi from "../books/scifi.json";

const BookDetails = () => {
  const { asin } = useParams();
  const { computedMainBg, computedTextClass } = useContext(ThemeContext);

  const allBooks = [...fantasy, ...history, ...horror, ...romance, ...scifi];
  const foundBook = allBooks.find((book) => book.asin === asin);

  return (
    <BaseLayout>
      <div className={`${computedMainBg} ${computedTextClass} py-5 min-vh-100`}>
        <Container>
          {foundBook ? (
            <Row className="gy-4 justify-content-center">
              <Col md={5} lg={4}>
                <Card
                  className={`shadow-sm h-100 ${computedMainBg} ${computedTextClass} ${computedMainBg === "bg-dark" ? "border-secondary" : "border-0"}`}
                >
                  <Card.Img
                    variant="top"
                    src={foundBook.img}
                    style={{ height: "350px", objectFit: "contain" }}
                    className="bg-dark-subtle p-4"
                  />
                  <Card.Body className="text-center d-flex flex-column justify-content-center">
                    <Card.Title className="fs-3 fw-bold mb-3">
                      {foundBook.title}
                    </Card.Title>
                    <Card.Text
                      className={`mb-2 ${computedMainBg === "bg-dark" ? "text-white-50" : "text-muted"}`}
                    >
                      Categoria:{" "}
                      <span
                        className={`text-uppercase fw-bold ${computedMainBg === "bg-dark" ? "text-white" : ""}`}
                      >
                        {foundBook.category}
                      </span>
                    </Card.Text>
                    <Card.Text className="fs-4 fw-bold text-success mb-0">
                      €{foundBook.price}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={7} lg={8}>
                <div
                  style={{
                    maxHeight: "600px",
                    overflowY: "auto",
                    overflowX: "hidden",
                  }}
                  className="pe-2"
                >
                  <CommentArea asin={foundBook.asin} />
                </div>
              </Col>
            </Row>
          ) : (
            <Alert
              variant="danger"
              className="text-center shadow-sm d-flex align-items-center justify-content-center gap-2"
            >
              <CircleAlert /> Libro non trovato
            </Alert>
          )}
        </Container>
      </div>
    </BaseLayout>
  );
};

export default BookDetails;
