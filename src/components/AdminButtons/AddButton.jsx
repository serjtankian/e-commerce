import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Container, Navbar } from 'react-bootstrap';
export default function AddButton() {
    return (

        <Nav.Link>
            <Link
                className="btn btn-outline-primary text-white text-decoration-none"
                to="/create/videoGame/addNew"
            >
                Add New Product
            </Link>
        </Nav.Link>

    )
}
