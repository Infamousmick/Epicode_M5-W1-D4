import React from "react";
import { Alert } from "react-bootstrap";

const EmptyState = ({ searchQuery }) => {
  return (
    <div className="text-center mt-5 mb-5 w-100">
      <h3 className="display-6">🕵️‍♂️ Ops!</h3>
      <Alert variant="warning" className="mt-3">
        Non abbiamo trovato nessun libro che contenga
        <strong> "{searchQuery}"</strong> nel titolo.
        <br />
        Prova a cercare con altre parole o controlla l'ortografia!
      </Alert>
    </div>
  );
};

export default EmptyState;
