import React from "react";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const auth = localStorage.getItem('users');
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/register');
  }

  return (
    <>
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container">
            <Link className="navbar-brand" to="#">
              DynamicWebsite
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div>
              {auth ? <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/service">Services</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/help">Help</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
                <li><Link className="nav-link" onClick={logout} to="/register">Logout
                 </Link></li>
              </ul>
                :
                <ul>
                  <Link className="btn btn-style" to="/register">Register</Link>
                  <Link className="btn btn-style btn-style-border" to="/login">Login</Link>
                </ul>
              }
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
