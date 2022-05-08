import React, {useEffect, useState} from "react";
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
import { useLocation, Link, useParams,useNavigate } from "react-router-dom";
import "./Header.css";
import CustomLink from "../Utilities/CustomLink/CustomLink.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

import auth from "../../firebase.init.js";
import axiosPrivate from "../Hooks/axiosPrivate.js"
const Header = () => {
  const [user] = useAuthState(auth);
  const [products, setProducts] = useState([]);
  const [No, setNo] = useState(0);
  const email = user?.email
  const navigate = useNavigate()
  const { id } = useParams();
  const location = useLocation();
  // useEffect(
  //   (id) => {
  //     fetch(`https://intense-plains-05397.herokuapp.com/myitems?email=${email}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setProducts(data);
  //         setNo(data.length)
  //         // setItem(data)
  //         // setNo(data.quantity)
  //         // console.log("data",data)
  //       });
  //   },
  //   [products]
  // );

//   useEffect( () => {
        
//     const getOrders = async() =>{
//         const email = user?.email;
//         const url = `https://intense-plains-05397.herokuapp.com/myitems?email=${email}`;
//         try{
//           const {data} = await axiosPrivate.get(url);
//           setProducts(data);
//           setNo(data.length)
//       }
//       catch(error){
//           console.log(error.message);
//           if(error.response.status === 401 || error.response.status === 403){
//               signOut(auth);
//               navigate('/login')
//           }
//       }
//   }
//   getOrders();
// }, [user])

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
                src="fav.png"
                width="30"
                height="30"
                className="d-inline-block align-top brand-logo-non-user"
              />{" "}
              Paratronics
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas variant="dark"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="offcanvasBack"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                 Paratronics
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav
                  className={`justify-content-start flex-grow-1 px-3 nav-menu  ${
                    user ? "custom-margin" : "non-user-margin"
                  } `}
                >
                  <CustomLink to="/">Home</CustomLink>
                  <CustomLink to="/inventory">Inventory</CustomLink>
                  <CustomLink to="/blogs">Blog</CustomLink>
                  <CustomLink to="/tos">Conditions of Use</CustomLink>
                  {/* <CustomLink to="/myitems">MyItems</CustomLink> */}
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
                        <NavDropdown.Item as={Link} to="/addproduct">
                          Add Product
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/manageproduct">
                          All Products
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link}
                          to="/myitems"
                          className="justify-content-center"
                        >
                          My Items
                          <Badge className="mx-2" bg="dark">
                            {/* {No} */}
                          </Badge>
                          <span className="visually-hidden">
                            unread messages
                          </span>
                        </NavDropdown.Item>
                        <NavDropdown.Item />
                        <NavDropdown.Item>
                          <Button
                            variant="danger"
                            size="sm"
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
                            size="lg"
                            className="mx-2"
                          >
                            My Account
                          </Button>
                        }
                        id="basic-nav-dropdown"
                      >
                        <NavDropdown.Item as={Link} to="/addproduct">
                          Add Product
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/manageproduct">
                          All Products
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link}
                          to="/myitems"
                          className="justify-content-center"
                        >
                          My Items
                          <Badge className="mx-2 mt-2 " bg="dark">
                            {/* {No} */}
                          </Badge>
                          <span className="visually-hidden">
                            unread messages
                          </span>
                        </NavDropdown.Item>
                        <NavDropdown.Item />
                        <NavDropdown.Item>
                          <Button
                            variant="danger"
                            size="sm"
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
