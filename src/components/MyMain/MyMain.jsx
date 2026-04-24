import { useState } from "react";
import Welcome from "../Welcome/Welcome";
import AllTheBooks from "../AllTheBooks/AllTheBooks";
import MyDropdown from "../MyDropdown/MyDropdown";
import MyForm from "../MyForm/MyForm";
import { Container, Row, Col } from "react-bootstrap";
const MyMain = () => {
  const [showedBooks, setShowedBooks] = useState("Fantasy");
  const [limitBooks, setLimitBooks] = useState(20);
  return (
    <Container>
      <Welcome text="Welcome to" strongText="EpiBooks page" variant="info" />
      <Row className="justify-content-center mb-4">
        <Col>
          <MyDropdown
            showedBooks={showedBooks}
            setShowedBooks={setShowedBooks}
          />
        </Col>
        <Col>
          <MyForm limitBooks={limitBooks} setLimitBooks={setLimitBooks} />
        </Col>
      </Row>

      <AllTheBooks showedBooks={showedBooks} limitBooks={limitBooks} />
    </Container>
  );
};

export default MyMain;
