import React from 'react';

function NotFound() {
  return (
    <div className="container text-center mt-5">
      <h1>404</h1>
      <p>Page non trouvée.</p>
      <a href="/" className="btn btn-primary">Retour à l'accueil</a>
    </div>
  );
}

export default NotFound;
