import React from 'react';
import { Link } from 'react-router-dom';
import { ButtomGet } from '../../components/ButtomGet/ButtomGet';

/* Components */
import HeaderPage from "../../components/Header/HeaderPage";
import Footer from "../../components/Footer/Footer";
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Main from '../../components/Main';
import '../../pages/Service/WE.css';

const WorkExperiencePage = () => {
  return (
    <div>
      <HeaderPage />
      <ParticleBackground />

      <Main className="servicios py-12" id="servicios">
        <h2 className="heading">Work Experience</h2>
        <div className="row2">

          {/* Gamers Tag Profile */}
          <div className="columns interactive-card">
            <div className="card-header">
              <img 
                src="/gamerstag-logo.svg" 
                alt="Gamers Tag" 
                className="platform-img"
              />
            </div>
            <div className="card-content">
              <h3>Gamers Tag Pvt. Ltd.</h3>
              <h4>SDE Intern</h4>
              <p className="duration">February 2025 - Present</p>
            </div>
            <div className="card-footer">
              <Link 
                to="/exp" 
                className="card-link"
              >
                <ButtomGet message={"Know More"} />
              </Link>
            </div>
          </div>

          {/* SendPay Profile */}
          <div className="columns interactive-card">
            <div className="card-header">
              <img 
                src="/sendpay-logo.svg" 
                alt="SendPay" 
                className="platform-img"
              />
            </div>
            <div className="card-content">
              <h3>SendPay</h3>
              <h4>Full Stack Developer Intern</h4>
              <p className="duration">November 2024 - January 2025</p>
            </div>
            <div className="card-footer">
              <Link 
                to="/exp" 
                className="card-link"
              >
                <ButtomGet message={"Know More"} />
              </Link>
            </div>
          </div>

          {/* GirlScript Profile */}
          <div className="columns interactive-card">
            <div className="card-header">
              <img 
                src="/project-logo.svg" 
                alt="GirlScript Summer of Code" 
                className="platform-img"
              />
            </div>
            <div className="card-content">
              <h3>GirlScript Summer of Code</h3>
              <h4>Open-Source Contributor</h4>
              <p className="duration">May 2024 - June 2024</p>
            </div>
            <div className="card-footer">
              <Link 
                to="/exp" 
                className="card-link"
              >
                <ButtomGet message={"Know More"} />
              </Link>
            </div>
          </div>

        </div>

        {/* Portfolio Button */}
        {/* <div className="portafolio-btn">
          <Link to="/exp" className="portfolio-link">
            Visit Proj
          </Link>
        </div> */}
      </Main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default WorkExperiencePage;