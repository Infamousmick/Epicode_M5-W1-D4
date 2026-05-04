import { Star, CircleUserRound, Trash2, PencilLine } from "lucide-react";
import CommentForm from "../CommentForm/CommentForm";

import { useState } from "react";

const SingleComment = ({
  id,
  author,
  rate,
  comment,
  getComments,
  triggerToast,
  editingId,
  setEditingId,
}) => {
  const auth = {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWQ1NTUzNmJhMGYxMjAwMTUyZTc3NmQiLCJpYXQiOjE3Nzc1NTU5NDcsImV4cCI6MTc3ODc2NTU0N30.P8chELuZEVUSgPBmeAHEh2EMr7q5KXFy1w2DblgzQKo",
    "Content-Type": "application/json",
  };
  const [err, setErr] = useState("");

  const [editData, setEditData] = useState({ comment: comment, rate: rate });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${id}`,
        {
          method: "PUT",
          headers: auth,
          body: JSON.stringify(editData),
        },
      );
      if (!response.ok) {
        throw new Error("Errore nel caricamento dei dati");
      } else {
        triggerToast(
          "Edit Comment",
          "info",
          "Commento modificato con successo!",
        );
        getComments();
        setEditingId(null);
      }
    } catch (error) {
      setErr(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({
      ...editData,
      [name]: value,
    });
  };
  let isFormValid = editData.comment.trim() !== "" && editData.rate !== "";

  const deleteComment = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${id}`,
        {
          method: "DELETE",
          headers: auth,
        },
      );
      if (!response.ok) {
        throw new Error("Errore nel caricamento dei dati");
      } else {
        triggerToast(
          "Delete Comment",
          "warning",
          "Commento eliminato con successo!",
        );
        getComments();
      }
    } catch (error) {
      setErr(error.message);
    }
  };
  const handleDelete = () => {
    console.log(`Elimino il commento con id  ${id}`);
    deleteComment();
  };

  return (
    <>
      {editingId === id ? (
        <CommentForm
          form={editData}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          isFormValid={isFormValid}
          title="Modifica commento"
          handleCancel={() => setEditingId(null)}
          isEditForm={true}
        />
      ) : (
        <div className="d-flex flex-column gap-3 mt-4 border rounded p-3 bg-dark-subtle">
          <div className="d-flex align-items-center gap-3">
            <CircleUserRound />
            <p className="mb-0">Autore: {author}</p>
            <div className="d-flex gap-2">
              {editingId === null && (
                <PencilLine
                  onClick={() => setEditingId(id)}
                  size="20"
                  color="orange"
                />
              )}
              <Trash2 size="20" color="red" onClick={handleDelete} />
            </div>
          </div>

          <p className="mb-0">Ha scritto: {comment}</p>
          <div className="d-flex gap-1">
            {[...Array(5)].map((value, index) => {
              const starValue = index + 1;
              return (
                <Star
                  key={index}
                  color={starValue <= parseInt(rate) ? "yellow" : "gray"}
                  fill={starValue <= parseInt(rate) ? "yellow" : "gray"}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default SingleComment;
