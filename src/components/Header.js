import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Redux
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
