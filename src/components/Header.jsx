import React from 'react'
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header>
    <nav className="navbar bg-primary navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand text-light" href="#">{props.pageName}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fa-solid fa-bars text-light" style={{fontSize: '25px'}}></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
            <li className="nav-item">
              <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/counter">Counter</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </header>
  )
}

export default Header