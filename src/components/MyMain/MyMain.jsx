import { useState, useContext } from "react";
import Welcome from "../Welcome/Welcome";
import AllTheBooks from "../AllTheBooks/AllTheBooks";
import MyDropdown from "../MyDropdown/MyDropdown";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Container, Row, Col } from "react-bootstrap";

const MyMain = ({ searchQuery, limitBooks }) => {
  const [showedBooks, setShowedBooks] = useState("Fantasy");
  const { computedMainBg } = useContext(ThemeContext);

  return (
    <div className={computedMainBg}>
      <Container>
        <Welcome text="Welcome to" strongText="EpiBooks page" />
        <Row className="justify-content-center mb-4">
          <Col>
            <MyDropdown
              showedBooks={showedBooks}
              setShowedBooks={setShowedBooks}
            />
          </Col>
        </Row>

        <AllTheBooks
          showedBooks={showedBooks}
          searchQuery={searchQuery}
          limitBooks={limitBooks}
        />
      </Container>
    </div>
  );
};

export default MyMain;
