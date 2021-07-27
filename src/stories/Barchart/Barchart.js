import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as d3 from "d3";

/**
 * Primary UI component for user interaction
 */
export const Barchart = ({ primary, primaryColor, textColor, size, label, stretched, ...props }) => {

    useEffect(() => {
        plotGraph();
    }, []);
    const plotGraph = () => {
        let width = 400;
        
        let height = 200;

        let margin = ({top: 20, right: 20, bottom: 50, left: 50});
        
        const data = [
            {
              "xData": "1485928818",
              "yData": 64
            },
            {
              "xData": "1490891494",
              "yData": 73
            },
            {
              "xData": "1491257567",
              "yData": 76
            },
            {
              "xData": "1492885399",
              "yData": 66
            },
            {
              "xData": "1496201302",
              "yData": 66
            },
            {
              "xData": "1498910888",
              "yData": 75
            },
            {
              "xData": "1500452980",
              "yData": 66
            },
            {
              "xData": "1505177336",
              "yData": 60
            },
            {
              "xData": "1510205967",
              "yData": 64
            },
            {
              "xData": "1516242500",
              "yData": 79
            },
            {
              "xData": "1527414818",
              "yData": 64
            },
            {
              "xData": "1529142139",
              "yData": 71
            },
            {
              "xData": "1532992704",
              "yData": 80
            },
            {
              "xData": "1534834205",
              "yData": 70
            },
            {
              "xData": "1534901219",
              "yData": 67
            },
            {
              "xData": "1535423769",
              "yData": 64
            },
            {
              "xData": "1541484809",
              "yData": 69
            },
            {
              "xData": "1542196417",
              "yData": 69
            },
            {
              "xData": "1542788394",
              "yData": 66
            },
            {
              "xData": "1555248262",
              "yData": 67
            },
            {
              "xData": "1555797949",
              "yData": 68
            },
            {
              "xData": "1556630802",
              "yData": 69
            },
            {
              "xData": "1559588164",
              "yData": 74
            },
            {
              "xData": "1561712303",
              "yData": 64
            },
            {
              "xData": "1566618988",
              "yData": 72
            },
            {
              "xData": "1570142781",
              "yData": 61
            },
            {
              "xData": "1570523426",
              "yData": 64
            },
            {
              "xData": "1572568293",
              "yData": 75
            },
            {
              "xData": "1574243193",
              "yData": 75
            },
            {
              "xData": "1575359299",
              "yData": 60
            },
            {
              "xData": "1587299786",
              "yData": 67
            },
            {
              "xData": "1587427799",
              "yData": 80
            },
            {
              "xData": "1590352494",
              "yData": 71
            },
            {
              "xData": "1591924586",
              "yData": 78
            },
            {
              "xData": "1594458204",
              "yData": 75
            },
            {
              "xData": "1599469957",
              "yData": 74
            },
            {
              "xData": "1600442460",
              "yData": 70
            },
            {
              "xData": "1600878968",
              "yData": 72
            },
            {
              "xData": "1602304508",
              "yData": 67
            },
            {
              "xData": "1604375212",
              "yData": 60
            },
            {
              "xData": "1606171656",
              "yData": 76
            },
            {
              "xData": "1606583292",
              "yData": 76
            },
            {
              "xData": "1610489171",
              "yData": 69
            },
            {
              "xData": "1622987899",
              "yData": 68
            },
            {
              "xData": "1623797976",
              "yData": 79
            },
            {
              "xData": "1624538264",
              "yData": 79
            },
            {
              "xData": "1624768400",
              "yData": 63
            },
            {
              "xData": "1625438115",
              "yData": 79
            },
            {
              "xData": "1625679141",
              "yData": 67
            },
            {
              "xData": "1625902547",
              "yData": 73
            }
          ]

        let xMin = d3.min(data, function(d){ return Math.min(d.xData); });
        let xMax = d3.max(data, function(d){ return Math.max(d.xData); });
        
        let yMin = d3.min(data, function(d){ return Math.min(d.yData); });
        let yMax = d3.max(data, function(d){ return Math.max(d.yData); });
        
        let x = d3.scaleTime()
                    .domain([xMin, xMax])
                    .range([margin.left, width - margin.right]);
        
        let y = d3.scaleLinear()
                    .domain([0, yMax])
                    .range([height - margin.bottom, margin.top]);
        
        let xAxis = g => g
                        .attr("transform", `translate(0,${height - margin.bottom})`)
                        .call(d3.axisBottom(x).ticks(width / 40).tickSizeOuter(0))
                        .call(g => g.select(".domain").remove())
                        .selectAll("text")
                        .attr("y", 10)
                        .attr("x", 5)
                        .attr("dy", ".35em")
                        .attr("transform", "rotate(45)")
                        .style("text-anchor", "start");
            
        let yAxis = g => g
                        .attr("transform", `translate(${margin.left},0)`)
                        .call(d3.axisLeft(y).tickSize(-width))
                        .call(g => g.select(".domain").remove())
                        .call(g => g.select(".tick:last-of-type text").clone()
                            .attr("x", 3)
                            .attr("text-anchor", "start")
                            )
                        .call(g => g.selectAll("line").attr('stroke', '#dddddd').attr("stroke-dasharray", "10,10"));

        let line = d3.line()
                        .defined(d => !isNaN(d.yData))
                        .x(d => x(d.xData))
                        .y(d => y(d.yData));

        const svg = d3.select('.barChartContainer').append("svg")
            .attr("viewBox", [0, 0, width, height]);

        svg.append("g")
            .call(xAxis);

        svg.append("g")
            .call(yAxis);

        svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "#E62F4D")
            .attr("stroke-width", 1.5)
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("d", line);

        

        // return svg.node();
    }
    return (
        <div className="barChartContainer"></div>
    );
};


Barchart.propTypes = {
  
};

Barchart.defaultProps = {
  
};
