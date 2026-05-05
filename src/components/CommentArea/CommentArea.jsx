import { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CommentList from "../CommentList/CommentList";
import AddComment from "../AddComment/AddComment";
import { Alert, Spinner } from "react-bootstrap";
import MyToast from "../MyToast/MyToast";
import { ThemeContext } from "../../contexts/ThemeContext";

function CommentArea({ title, show, setShow, asin }) {
  const handleClose = () => setShow(false);
  const { computedMainBg, computedTextClass } = useContext(ThemeContext);

  const [comments, setComments] = useState([]);

  const [form, setForm] = useState({
    comment: "",
    rate: "1",
    elementId: asin,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  const [toastConfig, setToastConfig] = useState({
    show: false,
    text: "",
    type: "",
    description: "",
  });
  const triggerToast = (text, type, description) => {
    setToastConfig({
      show: true,
      text: text,
      type: type,
      description: description,
    });
  };

  const [editingId, setEditingId] = useState(null);

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
    } catch (error) {
      setErr(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getComments();
  }, [asin]);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        contentClassName={`${computedMainBg} ${computedTextClass}`}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Commenti per libro
            <strong className="text-warning fst-italic"> {title}</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddComment
            form={form}
            setForm={setForm}
            asin={asin}
            getComments={getComments}
            triggerToast={triggerToast}
            editingId={editingId}
          />
          {isLoading && !err && <Spinner className="mt-4" animation="grow" />}
          {!isLoading && !err && (
            <CommentList
              comments={comments}
              getComments={getComments}
              triggerToast={triggerToast}
              editingId={editingId}
              setEditingId={setEditingId}
            />
          )}
          {!isLoading && err && (
            <Alert className="mt-4" variant="danger">
              Errore nel caricamento dei commenti
            </Alert>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <MyToast
        show={toastConfig.show}
        text={toastConfig.text}
        onClose={() => setToastConfig({ ...toastConfig, show: false })}
        type={toastConfig.type}
        description={toastConfig.description}
      />
    </>
  );
}

export default CommentArea;
