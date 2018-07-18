import React from 'react';
import NavbarComponent from './components/navbar/NavbarComponent';
import './header.scss';
import logo from './_assets/img/react.svg';

const HeaderComponent: React.SFC = () => (
  <div className="header-wrapper">
    <div className="header">
      <img src={logo} className="header-logo" alt="logo" />
      <NavbarComponent />
    </div>
  </div>
);

export default HeaderComponent;
