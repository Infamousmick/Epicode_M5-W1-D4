import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CommentList from "../CommentList/CommentList";
import AddComment from "../AddComment/AddComment";

function CommentArea({ title, show, setShow, asin }) {
  const handleClose = () => setShow(false);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  const getComments = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWQ1NTUzNmJhMGYxMjAwMTUyZTc3NmQiLCJpYXQiOjE3Nzc1NTU5NDcsImV4cCI6MTc3ODc2NTU0N30.P8chELuZEVUSgPBmeAHEh2EMr7q5KXFy1w2DblgzQKo",
          },
        },
      );
      if (!response.ok) {
        throw new Error("Errore nel caricamento dei dati");
      }
      const jsonData = await response.json();
      setComments(jsonData);
    } catch (err) {
      setErr(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getComments();
  }, [asin]);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Commenti per libro:{" "}
            <strong className="text-warning fst-italic">{title}</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddComment />
          <CommentList comments={comments} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CommentArea;
