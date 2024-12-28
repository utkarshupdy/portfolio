import React from 'react';
import '../../pages/Contact/ContactPage.css';
/* TypedJs */
import { ReactTyped } from 'react-typed';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const Contact = () => (
  <section className="contactos" id="contactos">
    <h2 className="heading">
      <FormattedMessage id="contact" defaultMessage="Contact" />
    </h2>
    <h3 className="titulo" data-aos="fade-left" data-aos-delay="300">
      <FormattedMessage id="contact-info" defaultMessage="Contact me by: " />
      <ReactTyped
        className="site-contacto"
        loop
        typeSpeed={40}
        backSpeed={50}
        backDelay={1500}
        loopCount={Infinity}
        strings={['Gmail', 'WhatsApp', 'Instagram', 'Telegram', 'LinkedIn', 'GitHub']}
        smartBackspace
        showCursor
      />
    </h3>

    <div className="icons">
      <a href="mailto:ukupadhyay6789@gmail.com" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fas fa-envelope"></span>
        </div>
        <div className="text">Gmail</div>
      </a>
      <a href="https://api.whatsapp.com/send?phone=7309466387" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fa-whatsapp"></span>
        </div>
        <div className="text">Whatsapp</div>
      </a>
      <a href="https://www.instagram.com/utkarshupdy.exe/" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fa-instagram"></span>
        </div>
        <div className="text">Instagram</div>
      </a>
      <a href="https://t.me/utkarshupdy" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fa-telegram"></span>
        </div>
        <div className="text">Telegram</div>
      </a>
      <a href="https://www.linkedin.com/in/utkarsh-kumar-upadhyay-18685b24a/" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fa-linkedin-in"></span>
        </div>
        <div className="text">LinkedIn</div>
      </a>
      <a href="https://github.com/utkarshupdy/" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fa-github-square"></span>
        </div>
        <div className="text">GitHub</div>
      </a>
    </div>
  </section>
);

export default React.memo(Contact);
