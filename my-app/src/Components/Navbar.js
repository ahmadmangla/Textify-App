import React from 'react'
import PropTypes from 'prop-types'
import './Navbar.css';

const Navbar = (props) => {
    return (
        <nav className={`navbar navbar-expand-md navbar-${props.mode} bg-${props.mode}`}>
            <div className="container">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.about}</a>
                        </li>
                    </ul>
                </div>

                <div className={`form-check form-switch text-${props.mode=="light" ? "dark" : "white"}`} >
                    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                </div>
            </div>


        </nav>
    )
}

Navbar.defaultProps = {
    about: "About Us"
}


export default Navbar