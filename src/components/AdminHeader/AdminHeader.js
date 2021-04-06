import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminHeader = () => {
  return (
    <Navbar bg="danger" expand="lg">
      <Navbar.Brand>
        <Link className="mr-auto text-white" to="/admin">
          cPanel
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link>
            <Link className="mr-auto text-white" to="/manage">
              manage
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="mr-auto text-white" to="/breakFast">
              Add Break Fast
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="mr-auto text-white" to="/lunch">
              Add Lunch
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="mr-auto text-white" to="/dinner">
              Add Dinner
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AdminHeader;
