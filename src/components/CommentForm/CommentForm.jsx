import { Form, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import { Star } from "lucide-react";
import { ThemeContext } from "../../contexts/ThemeContext";

const CommentForm = ({
  form,
  handleSubmit,
  handleChange,
  isFormValid,
  title,
  handleCancel,
  isEditForm,
  editingId,
}) => {
  const { computedVariant, computedFormClass } = useContext(ThemeContext);
  const [hover, setHover] = useState(0);

  return (
    <Form
      onSubmit={handleSubmit}
      className={`${editingId !== null && !isEditForm ? "opacity-50" : ""} ${computedFormClass}`}
    >
      <fieldset disabled={editingId !== null && !isEditForm}>
        <Form.Group className="mb-3">
          <p className="fs-3 fw-bold mb-2">{title}</p>
          <Form.Label>Commento:</Form.Label>
          <Form.Control
            name={"comment"}
            as="textarea"
            value={form.comment}
            placeholder="Scrivi qui..."
            required
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Valutazione:</Form.Label>
          <div>
            {[...Array(5)].map((_, index) => {
              const starValue = index + 1;
              const isActive =
                hover > 0 ? starValue <= hover : starValue <= Number(form.rate);
              return (
                <Star
                  key={starValue}
                  cursor="pointer"
                  fill={isActive ? "yellow" : "gray"}
                  color={isActive ? "yellow" : "gray"}
                  onMouseEnter={() => setHover(starValue)}
                  onMouseLeave={() => setHover(0)}
                  onClick={() =>
                    handleChange({
                      target: { name: "rate", value: starValue.toString() },
                    })
                  }
                />
              );
            })}
          </div>
        </Form.Group>
        <Button variant={computedVariant} type="submit" disabled={!isFormValid}>
          Submit
        </Button>
        {isEditForm ? (
          <Button variant="secondary" className="ms-2" onClick={handleCancel}>
            Annulla
          </Button>
        ) : (
          " "
        )}
      </fieldset>
    </Form>
  );
};

export default CommentForm;
