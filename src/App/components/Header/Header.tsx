import React from 'react';
import CustomLink from '../CustomLink';

const Header = () => {

    const linkClActive = 'header-navbar__links-item'
    const linkCl = 'header-navbar__links-activ'

    return (
        <header className="header-navbar">
      <div className="header-navbar__container">
        <div className="header-navbar__logo">
<div className="header-navbar__logo-text">GRS</div>
        </div>
        
        
    <div className="header-navbar__links">
      <CustomLink activeCl={linkClActive} noActive={linkCl} to="/"  text='Главная'></CustomLink>
      <CustomLink activeCl={linkClActive} noActive={linkCl}  to="/product" text='Наша продукция'></CustomLink>
      <CustomLink activeCl={linkClActive} noActive={linkCl} to="/post" text='Посты'></CustomLink>
    </div>
      </div>
    </header>
    );
};

export default Header;