import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const ExpiationGraph = ({ expiationDaysOfWeek }) => {
    const svgComponent = useRef();

    useEffect(() => {
        const data = Object.entries(expiationDaysOfWeek).map(([day, count]) => ({
            day,
            count,
        }));

        const margin = { top: 20, right: 30, bottom: 40, left: 40 };
        const width = 500 - margin.left - margin.right;
        const height = 300 - margin.top - margin.bottom;

        const svg = d3.select(svgComponent.current)
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        const x = d3.scaleBand()
            .domain(data.map(d => d.day))
            .range([0, width])
            .padding(0.1);

        const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.count)])
            .nice()
            .range([height, 0]);

        svg.append("g")
            .selectAll(".tick")
            .data(data)
            .enter()
            .append("g")
            .attr("class", "x-axis")
            .attr("transform", d => `translate(${x(d.day)},0)`)
            .append("text")
            .attr("y", height + 10)
            .attr("x", 0)
            .attr("text-anchor", "middle")
            .text(d => d.day)
            .style("font-size", "12px");

        svg.append("g")
            .call(d3.axisLeft(y));

        svg.selectAll("bar")
            .data(data)
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("x", d => x(d.day))
            .attr("y", d => y(d.count))
            .attr("width", x.bandwidth())
            .attr("height", d => height - y(d.count))
            .attr("fill", "#444444")

        svg.append("text")
            .attr("transform", `translate(${width / 2},${height + margin.bottom})`)
            .style("text-anchor", "middle")
            .text("Day of the Week");

        svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 0 - margin.left)
            .attr("x", 0 - height / 2)
            .style("text-anchor", "middle")
            .text("Number of Expiations");
    }, [expiationDaysOfWeek]);

    return (
        <div>
            <h4>Expiation Counts by Day of Week</h4>
            <svg ref={svgComponent}></svg>
        </div>
    )
}

export default ExpiationGraph;