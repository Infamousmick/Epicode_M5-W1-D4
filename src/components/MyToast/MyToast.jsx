import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

function MyToast({ show, text, onClose, type, description }) {
  return (
    <ToastContainer
      position="bottom-end"
      className="p-3 mt-5 opacity-75"
      style={{ position: "fixed", zIndex: 9999 }}
    >
      <Toast show={show} bg={type} onClose={onClose} delay={3000} autohide>
        <Toast.Header className="bg-transparent text-white border-0">
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">{text}</strong>
          <small className="text-white-50">just now</small>
        </Toast.Header>
        <Toast.Body className="text-white fw-bold">{description}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default MyToast;
