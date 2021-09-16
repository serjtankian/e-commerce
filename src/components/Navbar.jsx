import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Container, Navbar, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, userOrders } from '../store/usersReducer';
import AddButton from './AdminButtons/AddButton';
import SeeUsersButton from './SadminButtons/SeeUsersButton.jsx';
import logo from "../assets/steam_verde_by_brastertag_ddgdagc.png"


export default function Naxvbar() {
  const user = useSelector((state) => state.users.loggedIn);
  const dispatch = useDispatch();
  const userId = user ? user.id : null;
  const userStatus = user ? user.isAdmin : null;
  const cartId = useSelector((state) => state.cart.cartData.id);

  console.log(user);
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c1c9ae6e-bf1f-417c-b9b6-80d425a3a207/ddgdagc-f75ecd4d-21b8-4cfb-a120-b0beda6a69d2.png/v1/fill/w_1280,h_1279,strp/steam_verde_by_brastertag_ddgdagc-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI3OSIsInBhdGgiOiJcL2ZcL2MxYzlhZTZlLWJmMWYtNDE3Yy1iOWI2LTgwZDQyNWEzYTIwN1wvZGRnZGFnYy1mNzVlY2Q0ZC0yMWI4LTRjZmItYTEyMC1iMGJlZGE2YTY5ZDIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.9fKkRdt5qUwmFZWI8BEACDZuyDTX6g9aaK_7a-AqKdA"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Brand>Steam Green</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link
                className="btn btn-outline-primary text-white text-decoration-none"
                to="/"
              >
                Products
              </Link>
            </Nav.Link>
            <Nav.Link>
              {userId ? (
                <Link
                  to={`/`}
                  className="btn btn-outline-primary text-white text-decoration-none"
                  onClick={() => dispatch(logoutUser())}
                >
                  Logout
                </Link>
              ) : (
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
              {userId ?
                <Link
                  to={`/profile/edit/${user.email}`}
                  className="btn btn-outline-primary text-white text-decoration-none"
                >
                  My Profile
                </Link>
                :
                null}
            </Nav.Link>
            {userStatus === "Admin" || userStatus === "SAdmin" ? <AddButton /> : null}
            {userStatus === "SAdmin" ? <SeeUsersButton /> : null}
            <Nav.Link>
              <Link
                className="btn btn-outline-primary text-white text-decoration-none"
                to={userId ? `/${userId}/${cartId}` : "/login"}
              >
                🛒
              </Link>
            </Nav.Link>
          </Nav>

          <NavDropdown
            title={user ? `Hola ${user.name}` : null}
            id="navbarScrollingDropdown"
            style={{ background: "white !important" }}
          >
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
            <NavDropdown.Item href="#action4">
              Editar usuario
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
    </>
  );
}
