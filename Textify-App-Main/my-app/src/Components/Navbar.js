import React, {useState} from 'react'
import PropTypes from 'prop-types'
import './Navbar.css';

const Navbar = (props) => {
    const [theme, settheme] = useState(false);
    const [text, settext] = useState("Show");

    const toggleTheme = () => {
        settheme(!theme);
        // settext("Hide");
    }
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
               {theme && <Themecolor {...props}/>}
                {/* <div className={`form-check form-switch text-${props.mode == "light" ? "dark" : "white"}`} >
                    <input className="form-check-input" onClick={() => props.toggleMode("dark", "#1e1e1e")} type="checkbox" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                </div> */}
                <button class="btn btn-dark" onClick={toggleTheme}>{/*text==="Hide" ? "Hide" : "Show"*/}Theme Colors</button>
            </div>


        </nav>
    )
}

const Themecolor = (props) => {
    return <>
        <div className='choose-theme-styles'>
            {/* <span  className='white-theme' onClick={() => props.toggleMode("light", "#b530b5")}></span> */}
            <span className='purple-theme' onClick={() => props.toggleMode("purple", "#b530b5")}></span>
            <span className='dark-theme' onClick={() => props.toggleMode("orange", "#f5a059")}></span>
            <span className='blue-theme' onClick={() => props.toggleMode("blue", "#5b9cc1")}></span>
            <span className='black-theme' onClick={() => props.toggleMode("dark", "#363d44")}></span>
        </div>

    </>
}

Navbar.defaultProps = {
    about: "About Us"
}


export default Navbar