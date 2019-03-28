import React, { Component } from "react";
import { Link } from "react-router-dom";


class NavBar extends Component {
    render() {
        return (
            <nav className="navbar">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/ViewAllLoadsDispatcher">View Loads</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/AssignEditLoads">Assign Laods</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/LoginPage">Logout</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar