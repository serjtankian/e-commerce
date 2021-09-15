import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Container, Navbar, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, userOrders } from '../store/usersReducer';
import AddButton from './AdminButtons/AddButton';
import SeeUsersButton from './SadminButtons/SeeUsersButton.jsx';


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
              style={{background: "white !important"}}
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
