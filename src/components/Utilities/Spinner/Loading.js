import React from 'react';
import Spinner from "react-bootstrap/Spinner";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center text-center">
      <Spinner animation="grow" variant="dark" />
    </div>
  );
};

export default Loading;