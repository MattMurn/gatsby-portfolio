import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { select } from "d3";
import skills from '../../../skills';
import './Tech.scss';

const TechSim = () => {
const [skillsActive, setSkillsActive] = useState('skills');
const [nodeData, setNodeData] = useState([])
const [radiusDivider, setRadiusDivider] = useState(10);
const [fontSize, setFontSize] = useState(14);
const ref = useRef(null);
const svgWidth = window.innerWidth - 300;
const svgHeight = window.innerHeight < 1000 ? 800 : window.innerHeight - 200;
const margin = 40;

const width = svgWidth - (margin * 2);
const height = svgHeight - (margin * 2);

const screenWidth = window.innerWidth;

const dimensionsByDeviceSize = () => {
  switch(true) {
    case screenWidth > 1060:
      console.log('mid width');
      break;
    case screenWidth > 992:
      console.log('small width');
      break;
    case screenWidth < 789:
      console.log('xs width');
      setRadiusDivider(20);
      setFontSize(10);
      setNodeData(buildSkillNodes())
      break;
    default:
      console.log('desktop');
      break;
  }
}

const randomPosition = () => {
  return Math.random() * 40;
}

const buildSkillNodes = () => {
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
dimensionsByDeviceSize();
const nodeData = buildSkillNodes();
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
}, [height, width, skillsActive, fontSize, radiusDivider]);

return (
  <section id="tech" className="tech-container">
    <div className="tech-title-container">
    </div>
    <svg className="tech_svg">
      <g ref={ref} transform={`translate(${140},${margin})`} />
    </svg>
  </section >
);
};

export default TechSim;