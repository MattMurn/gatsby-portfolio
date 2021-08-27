import React, {} from 'react';
import './About.scss'
const About = ({style}) => {
  return (
    <section id="about" className={`about-container ${style}`}>
      <div className='about-content'>
        <p>
        Currently, I'm a product engineer at <a className="about-m1" href="https://www.m1finance.com/" tabIndex={1}>M1 Finance</a> where I work on a GraphQL API layer and the web client it serves.
         I'm also a part-time teaching assistant at <a className="about-northwestern" href="https://bootcamp.northwestern.edu/" tabIndex={1}>Northwestern University 
        Coding Bootcamp</a>,  on an instructional staff that emphasizes emerging technologies, while mentoring students 
        and leading lectures on industry best practices. Previously I developed, tested and deployed automated trading strategies across several 
        markets.
        </p>
      </div>
    </section>
  )
}

export default About;