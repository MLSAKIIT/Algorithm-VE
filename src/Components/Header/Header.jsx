import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "./x.svg";
import { ReactComponent as MenuIcon } from "./menu.svg";
import { ReactComponent as Logo } from "./logo.svg";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <a href="/">
            <Logo className="logo" />
          </a>
        </div>

        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/" style={{textDecoration:"none",color:"black"}}>Algo</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/" style={{textDecoration:"none",color:"black"}}>algo</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/" style={{textDecoration:"none",color:"black"}}>dropdown</a>
          </li>
          <li className="option mobile-option" onClick={closeMobileMenu}>
            <a href="/" style={{textDecoration:"none",color:"black"}}>SIGN-IN</a>
          </li>
          <li className=" option mobile-option" onClick={closeMobileMenu}>
            <a href="/" className="sign-up">
              SIGN-UP
            </a>
          </li>
        </ul>
      </div>
      <ul className="signin-up">
        <li className="sign-in" onClick={closeMobileMenu}>
          <a href="/" style={{textDecoration:"none",color:"black"}} >SIGN-IN</a>
        </li>
        <li onClick={closeMobileMenu}>
          <a href="/"  style={{textDecoration:"none",color:"black"}}className="signup-btn">
            SIGN-UP
          </a>
        </li>
      </ul>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Header;