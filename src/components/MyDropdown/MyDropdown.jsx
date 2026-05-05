import { Form, Dropdown } from "react-bootstrap";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

function MyDropdown({ showedBooks, setShowedBooks }) {
  const handleDrodown = (e) => {
    setShowedBooks(e.target.textContent);
  };

  const { computedTextClass, computedVariant } = useContext(ThemeContext);
  return (
    <>
      <Form.Label className={computedTextClass}>
        Seleziona categoria:
      </Form.Label>
      <Dropdown>
        <Dropdown.Toggle variant={computedVariant} id="dropdown-basic">
          Scegli Categoria
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#" onClick={handleDrodown}>
            Fantasy
          </Dropdown.Item>
          <Dropdown.Item href="#" onClick={handleDrodown}>
            History
          </Dropdown.Item>
          <Dropdown.Item href="#" onClick={handleDrodown}>
            Horror
          </Dropdown.Item>
          <Dropdown.Item href="#" onClick={handleDrodown}>
            Romance
          </Dropdown.Item>
          <Dropdown.Item href="#" onClick={handleDrodown}>
            Scifi
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default MyDropdown;
