import Alert from "react-bootstrap/Alert";

const Welcome = ({ text, strongText, variant }) => {
  return (
    <div className="mt-4">
      <h1>EpiBooks</h1>
      <Alert variant={variant}>
        {text} <strong>{strongText}</strong>
      </Alert>
    </div>
  );
};

export default Welcome;
