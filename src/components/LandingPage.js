import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      Hey this is the landing page
      <Link to="/login">
        <button>Login Page</button>
      </Link>
    </div>
  );
}

export default LandingPage;
