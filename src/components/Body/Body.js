import React from 'react'
import './Body.css'
import About from './About/About'
import Education from './Education/Education'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Achievements from './Achievements/Achievements'
import Contact from './Contact/Contact'
function Body() {
    return (

        <div className="body">
            <section id="about">
                <About />
            </section>  
            <section id="education">
                <Education />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="achievements">
                <Achievements />
            </section>
            <section id="contact">
                <Contact />
            </section>
            
        </div>
    )
}

export default Body