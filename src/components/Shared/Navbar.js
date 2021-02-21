import React, { useContext } from "react";
import { Navbar } from "../../styled-comps/NavBar";
//import { Link } from "react-router-dom";
import { AuthenticationContext } from "../../Context/AuthenticationContext";
import UserOrLogin from "./UserOrLogin";

const NavBar = () => {
  const { user } = useContext(AuthenticationContext);
  //console.log("user in header", user);
  return (
    <Navbar>
      <div>
        <img alt="icon" src="https://strataprop.com/assets/img/logo.svg" />
      </div>
      <UserOrLogin user={user} />
    </Navbar>
  );
};

export default NavBar;
