import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container m-5">
      <div className="row justify-content-center text-center">
        <h2 className="mb-3 fs-4">404 Page Not Found!</h2>
        <p className="text-muted fs-5">
          This page is not found you should go to home page.
        </p>
      </div>
    </div>
  );
}

export default NotFound;
