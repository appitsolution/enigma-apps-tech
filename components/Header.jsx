import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-block">
          <a className="header-logo">
            Enigma Apps Tech
            {/* <Image className="header-logo-icon" /> */}
          </a>

          <ul className="header-menu">
            <li className="header-menu-item">
              <a className="header-menu-link">About</a>
            </li>
            <li className="header-menu-item">
              <a className="header-menu-link">Service</a>
            </li>
            <li className="header-menu-item">
              <a className="header-menu-link">Portfolio</a>
            </li>
            <li className="header-menu-item">
              <a className="header-menu-link">Price</a>
            </li>
            <li className="header-menu-item">
              <a className="header-menu-link">Contacts</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
