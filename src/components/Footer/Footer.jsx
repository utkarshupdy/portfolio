import React from 'react';
import './Footer.css';

/* Multi idioma */
import {FormattedMessage} from 'react-intl';


const Footer = () =>{
    // Fecha
    let fetch = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="site-footer">
                <div className="copyright" id="text">
                    <p >
                        <FormattedMessage
                            id='footer-info'
                            defaultMessage='Page created by UtkarshUpdy'
                        />
                    </p>
                    <p >&copy; {fetch}. All Rights Reserved.</p>
                </div>
                <div className="redes-sociales">
                    <a href="linkedin.com/in/utkarsh-kumar-upadhyay-18685b24a/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/utkarshupdy/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    <a href="https://www.instagram.com/utkarshupdy.exe/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href="https://api.whatsapp.com/send?phone=7309466387" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
                </div>
            </div>
        </footer>
    )
};

export default React.memo(Footer);