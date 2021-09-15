import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';


export default function SeeUsersButton() {
    
    return (
        <Nav.Link>
            <Link
                className="btn btn-outline-primary text-white text-decoration-none"
                to="/users"
                // onClick={handleClick}
            >
                See All Users
            </Link>
        </Nav.Link>

    )
}
