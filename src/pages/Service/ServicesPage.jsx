import React from 'react';
import { Link } from 'react-router-dom';
import { ButtomGet } from '../../components/ButtomGet/ButtomGet';

/* Components */
import HeaderPage from "../../components/Header/HeaderPage";
import Footer from "../../components/Footer/Footer";
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Main from '../../components/Main';

const ServicesPage = () => {
  return (
    <div>
      <HeaderPage />
      <ParticleBackground />

      <Main className="servicios py-12" id="servicios">
        <h2 className="heading text-3xl font-bold text-center mb-8">Coding Profiles</h2>
        <div className="row grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-8 overflow-auto">

          {/* CodeChef Profile */}
          <div className="columns interactive-card bg-white shadow-lg rounded-lg p-5 flex flex-col  items-center justify-between">
            <div className="card-header mb-4">
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Codechef%28new%29_logo.svg/1200px-Codechef%28new%29_logo.svg.png" 
                alt="CodeChef" 
                className="platform-img w-32 h-32 object-contain" 
              />
            </div>
            <div className="card-footer text-center">
              <Link 
                to="https://www.codechef.com/users/utkarshupdy" 
                target="_blank" 
                className="card-link text-blue-500 hover:text-blue-700"
              >
                <ButtomGet message={"CodeChef"} />
              </Link>
            </div>
          </div>

          {/* CodeForces Profile */}
          <div className="columns interactive-card bg-white shadow-lg rounded-lg p-5 flex flex-col items-center justify-between">
            <div className="card-header mb-4">
              <img 
                src="https://cdn.iconscout.com/icon/free/png-256/free-code-forces-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-2-pack-logos-icons-3029920.png?f=webp&w=256" 
                alt="CodeForces" 
                className="platform-img w-32 h-32 object-contain" 
              />
            </div>
            <div className="card-footer text-center">
              <Link 
                to="https://codeforces.com/profile/utkarshupdy" 
                target="_blank" 
                className="card-link text-blue-500 hover:text-blue-700"
              >
                <ButtomGet message={"CodeForces"} />
              </Link>
            </div>
          </div>

          {/* LeetCode Profile */}
          <div className="columns interactive-card bg-white shadow-lg rounded-lg p-5 flex flex-col items-center justify-between">
            <div className="card-header mb-4">
              <img 
                src="https://cdn.iconscout.com/icon/free/png-256/free-leetcode-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-4-pack-logos-icons-2944960.png" 
                alt="LeetCode" 
                className="platform-img w-32 h-32 object-contain" 
              />
            </div>
            <div className="card-footer text-center">
              <Link 
                to="https://leetcode.com/ukupadhyay6789" 
                target="_blank" 
                className="card-link text-blue-500 hover:text-blue-700"
              >
                <ButtomGet message={"LeetCode"} />
              </Link>
            </div>
          </div>

          {/* GeeksforGeeks Profile */}
          <div className="columns interactive-card bg-white shadow-lg rounded-lg p-5 flex flex-col items-center justify-between">
            <div className="card-header mb-4">
              <img 
                src="https://img.icons8.com/?size=512&id=AbQBhN9v62Ob&format=png" 
                alt="GeeksforGeeks" 
                className="platform-img w-32 h-32 object-contain" 
              />
            </div>
            <div className="card-footer text-center">
              <Link 
                to="https://www.geeksforgeeks.org/author/utkarshupdy/" 
                target="_blank" 
                className="card-link text-blue-500 hover:text-blue-700"
              >
                <ButtomGet message={"GFG"} />
              </Link>
            </div>
          </div>

        </div>

        {/* Portfolio Button */}
        <div className="portafolio-btn mt-8 text-center">
          <Link to="/project" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Visit Projects
          </Link>
        </div>
      </Main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default ServicesPage;
