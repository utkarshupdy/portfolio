import React, { useContext } from "react";
import './Header.css';

/* React router */
import { NavLink } from 'react-router-dom';
import img from './img.png'

/* DarkMode */
import DarkMode from '../DarkMode/DarkMode';

/* Language */
import { FormattedMessage } from "react-intl";
// import { langContext } from '../../context/Context';

const HeaderPage = () => {
    // Buttom language
    // const idioma = useContext(langContext);
    // Menu desplegable
    const menuDesplegable = () => {
        let navbar = document.querySelector('.navbar');
        navbar.classList.toggle("activar");

        window.onscroll = () => {
            if (window.scrollY > 0) {
                document.querySelector(".site-header").classList.add("activar")
            } else document.querySelector(".site-header").classList.remove("activar")

            navbar.classList.remove("activar")
        }
    }

    return (
        <header className="site-header">
            <div id="menu-btn" className="fas fa-bars" onClick={menuDesplegable}></div>

            <NavLink className="logo" to="/">
                <img src={img} alt="Logo" style={{ width: "30px", height: "30px" }} />
            </NavLink>
            <nav className="navbar">
                <NavLink to="/" offset={-150} duration={500}>
                    <FormattedMessage
                        id='home'
                        defaultMessage='Home'
                    />
                </NavLink>
                <NavLink to="/about" offset={-150} duration={500}>
                    <FormattedMessage
                        id='about'
                        defaultMessage='About me'
                    />
                </NavLink>
                <NavLink to="/exp" offset={-150} duration={500}>
                    <FormattedMessage
                        id='experience'
                        defaultMessage='Work Experience'
                    />
                </NavLink>
                <NavLink to="/project" offset={-150} duration={500}>
                    <FormattedMessage
                        id='projects'
                        defaultMessage='Projects'
                    />
                </NavLink>
                <div id="buttons">
                    
                </div>
            </nav>
            <div className="switch" id="switch">
                <DarkMode />
            </div>
        </header>
    )
}

export default React.memo(HeaderPage);