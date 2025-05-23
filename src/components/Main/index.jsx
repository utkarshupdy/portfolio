import React from 'react';

/* Componet */
import About from './About';
import Service from './Service';
import Project from './Project';
import Contact from './Contact';
import WorkExperiencePage from './We';
// import WorkExperience from './Exp';

const Main = () => (
    <main>
        <About />        

        <Service />

        <WorkExperiencePage />
        
        <Project />

        <Contact />
    </main>
);

export default Main;