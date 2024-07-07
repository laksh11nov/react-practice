import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
    <nav className="navbar navbar-expand-lg bg-primary bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand text-light" href="#">ReactJS</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fa-solid fa-bars text-light" style={{fontSize: '25px'}}></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
            <li className="nav-item">
              <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/contact">Conatct</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </header>
  )
}

export default Header