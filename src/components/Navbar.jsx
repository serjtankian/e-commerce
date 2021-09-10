import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Container, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { loggedUser, logoutUser } from '../store/usersReducer';

export default function Naxvbar() {
  const user = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(loggedUser());
  }, []);

  console.log('USER en  NAVBAR-> ', user);

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
              {user.loggedIn ? (
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
            <Nav.Link>
              <Link
                className="btn btn-outline-primary text-white text-decoration-none"
                to="/cart"
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
