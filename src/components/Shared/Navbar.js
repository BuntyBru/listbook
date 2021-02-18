import React, { useContext } from "react";
import { Navbar } from "../../styled-comps/NavBar";
import { Link } from "react-router-dom";
import { AuthenticationContext } from "../../Context/AuthenticationContext";

const NavBar = () => {
  const { user } = useContext(AuthenticationContext);
  console.log("user in header", user);
  return (
    <Navbar>
      <div>
        <img
          alt="icon"
          src="https://open.scdn.co/cdn/images/favicon32.a19b4f5b.png"
        />
      </div>

      <div className="navbar_identity">
        {user === null ? (
          <Link to="/login">
            {" "}
            <button>Login</button>
          </Link>
        ) : (
          <img
            className="prof_image"
            alt="profile_pic"
            src={user.data.display_picture}
          />
        )}
      </div>
    </Navbar>
  );
};

export default NavBar;
