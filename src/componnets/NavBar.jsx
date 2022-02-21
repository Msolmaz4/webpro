import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import { Navbar, Container } from "react-bootstrap";

function NavBar() {
  const { credentials, login, handleLogout } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <div>
      <Navbar className="navbar" expand="lg">
        <Container>
          <Navbar.Brand href={`/`}>React-MOVIE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <div className="buttons">
            {login ? (
              <div>
                <h1 className="text-capitalize text-light">
                  {credentials.firstName + " " + credentials.lastName}
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
