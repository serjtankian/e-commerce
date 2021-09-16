import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, userOrders } from "../store/usersReducer";
import AddButton from "./AdminButtons/AddButton";
import SeeUsersButton from "./SadminButtons/SeeUsersButton.jsx";
import "../index.css";
import PendingOrdersButton from "./SadminButtons/PendingOrdersButton";

export default function Naxvbar() {
  const user = useSelector((state) => state.users.loggedIn);
  const dispatch = useDispatch();
  const userId = user ? user.id : null;
  const userStatus = user ? user.isAdmin : null;
  const cartId = useSelector((state) => state.cart.cartData.id);

  console.log(user);
  return (
    <>
      <Navbar bg="primary" id="navCss"variant="dark">
        <Container>
          <Navbar.Brand>Steam Green</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link
                className="btn btn-outline-success text-white text-decoration-none"
                to="/"
              >
                Products
              </Link>
            </Nav.Link>
            <Nav.Link>
              {userId ? null : (
                <span>
                  <Link
                    to={`/login`}
                    className="btn btn-outline-primary text-white text-decoration-none"
                  >
                    Login
                  </Link>
                  /
                  <Link
                    to={`/register`}
                    className="btn btn-outline-primary text-white text-decoration-none"
                  >
                    Register
                  </Link>
                </span>
              )}
            </Nav.Link>
          </Nav>
          {userId ? (
            <NavDropdown
              title={user ? `Hola ${user.name}` : null}
              id="navbarScrollingDropdown"
              style={{ background: "white !important" }}
            >
              <NavDropdown.Item>
                <Link to={`/profile/edit/${user.email}`}>My Profile</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to="/orders"
                  onClick={() => {
                    dispatch(userOrders(user.id));
                  }}
                >
                  Orders history
                </Link>
              </NavDropdown.Item>
              {userStatus === "Admin" || userStatus === "SAdmin" ? (
                <AddButton />
              ) : null}
              {userStatus === "SAdmin" ? <SeeUsersButton /> : null}
              {userStatus === "SAdmin" ? <PendingOrdersButton /> : null}
              <NavDropdown.Divider />
              <Link to={`/`} onClick={() => dispatch(logoutUser())}>
                <NavDropdown.Item href="#action5">Logout</NavDropdown.Item>
              </Link>
            </NavDropdown>
          ) : null}
          <Nav.Link>
            <Link
              className="btn btn-outline-success text-white text-decoration-none"
              to={userId ? `/${userId}/${cartId}` : "/login"}
            >
              🛒
            </Link>
          </Nav.Link>
        </Container>
      </Navbar>
    </>
  );
}
