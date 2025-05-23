import React, { useState } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import HeaderPage from '../Header/HeaderPage';
import Footer from '../Footer/Footer';
import '../../pages/Exp/WorkExperience.css';

const WorkExperience = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const workExperiences = [
    {
      id: 1,
      company: "Gamers Tag Pvt. Ltd.",
      position: "SDE Intern",
      duration: "February 2025 - Present",
      location: "Remote",
      type: "Current",
      logo: "/gamerstag-logo.svg",
      description: "Optimizing API architecture and enhancing frontend performance for a gaming platform with 1,000+ active users.",
      achievements: [
        "Optimized API architecture and real-time data handling, reducing client-server response time by 25% and improving scalability for a platform with 1,000+ active users",
        "Redesigned Next.js frontend with advanced caching strategies, leading to a 30% improvement in page load speed",
        "Developed and deployed 10+ responsive UI components, improving cross-platform compatibility and increasing user engagement"
      ],
      technologies: ["Next.js", "API Optimization", "Real-time Data", "Responsive Design", "Caching Strategies"]
    },
    {
      id: 2,
      company: "SendPay",
      position: "Full Stack Developer Intern",
      duration: "November 2024 - January 2025",
      location: "Remote",
      type: "Recent",
      logo: "/sendpay-logo.svg",
      description: "Architected backend payment processing services and implemented robust security measures for digital payment solutions.",
      achievements: [
        "Architected and enhanced backend payment processing services using Node.js and Express.js, reducing API response time by 35%",
        "Implemented robust authentication and security measures with OAuth JWT-based RBAC, improving data security by 60%",
        "Developed AI-powered invoicing and automated email tracking, enhancing payment processing efficiency by 40%"
      ],
      technologies: ["Node.js", "Express.js", "OAuth", "JWT", "Payment Processing", "AI Integration"]
    },
    {
      id: 3,
      company: "Personal Projects",
      position: "Full Stack Developer",
      duration: "Ongoing",
      location: "Self-Directed",
      type: "Projects",
      logo: "/project-logo.svg",
      description: "Building innovative AI-powered applications and real-time systems with modern web technologies.",
      achievements: [
        "Built ReelForge AI: AI MediaHub platform integrating 10+ AI models, reducing content creation time by 40%",
        "Developed LoadShield: Real-time AI theft detection system with 92% accuracy using YOLOv5",
        "Implemented scalable payment systems handling 1,500+ transactions with 99.9% reliability"
      ],
      technologies: ["React.js", "Node.js", "AI/ML", "MongoDB", "WebSockets", "Docker", "AWS"]
    }
  ];

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="work-experience-container">
      {/* Header Section */}
      <HeaderPage />
      <div className="header-section">
        <div className="header-content">
          <h1 className="main-title">Work Experience</h1>
          <p className="main-subtitle">
            Building scalable solutions and optimizing performance across diverse tech stacks
          </p>
        </div>
      </div>

      {/* Experience Cards */}
      <div className="experience-cards-container">
        <div className="cards-grid">
          {workExperiences.map((experience) => (
            <div key={experience.id} className="experience-card">
              <div className="card-content">
                {/* Header with Logo */}
                <div className="card-header">
                  <div className="header-main">
                    {/* Company Logo */}
                    <div className="company-logo">
                      <div className="logo-placeholder">
                        <span className="logo-initial">
                          {experience.company.split(' ')[0].charAt(0)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="company-info">
                      <div className="company-title-row">
                        <h3 className="company-name">{experience.company}</h3>
                        <span className="type-badge">{experience.type}</span>
                      </div>
                      <h4 className="position-title">{experience.position}</h4>
                      <p className="company-description">{experience.description}</p>
                    </div>
                  </div>
                  
                  {/* Meta Info */}
                  <div className="meta-info">
                    <div className="meta-item">
                      <Calendar size={18} className="meta-icon" />
                      <span className="meta-text">{experience.duration}</span>
                    </div>
                    <div className="meta-item">
                      <MapPin size={18} className="meta-icon" />
                      <span className="meta-text">{experience.location}</span>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="technologies-section">
                  <h5 className="section-title">Technologies Used</h5>
                  <div className="tech-tags">
                    {experience.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expand Button */}
                <button 
                  onClick={() => toggleExpand(experience.id)}
                  className="expand-button"
                >
                  <span>
                    {expandedCard === experience.id ? 'Hide Details' : 'View Achievements'}
                  </span>
                  {expandedCard === experience.id ? 
                    <ChevronUp size={20} /> : 
                    <ChevronDown size={20} />
                  }
                </button>

                {/* Achievements - Expandable */}
                <div className={`achievements-section ${expandedCard === experience.id ? 'expanded' : ''}`}>
                  <div className="achievements-content">
                    <h5 className="section-title">Key Achievements</h5>
                    <ul className="achievements-list">
                      {experience.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="achievement-item">
                          <div className="achievement-bullet"></div>
                          <p className="achievement-text">{achievement}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="hover-effect"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="cta-section">
          <button className="cta-button">
            <span>View Full Portfolio</span>
            <ArrowRight size={18} className="cta-icon" />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WorkExperience;