import React, { Component } from "react";
import { Link } from "react-router-dom";


class NavBar extends Component {
    logout = () => {
        sessionStorage.clear("credentials")
        this.props.setAuth()
      }
    render() {
        return (
            <nav className="navbar">
                <ul className="nav nav-pills">

                    <li className="nav-item">
                        <Link className="nav-link" to="/" onClick={this.logout}>Logout </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/ViewAllLoadsDispatcher">View Loads</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/AssignEditLoads">Assign Loads</Link>
                    </li>
                  </ul>
            </nav>
        )
    }
}

export default NavBar