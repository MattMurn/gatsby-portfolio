import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { select } from "d3";
import skills from '../../../skills';
import './Tech.scss';

const TechSim = () => {
const ref = useRef(null);
const svgWidth = window.innerWidth - 300;
const svgHeight = window.innerHeight < 1000 ? 800 : window.innerHeight - 200;
const margin = 40;

const width = svgWidth - (margin * 2);
const height = svgHeight - (margin * 2);


const randomPosition = () => {
  return Math.random() * 40;
}

const buildSkillNodes = (radiusDivider) => {
  return skills.map(skill => {
    return {
      x: randomPosition(),
      y: randomPosition(),
      name: skill.name,
      level: skill.value / radiusDivider,
    }
  })
}

useEffect(() => {
  let radiusDivider = 10;
  let fontSize = 14;
  if(window.innerWidth < 489){
    radiusDivider = 20;
    fontSize = 10;
  } else if(window.innerWidth < 789){
    radiusDivider = 15;
    fontSize = 12
  }
// dimensionsByDeviceSize();
const nodeData = buildSkillNodes(radiusDivider);
const collisionForce = d3.forceCollide().radius(d => d.level).strength(.15);
const simulation = d3.forceSimulation(nodeData).force('x', d3.forceX(100)).force('y', d3.forceY(150)).force("collisionForce",collisionForce).force('center', d3.forceCenter(width / 2, height / 2))
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
  .attr("r",d =>  {
    return d.level})
  .attr("cx",d =>  d.x)
  .attr("cy",d =>  d.y)
  .attr("fill","white")

  let text = g.selectAll("text")
  .data(nodeData)
  .enter()
  .append("text")
  .text(d => d.name)
  .style("text-anchor","middle")
  .style("font-weight", 'bold')
  .style("font-size", `${fontSize}`);

  simulation.on("tick",ticked);
}, [height, width]);

return (
  <section id="tech" className="tech-container">
    <div className="tech-title-container">
      Technologies & Tools
    </div>
    <svg className="tech_svg">
      <g ref={ref} transform={`translate(${180},${margin})`} />
    </svg>
  </section >
);
};

export default TechSim;