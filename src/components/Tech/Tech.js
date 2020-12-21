import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { select, scaleLinear, extent } from "d3";
import checker from '../../../skills';
import './Tech.scss';

const Tech = () => {
const [skillsActive, setSkillsActive] = useState('skills');
const randomPosition = () => {
  return Math.random() * 40;
}
function RandomData() {
  const dirty = checker.map(skill => {
    return {
      x: randomPosition(),
      y: randomPosition(),
      level: skill.value / 20,
    }
  })

  return dirty;
}

const data = RandomData();

const ref = useRef(null);

const w = 600,
  h = 600,
  margin = {
    top: 40,
    bottom: 40,
    left: 40,
    right: 40
  };

const width = w - margin.right - margin.left,
  height = h - margin.top - margin.bottom;

useEffect(() => {
  const g = select(ref.current);
  
  g.selectAll(".circles")
  .data(data)
  .exit()

  const xScale = scaleLinear()
  .domain(extent(data, d => d.x))
  .range([0, width]);

const yScale = scaleLinear()
  .domain(extent(data, d => d.y))
  .range([height, 0]);

  g.selectAll(".circles")
  .data(data)
  .enter()
  .append("circle")
  .attr("r", d => d.level)
  .attr("cx", d => xScale(d.x))
  .attr("cy", d => yScale(d.y))
  .append("text").text(d => d.level)
  .attr("x", d => d.x)
  .attr("y", d => d.y);

}, [data, height, width]);

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
    <svg width={w} height={h}>
      <g ref={ref} transform={`translate(${margin.left},${margin.top})`} />
    </svg>
  </section >
);
};

export default Tech;