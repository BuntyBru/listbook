import React from "react";
import { Link } from "react-router-dom";

function UserOrLogin({ user }) {
  console.log("user in header", user);
  return (
    <div className="navbar_identity">
      {user === null || user === undefined ? (
        <Link to="/login">
          {" "}
          <button>Login</button>
        </Link>
      ) : (
        <p>Hi, {user.first_name}</p>
      )}
    </div>
  );
}

export default UserOrLogin;
