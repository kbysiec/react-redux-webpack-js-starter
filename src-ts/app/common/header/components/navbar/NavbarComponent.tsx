import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

const NavbarComponent: React.SFC = () => (
  <ul className="navbar">
    <li className="navbar-item">
      <Link to="/" className="navbar-item-link">
        Home
      </Link>
    </li>
    <li className="navbar-item">
      <Link to="/books" className="navbar-item-link">
        Books
      </Link>
    </li>
  </ul>
);

export default NavbarComponent;
