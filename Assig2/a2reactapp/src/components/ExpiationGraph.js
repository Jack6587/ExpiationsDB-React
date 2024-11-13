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
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
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
            .attr("transform", d => `translate(0,${height})`)
            .call(d3.axisBottom(x));

        svg.append("g")
            .call(d3.axisLeft(y));

        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", d => x(d.day))
            .attr("width", x.bandwidth())
            .attr("y", height)
            .attr("height", 0)
            .attr("fill", d => `rgb(20, 20, ${Math.min(255, Math.max(0, 255 - d.count * 5))})`)
            .transition()
            .duration(1000)
            .ease(d3.easeBounceOut)
            .attr("y", d => y(d.count))
            .attr("height", d => height - y(d.count))

        svg.append("text")
            .attr("transform", `translate(${width / 2},${height + margin.bottom})`)
            .style("text-anchor", "middle")
            .text("Day of the Week")
            .style("font-size", "14px")
            .style("fill", "#333");

        svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 0 - margin.left + 10)
            .attr("x", 0 - height / 2)
            .style("text-anchor", "middle")
            .text("Number of Expiations")
            .style("font-size", "14px")
            .style("fill", "#333");
    }, [expiationDaysOfWeek]);

    return (
        <div>
            <h3 class="mb-3 mt-3">Expiation Counts by Day of Week</h3>
            <svg ref={svgComponent}></svg>
        </div>
    )
}

export default ExpiationGraph;