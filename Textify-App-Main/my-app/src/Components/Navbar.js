import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = (props) => {
    const [theme, settheme] = useState(false);

    const toggleTheme = () => {
        settheme(!theme);
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
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.page}</Link>
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
    return <React.Fragment>
        <div className='choose-theme-styles'>
            {/* <span  className='white-theme' onClick={() => props.toggleMode("light", "#b530b5")}></span> */}
            <span className='purple-theme' onClick={() => props.toggleMode("purple", "#b530b5")}></span>
            <span className='dark-theme' onClick={() => props.toggleMode("orange", "#f5a059")}></span>
            <span className='blue-theme' onClick={() => props.toggleMode("blue", "#5b9cc1")}></span>
            <span className='black-theme' onClick={() => props.toggleMode("dark", "#363d44")}></span>
        </div>

    </React.Fragment>
}

// Navbar.defaultProps = {
//     about: "About Us"
// }


export default Navbar