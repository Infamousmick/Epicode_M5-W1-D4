import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { ThemeContext } from "../../contexts/ThemeContext";

import MyToast from "../MyToast/MyToast";

function MyForm({ limitBooks, setLimitBooks, searchQuery, setSearchQuery }) {
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    if (e.target.value === "0") {
      setShowToast(true);
    }
    setLimitBooks(parseInt(e.target.value) || 20);
  };

  const { computedFormClass, computedTextClass } = useContext(ThemeContext);
  return (
    <>
      <Form className="d-flex flex-column align-items-center">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label className={`mb-2 ${computedTextClass}`}>
            Cerca per titolo
          </Form.Label>
          <Form.Control
            className={computedFormClass}
            required
            value={searchQuery}
            type="text"
            placeholder="Insert title"
            onChange={(e) => setSearchQuery(e.target.value)}
            min="1"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label className={`mb-2 ${computedTextClass}`}>
            Number of books
          </Form.Label>
          <Form.Control
            className={computedFormClass}
            required
            value={limitBooks}
            type="number"
            placeholder="Insert number"
            onChange={handleChange}
            min="1"
          />
        </Form.Group>
      </Form>
      <MyToast
        onClose={() => setShowToast(false)}
        show={showToast}
        text="Errore"
        type="danger"
        description="Il numero di libri deve essere maggiore di 0"
      />
    </>
  );
}

export default MyForm;
