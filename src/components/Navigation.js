import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            React Multi-Page Website
          </Link>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className='nav-item '>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className='nav-item '>
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className='nav-item'>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
