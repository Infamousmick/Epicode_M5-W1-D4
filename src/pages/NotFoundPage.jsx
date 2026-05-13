import { Container, Alert } from "react-bootstrap";
import { CircleAlert } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(3);

  const cleanPath = pathname.split("/")[1] || "questa rotta";

  useEffect(() => {
    if (countdown === 0) {
      navigate("/");
      return;
    }
    const intervalId = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearTimeout(intervalId);
  }, [countdown, navigate]);

  return (
    <Container className="mt-5">
      <Alert
        variant="danger"
        className="text-center shadow-sm d-flex flex-column align-items-center justify-content-center gap-2 p-4"
      >
        <div className="d-flex align-items-center gap-2">
          <CircleAlert size={24} />
          <span className="fs-4">
            Pagina non trovata per <strong>{cleanPath}</strong>
          </span>
        </div>

        <hr className="w-100 opacity-25 my-3" />

        <p className="mb-0 fs-5">
          Verrai reindirizzato alla Home tra <strong>{countdown}</strong>{" "}
          secondi...
        </p>
      </Alert>
    </Container>
  );
};

export default NotFoundPage;
