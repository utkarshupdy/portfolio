import React from 'react';
import './Content.css';
import ParticleHeaderBg from '../ParticlesBg/ParticlesHeader/ParticleHeaderBg';

/* ReactScroll */
import { Link } from 'react-scroll';

const Content = () => (
    <div className="contenido">
        <ParticleHeaderBg />
        <section className="inicio" id="inicio">
            <div className='titulo'>
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
                    <div className="text-center space-y-6">
                        <p className="text-xl animate-fade-up">Hello 👋, I'm</p>
                        <h1 className="text-5xl md:text-9xl font-bold animate-fade-up uppercase delay-200">UTKARSH UPADHYAY</h1>
                        {/* <h3 className="text-2xl md:text-3xl text-green-400 font-medium animate-fade-up delay-400">
                            Full Stack Developer
                        </h3> */}
                        <p className="text-lg md:text-xl text-green-600 animate-fade-up delay-600">Full Stack Developer</p>
                    </div>
                </div>

                <div  className="redes-sociales ">
                    <a
                        href="https://linkedin.com/in/utkarsh-kumar-upadhyay-18685b24a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-aos="fade-up"
                        data-aos-delay="1200"
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                        href="https://github.com/utkarshupdy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-aos="fade-up"
                        data-aos-delay="1400"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                    <a
                        href="https://www.instagram.com/utkarshupdy.exe/"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-aos="fade-up"
                        data-aos-delay="1600"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a
                        href="https://api.whatsapp.com/send?phone=7309466387"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-aos="fade-up"
                        data-aos-delay="1800"
                    >
                        <i className="fab fa-whatsapp"></i>
                    </a>
                </div>
                <div className="wrapper">
                    <a
                        className="button"
                        href="https://linkedin.com/in/utkarsh-kumar-upadhyay-18685b24a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-aos="fade-up"
                        data-aos-delay="1200"
                    >
                        <div className="icon">
                            <i className="fab fa-linkedin"></i>
                        </div>
                        <span>Linkedin</span>
                    </a>
                    <a
                        className="button"
                        href="https://github.com/utkarshupdy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-aos="fade-up"
                        data-aos-delay="1400"
                    >
                        <div className="icon">
                            <i className="fab fa-github"></i>
                        </div>
                        <span>Github</span>
                    </a>
                    <a
                        className="button"
                        href="https://www.instagram.com/utkarshupdy.exe/"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-aos="fade-up"
                        data-aos-delay="1600"
                    >
                        <div className="icon">
                            <i className="fab fa-instagram"></i>
                        </div>
                        <span>Instagram</span>
                    </a>
                    <a
                        className="button"
                        href="https://api.whatsapp.com/send?phone=7309466387"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-aos="fade-up"
                        data-aos-delay="1800"
                    >
                        <div className="icon">
                            <i className="fab fa-whatsapp"></i>
                        </div>
                        <span>Whatsapp</span>
                    </a>
                </div>

                <Link to="sobre-mi" href="#sobre-mi">
                    <div className="scroll-down"></div>
                </Link>
            </div>
        </section>
    </div>
);

export default Content;
