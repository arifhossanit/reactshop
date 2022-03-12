import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container px-4 px-lg-5">
                <Link className="navbar-brand" to="/">
                    <img src="/assets/img/logo.png" alt="LaraBazar" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
                <form className="d-flex mx-5 input-group" action="\search" method="GET">
                    <input name="query" className="form-control" type="search" placeholder="Search with product name" aria-label="Search" />
                    <button className="btn btn-outline-light input-group-text" type="submit" id="btnsearch"><i className="fas fa-search"></i></button>
                </form>
                <div className="d-flex">
                    <Link to="/cartlist" className="btn text-warning"><i className="fab fa-opencart"></i> Cart()</Link>
                </div>
                <div className="d-flex nav-item dropdown">
                    
                    <Link className="nav-link dropdown-toggle text-white" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">user name</Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><Link className="dropdown-item" to="#">Profile</Link></li>
                        <li><Link className="dropdown-item" to="/logout">Logout</Link></li>
                    </ul>
                    
                    <Link className="nav-link text-white" to="/login">Login</Link>
                   
                </div>
                <div className="d-flex nav-item">
                    
                    <Link className="nav-link text-white" to="/register">Register</Link>
                    
                </div>
                </div>
            </div>
        </nav>
    </div>
  )
}
