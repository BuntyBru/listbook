import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import "./bootstrapElements.css";

function UserOrLogin({ user, logout }) {
  //console.log("user in header", user);
  return (
    <div className="navbar_identity">
      {user === null || user === undefined ? (
        <Link to="/login">
          {" "}
          <button>Login</button>
        </Link>
      ) : (
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <img alt="prof_pic" src={user.display_picture} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Link className="dropdown-item" to="/profile/overview">
              Dashboard
            </Link>

            <Dropdown.Item onClick={() => logout()}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      )}
    </div>
  );
}

export default UserOrLogin;
