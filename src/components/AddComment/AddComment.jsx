import { useState } from "react";
import CommentForm from "../CommentForm/CommentForm";

const AddComment = ({
  asin,
  form,
  setForm,
  getComments,
  triggerToast,
  editingId,
}) => {
  const auth = {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWQ1NTUzNmJhMGYxMjAwMTUyZTc3NmQiLCJpYXQiOjE3Nzc1NTU5NDcsImV4cCI6MTc3ODc2NTU0N30.P8chELuZEVUSgPBmeAHEh2EMr7q5KXFy1w2DblgzQKo",
    "Content-Type": "application/json",
  };
  let isFormValid = form.comment.trim() !== "" && form.rate !== "";
  const [err, setErr] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/`,
        {
          method: "POST",
          headers: auth,
          body: JSON.stringify(form),
        },
      );
      if (!response.ok) {
        throw new Error("Errore nel caricamento dei dati");
      } else {
        setForm({
          comment: "",
          rate: "1",
          elementId: asin,
        });
        triggerToast(
          "Add Comment",
          "success",
          "Commento aggiunto con successo!",
        );
        getComments();
      }
    } catch (error) {
      setErr(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  return (
    <>
      <CommentForm
        form={form}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        isFormValid={isFormValid}
        title="Aggiungi commento"
        editingId={editingId}
      />
    </>
  );
};

export default AddComment;
