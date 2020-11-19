import React from "react";

const Header = () => {
  return (
    <navbar className="main-header">
      <div className="main-nav">
        <div>
          <p className="navbar-title">Travelize</p>
          <subtitle>My traveling experiences</subtitle>
        </div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/" className="active">
              About
            </a>
          </li>
        </ul>
      </div>
    </navbar>
  );
};

export default Header;
