import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';


export default function PendingOrdersButton() {
    
    return (
        <Nav.Link>
            <Link
                className="btn btn-outline-primary text-white text-decoration-none"
                to="/users"
            >
                Show Pending Orders
            </Link>
        </Nav.Link>

    )
}
