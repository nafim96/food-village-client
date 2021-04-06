import React, { useContext } from "react";
import { Card, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const MainHeader = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const imgStyle = {
    width: "10%",
    borderRadius: "50%",
  };
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand>
        <Link className="mr-auto text-white" to="/">
          Food Village
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto text-white">
          <Nav.Link>
            <Link className="mr-auto text-white" to="/">
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="mr-auto text-white" to="/order">
              Orders
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="mr-auto text-white" to="/admin">
              Admin
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="mr-auto text-white" to="/contact">
              Contact Us
            </Link>
          </Nav.Link>
          {loggedInUser.isSigned ? (
            <Nav.Link>
              <Link className="mr-auto text-white" to="/profile">
                {loggedInUser.name}
              </Link>
            </Nav.Link>
          ) : (
            <Nav.Link>
              <Link className="mr-auto text-white" to="/login">
                Login
              </Link>
            </Nav.Link>
          )}
          {loggedInUser.isSigned && (
            <Card.Img variant="top" className="mr-auto" style={imgStyle} src={loggedInUser.photo} />
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainHeader;
