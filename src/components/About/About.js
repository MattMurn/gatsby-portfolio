import React, {} from 'react';
import './About.scss'
const About = ({style}) => {
  return (
    <section id="about" className={`about-container ${style}`}>
      <div className='about-content'>
        <p>
        I'm a developer who enjoys the puzzle and challenge of building applications.
        Currently, I'm a Frontend Engineer at <a className="about-topstep" href="https://www.topstep.com/" tabIndex={1}>Topstep</a>, a fintech company that provides
        funding to retail traders. I'm also a part-time teaching assistant at <a className="about-northwestern" href="https://bootcamp.northwestern.edu/" tabIndex={1}>Northwestern University 
        Coding Bootcamp</a>,  on an instructional staff that emphasizes emerging technologies, while mentoring students 
        and leading lectures on industry best practices. Previously I developed, tested and deployed automated trading strategies in several 
        markets.
        </p>
      </div>
    </section>
  )
}

export default About;