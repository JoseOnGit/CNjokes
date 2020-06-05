import React from "react";
import { Jumbotron } from "reactstrap";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <Jumbotron>
      <h1>Whoops!</h1>
      <h4>We couldn't find the page you are looking for.</h4>
      <h4>But Chuck Norris would find here something anyway.</h4>
      <p>
        <Link to="/" className="btn btn-primary btn-lg">
          Go to Home Page
        </Link>
      </p>
    </Jumbotron>
  );
}

export default NotFoundPage
