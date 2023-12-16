import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <i className="fa-brands fa-untappd" id="navbar"></i>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to={"/"}>Home <span className="sr-only">(current)</span></Link>
          <Link className="nav-item nav-link"to={"/search"}>Drinks</Link>
          <Link className="nav-item nav-link"to={"/contact"}>Contact</Link>
        </div>
      </div>
  </nav>
  );
}
export default Navbar;