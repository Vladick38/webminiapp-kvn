import React from 'react';
import './navbar.css';


const Navbar = ({ onSelect, current }) => {
  return (
    <nav className="navbar">
      <button
        className={current === 'settings' ? 'active' : ''}
        onClick={() => onSelect('settings')}
      >
        Settings
      </button>
      
    </nav>
  );
};

export default Navbar;
