import React from "react";
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  NavDropdown,
  Button,
  MenuItem,
  Badge,
} from "react-bootstrap";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";
import "./Header.css";
import CustomLink from "../Utilities/CustomLink/CustomLink.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init.js";
const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          bg="dark"
          variant="dark"
          expand={expand}
          className="me-auto py-2"
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
                <Nav
                  className={`justify-content-start flex-grow-1 px-3 nav-menu  ${
                    user ? "custom-margin" : ""
                  } `}
                >
                  <CustomLink to="/">Home</CustomLink>
                  <CustomLink to="/inventory">Inventory</CustomLink>
                  {/* <CustomLink to="/order">Order</CustomLink> */}
                </Nav>

                <Nav>
                  {user ? (
                    <>
                      {" "}
                      { (user?.photoURL) ? <>
                        <NavDropdown
                        className="ms-auto mx-16"
                        title={
                          <div className="flex justify-content-center text-align-center">
                            <img
                              className="user_image "
                              src={user?.photoURL}
                              alt="user pic"
                            />
                            <Button variant="info" className="pl-1 mx-3 text-black success user-name">
                              {user?.displayName}
                            </Button>
                          </div>
                        }
                        id="basic-nav-dropdown"
                      >
                        <NavDropdown.Item to="/addproduct">
                          Add Product
                        </NavDropdown.Item>
                        <NavDropdown.Item to="/manageproduct">
                          Manage Product
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          to="/order"
                          className="justify-content-center"
                        >
                          Order
                          <Badge className="mx-2 mt-2 " bg="dark">
                            9
                          </Badge>
                          <span className="visually-hidden">
                            unread messages
                          </span>
                        </NavDropdown.Item>
                        <NavDropdown.Item />
                        <NavDropdown.Item>
                          <Button
                            variant="danger"
                            size="lg"
                            className="mx-2"
                            onClick={handleSignOut}
                          >
                            Sign Out
                          </Button>
                        </NavDropdown.Item>
                      </NavDropdown>{" "}
                       </> : <>  <NavDropdown
                        className="ms-auto mx-16"
                        title={
                          <Button
                            variant="primary"
                            size="sm"
                            className="mx-2"
                            
                          >
                            My Account
                          </Button>
                        }
                        id="basic-nav-dropdown"
                      >
                        <NavDropdown.Item to="/addproduct">
                          Add Product
                        </NavDropdown.Item>
                        <NavDropdown.Item to="/manageproduct">
                          Manage Product
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          to="/order"
                          className="justify-content-center"
                        >
                          Order
                          <Badge className="mx-2 mt-2 " bg="dark">
                            9
                          </Badge>
                          <span className="visually-hidden">
                            unread messages
                          </span>
                        </NavDropdown.Item>
                        <NavDropdown.Item />
                        <NavDropdown.Item>
                          <Button
                            variant="danger"
                            size="lg"
                            className="mx-2"
                            onClick={handleSignOut}
                          >
                            Sign Out
                          </Button>
                        </NavDropdown.Item>
                      </NavDropdown> </>}
                      
                    </>
                  ) : (
                    <>
                      {" "}
                      <CustomLink to="/login">Login</CustomLink>
                      <CustomLink to="/register">Register</CustomLink>
                    </>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Header;
