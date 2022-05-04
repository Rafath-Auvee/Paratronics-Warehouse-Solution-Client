import React from "react";
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  NavDropdown,
  Button,
  MenuItem,
  Badge 
} from "react-bootstrap";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";
import "./Header.css";
import CustomLink from "../Utilities/CustomLink/CustomLink.js";
const Header = () => {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          bg="dark"
          variant="dark"
          expand={expand}
          className="me-auto "
        >
          <Container fluid>
            <Navbar.Brand to="/" className="pe-3">
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Paratronics
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 pe-3 nav-menu">
                  <CustomLink to="/">Home</CustomLink>
                  <CustomLink to="/inventory">Inventory</CustomLink>
                  {/* <CustomLink to="/order">Order</CustomLink> */}
                  
                  <CustomLink to="/order">
                  
                    Order<Badge bg="secondary">9</Badge>
                    <span className="visually-hidden">unread messages</span>
                    
                  </CustomLink>
                  
                </Nav>

                <Nav>
                  <CustomLink to="/login">Login</CustomLink>
                  <CustomLink to="/register">Register</CustomLink>
                </Nav>
                {/* <NavDropdown
                  className="pull-right"
                  eventKey={1}
                  title={
                    <img
                      className="user_image"
                      src="https://i.ibb.co/LJ2BGT2/121105442-creative-illustration-of-default-avatar-profile-placeholder-isolated-on-background-art-des.webp"
                      alt="user pic"
                    />
                  }
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item to="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item divider />
                  <NavDropdown.Item eventKey={1.3}>
                    <i className="fa fa-sign-out"></i> Logout
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Header;
