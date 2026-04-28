import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import MyToast from "../MyToast/MyToast";

function MyForm({ limitBooks, setLimitBooks, searchQuery, setSearchQuery }) {
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    if (e.target.value === "0") {
      setShowToast(true);
    }
    setLimitBooks(parseInt(e.target.value) || 20);
  };

  return (
    <>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label className="mb-2">Cerca per titolo</Form.Label>
            <Form.Control
              required
              value={searchQuery}
              type="text"
              placeholder="Insert title"
              onChange={(e) => setSearchQuery(e.target.value)}
              min="1"
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label className="mb-2">Number of books</Form.Label>
            <Form.Control
              required
              value={limitBooks}
              type="number"
              placeholder="Insert number"
              onChange={handleChange}
              min="1"
            />
          </Form.Group>
        </Row>
      </Form>
      <MyToast
        onClose={() => setShowToast(false)}
        show={showToast}
        errText="Errore"
        type="danger"
        errDescription="Il numero di libri deve essere maggiore di 0"
      />
    </>
  );
}

export default MyForm;
