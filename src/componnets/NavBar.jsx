import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../auth/firebase-config";

import { Navbar, Container } from "react-bootstrap";

function NavBar() {
  const {   currentUser} = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout =()=>{
    signOut(auth)
  }

  return (
    <div>
      <Navbar className="navbar" expand="lg">
        <Container>
          <Navbar.Brand href={`/`}>React-MOVIE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <div className="buttons">
            {currentUser ? (
              <div>
                <h1 className="text-capitalize text-light">
                  {currentUser.displayName}
                </h1>
                <button
                  onClick={handleLogout}
                  className="btn btn-outline-dark mx-2 d-flex"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <button
                  type="button"
                  className="btn btn-outline-dark mx-2"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark mx-2"
                  onClick={() => navigate("/register")}
                >
                  Register
                </button>
              </>
            )}
          </div>
        </Container>
      </Navbar>
    </div>
  );
}
export default NavBar;
