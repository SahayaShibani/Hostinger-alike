import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from './assets/image.png';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const handleClickOutside = (event) => {
    if (activeMenu && !event.target.closest('.dropdown')) {
      setActiveMenu(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [activeMenu]);

  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo">
          <img src={logo} alt="Hostinger Logo" className="logo-img" />
          <p>HOSTINGER</p>
        </div>
        <div className="language">
          <img src="https://flagcdn.com/w320/in.png" alt="India Flag" className="flag-img" />
          <span>English</span>
        </div>
      </div>
      <nav className="nav-menu">
        <div className="dropdown">
          <button className="dropbtn" onClick={() => toggleDropdown('hosting')}>
            Hosting <span className={`arrow ${activeMenu === 'hosting' ? 'rotate' : ''}`}>&#9662;</span>
          </button>
          {activeMenu === 'hosting' && (
            <div className="dropdown-content">
              <div className="dropdown-item">
                <span>Shared Hosting</span>
                <p>Fast, secure, and easy to manage.</p>
              </div>
              <div className="dropdown-item">
                <span>VPS Hosting</span>
                <p>Scalable and powerful for any website.</p>
              </div>
              <div className="dropdown-item">
                <span>Cloud Hosting</span>
                <p>Reliable and efficient cloud solutions.</p>
              </div>
            </div>
          )}
        </div>

        <div className="dropdown">
          <button className="dropbtn" onClick={() => toggleDropdown('wordpress')}>
            WordPress <span className={`arrow ${activeMenu === 'wordpress' ? 'rotate' : ''}`}>&#9662;</span>
          </button>
          {activeMenu === 'wordpress' && (
            <div className="dropdown-content">
              <div className="dropdown-item">
                <span>WordPress Hosting</span>
                <p>Premium built-in features and AI tools included.</p>
              </div>
              <div className="dropdown-item">
                <span>Managed WooCommerce</span>
                <p>Start and scale your eCommerce website.</p>
              </div>
            </div>
          )}
        </div>

        <div className="dropdown">
          <button className="dropbtn" onClick={() => toggleDropdown('website-builder')}>
            Website Builder <span className={`arrow ${activeMenu === 'website-builder' ? 'rotate' : ''}`}>&#9662;</span>
          </button>
          {activeMenu === 'website-builder' && (
            <div className="dropdown-content">
              <div className="dropdown-item">
                <span>Hostinger Website Builder</span>
                <p>Create your website with ease.</p>
              </div>
              <div className="dropdown-item">
                <span>eCommerce Website Builder</span>
                <p>All the tools you need to build an online store.</p>
              </div>
            </div>
          )}
        </div>

        <a href="#" className="nav-link">Pro</a>
        <a href="#" className="nav-link">Domain</a>
      </nav>
      <div className="login-btn">
        <button>Log in</button>
      </div>
    </header>
  );
};

export default Header;
