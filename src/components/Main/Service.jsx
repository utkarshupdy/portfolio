import React from 'react';
import '../../pages/Service/ServicesPage.css';
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

const Service = () => {
  return (
    <section className="servicios" id="servicios">
      <h2 className="heading">Coding Profiles</h2>
      <div className="row grid grid-cols-2 sm:grid-cols-4 gap-8">
        {/* CodeChef Profile */}
        <div className="columns interactive-card bg-white shadow-lg rounded-lg p-5">
          <div className="card-header flex justify-center mb-4">
            {/* CodeChef Image */}
            <img 
              src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Codechef%28new%29_logo.svg/1200px-Codechef%28new%29_logo.svg.png" 
              alt="CodeChef" 
              className="platform-img max-w-full h-32 object-contain" 
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
        <div className="columns interactive-card bg-white shadow-lg rounded-lg p-5">
          <div className="card-header flex justify-center mb-4">
            {/* CodeForces Image */}
            <img 
              src="https://cdn.iconscout.com/icon/free/png-256/free-code-forces-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-2-pack-logos-icons-3029920.png?f=webp&w=256" 
              alt="CodeForces" 
              className="platform-img max-w-full h-32 object-contain" 
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
        <div className="columns interactive-card bg-white shadow-lg rounded-lg p-5">
          <div className="card-header flex justify-center mb-4">
            {/* LeetCode Image */}
            <img 
              src="https://cdn.iconscout.com/icon/free/png-256/free-leetcode-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-4-pack-logos-icons-2944960.png" 
              alt="LeetCode" 
              className="platform-img max-w-full h-32 object-contain" 
            />
          </div>
          <div className="card-footer text-center">
            <Link 
              to="https://leetcode.com/ukupadhyay6789" 
              target="_blank" 
              className="card-link text-blue-500 hover:text-blue-700"
            >
              <ButtomGet message={"LeetCode"}/>
            </Link>
          </div>
        </div>

        {/* GeeksforGeeks Profile */}
        <div className="columns interactive-card bg-white shadow-lg rounded-lg p-5">
          <div className="card-header flex justify-center mb-4">
            {/* GeeksforGeeks Image */}
            <img 
              src="https://img.icons8.com/?size=512&id=AbQBhN9v62Ob&format=png" 
              alt="GeeksforGeeks" 
              className="platform-img max-w-full h-32 object-contain" 
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
    </section>
  );
};

export default React.memo(Service);
