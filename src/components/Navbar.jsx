import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Container, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../store/usersReducer';
import AddButton from './AdminButtons/AddButton';



export default function Naxvbar() {
  const user = useSelector((state) => state.users.loggedIn);
  const dispatch = useDispatch();
  const userId = user ? user.id : null;
  const userStatus = user ? user.isAdmin : null;
  const cartId = useSelector((state) => state.cart.cartData.id);

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
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
              {user ? (
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
            </Nav.Link>
            {userStatus === "Admin" || userStatus === "SAdmin" ? <AddButton /> : null}
            <Nav.Link>
              <Link
                className="btn btn-outline-primary text-white text-decoration-none"
                to={userId ? `/${userId}/${cartId}` : "/login"}
              >
                🛒
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
