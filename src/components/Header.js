import React from 'react';
import logo_letters from '../images/tictail_logo_letters.png';

const Header = ({ title }) => {
  return [
    <header key="header" className="contacts__header">
      <div className="tictail__row contacts__header-wrapper">
        <img src={logo_letters} className="contacts__logo" alt="logo Tictail" />
        <h1 className="contacts__title">{title}</h1>
      </div>
    </header>,
    <div key="placeholder" className="header__placeholder" />
  ];
};

export default Header;