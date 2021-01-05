import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { select } from "d3";
import skills from '../../../skills';
import './Tech.scss';

const TechSim = () => {
const [skillsActive, setSkillsActive] = useState('skills');
const ref = useRef(null);
const svgWidth = window.innerWidth - 300;
const svgHeight = window.innerHeight < 1000 ? 800 : window.innerHeight - 200;
const margin = 40;

const width = svgWidth - (margin * 2);
const height = svgHeight - (margin * 2);


const randomPosition = () => {
  return Math.random() * 40;
}

const buildSkillNodes = () => {
  return skills.map(skill => {
    return {
      x: randomPosition(),
      y: randomPosition(),
      name: skill.name,
      level: skill.value / 10,
    }
  })
}

const nodeData = buildSkillNodes();
const collisionForce = d3.forceCollide().radius(d => d.level).strength(.15);

const simulation = d3.forceSimulation(nodeData).force('x', d3.forceX(100)).force('y', d3.forceY(150)).force("collisionForce",collisionForce).force('center', d3.forceCenter(width / 2, height / 2))

// add call back on tick;
useEffect(() => {
  const g = select(ref.current);

  const ticked = () =>{
    node.attr("cx", d =>  d.x)
        .attr("cy", d =>  d.y)

    text.attr("x", function(d) {
      return d.x;
    })
    .attr("y", function(d) {
      return d.y +5;
    })
  }

  const node = g.selectAll("circle")
  .data(nodeData)
  .enter()
  .append("circle")
  .attr("r",d =>  d.level)
  .attr("cx",d =>  d.x)
  .attr("cy",d =>  d.y)
  .attr("fill","white")

  let text = g.selectAll("text")
  .data(nodeData)
  .enter()
  .append("text")
  .text(d => d.name)
  .style("text-anchor","middle");

  simulation.on("tick",ticked);
}, [nodeData, height, width, skillsActive]);

return (
  <section id="tech" className="tech-container">
    <div className="tech-title-container">
      <button onClick={() => setSkillsActive('skills')} aria-label="skills button">
        <h2 className={skillsActive === 'skills' ? 'title-active': null}>Skills</h2>
      </button>
      <button onClick={() => setSkillsActive('projects')} aria-label="projects button">
        <h2 className={skillsActive === 'projects' ? 'title-active': null}>Projects</h2>
      </button>
    </div>
    <svg width={svgWidth} height={svgHeight}>
      <g ref={ref} transform={`translate(${margin},${margin})`} />
    </svg>
  </section >
);
};

export default TechSim;