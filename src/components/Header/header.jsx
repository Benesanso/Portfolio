import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logoCouleur.png';
import './header.css';

function Header() {
  const location = useLocation();

  return (
    <header className="container">
      {/* Affichage du logo  */}
      <img className="LOGO" src={logo} alt="mon logo avec mes initiales" />
      {/* Navigation entre les pages */}
      <nav className="navbar">
        {/* Lien vers la page avec une classe active si l'URL correspond */}
        <Link className={`link-nav ${location.pathname === '/' ? 'active' : ''}`} to="/">Accueil</Link>
        <Link className={`link-nav ${location.pathname === '/Competences' ? 'active' : ''}`} to="/Competences">Compétences</Link>
        <Link className={`link-nav ${location.pathname.startsWith('/portfolio') ? 'active' : ''}`} to="/portfolio">Portfolio</Link>
        {/* Lien d'ancrage vers la section "Mes Contacts" dans la page "Portfolio" */}
        <a className={`link-nav ${location.pathname.startsWith('/portfolio') && location.hash === '#mescontacts' ? 'active' : ''}`} href="/portfolio#mescontacts">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
