import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const ExpiationGraph = ({ expiationDaysOfWeek }) => {
    const svgRef = useRef();

    useEffect(() => {
        const data = Object.entries(expiationDaysOfWeek).map(([day, count]) => ({
            day,
            count,
        }));

        const margin = { top: 20, right: 30, bottom: 40, left: 40 };
        const width = 500 - margin.left - margin.right;
        const height = 300 - margin.top - margin.bottom;

        const svg = d3.select(svgRef.current)
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);
    })
}

export default ExpiationGraph;