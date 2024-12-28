import React, { useState, useEffect } from 'react';
import {
    Route,
    Routes,
} from "react-router-dom";
import './App.css';

/* Pages */
import Home from "./pages/Home/HomePage";
import About from "./pages/About/AboutPage";
import Services from "./pages/Service/ServicesPage";
import Project from "./pages/Project/ProjectPage";
import ProjectApp from "./pages/Project/ProjectApp";
import ProjectGame from "./pages/Project/ProjectGame";

import RouterScrollTop from "./components/ScrollToTop/RouterScrollTop";

function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 4000);
    }, []);

    return (
        <>
            <RouterScrollTop />
            {loading ? (
                <div className='loading-pag'>
                    <div className="loader">
                        <span>{"<"}(UTKARSH){"/>"}</span>
                        <span>{"<"}(UTKARSH){"/>"}</span>
                    </div>
                </div>
            ) : (
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/service" element={<Services />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/project/app" element={<ProjectApp />} />
                    <Route path="/project/game" element={<ProjectGame />} />
                </Routes>
            )}
        </>
    );
}

export default App;
