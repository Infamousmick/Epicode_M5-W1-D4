import { useContext } from "react";
import Alert from "react-bootstrap/Alert";
import { ThemeContext } from "../../contexts/ThemeContext";

const Welcome = ({ text, strongText }) => {
  const { computedTextClass, computedAlertVariant } = useContext(ThemeContext);
  return (
    <div className="pt-4">
      <h1 className={computedTextClass}>EpiBooks</h1>
      <Alert variant={computedAlertVariant}>
        {text} <strong>{strongText}</strong>
      </Alert>
    </div>
  );
};

export default Welcome;
