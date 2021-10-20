import React, { useEffect } from "react";
import * as d3 from "d3";
import PropTypes from "prop-types";

/**
 * Primary UI component for user interaction
 */
export const PieChart = ({ ...props }) => {
  console.log("piechartprops:", props);
  useEffect(() => {
    plotGraph();
  }, []);
  const plotGraph = () => {
    var color = ["#E62F4D", "#EB5971", "#F08395", "#F5AEB9", "#FAD8DD"];

    var data = [
      { label: "Category A", value: 20 },
      { label: "Category B", value: 50 },
      { label: "Category C", value: 30 },
      { label: "Category A", value: 20 },
      { label: "Category B", value: 50 },
    ];

    var width = 400,
      height = 280;

    var outerRadius = height / 2 - 20,
      innerRadius = outerRadius / 3,
      cornerRadius = 10;

    var pie = d3.pie().padAngle(0.02);

    var arc = d3.arc().padRadius(outerRadius).innerRadius(innerRadius);

    data.forEach(function (d) {
      d.total = +d.value;
    });

    var pie = d3
      .pie()
      .sort(null)
      .value(function (d) {
        return d.total;
      });

    var svg = d3
      .select(".piechartContainer")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    var segments = svg.append("g").attr("class", "segments");

    var slices = segments
      .selectAll(".arc")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "arc")
      .attr("stroke", "white")
      .style("stroke-width", "2px");

    slices
      .append("path")
      .each(function (d) {
        d.outerRadius = outerRadius - 20;
      })
      .attr("d", arc)
      .attr("fill", function (d, i) {
        return color[i];
      })
      .attr("stroke", "white")
      .style("stroke-width", "2px")
      .on("mouseover", arcTween(outerRadius, 0, true))
      .on("mouseout", arcTween(outerRadius - 20, 150, false));

    slices.transition(3000).attrTween("d", function (d) {
      var i = d3.interpolate(d.startAngle + 0.1, d.endAngle);
      return function (t) {
        d.endAngle = i(t);
        return arc(d);
      };
    });

    slices
      .append("text")
      .attr("transform", function (d) {
        var c = arc.centroid(d);
        console.log(c);
        return "translate(" + c[0] + "," + c[1] + ")";
      })
      .text(function (d) {
        return d.value + "%";
      })
      .style("fill", "#463339")
      .style("stroke", "#463339")
      .style("text-anchor", "middle")
      .style("text-decoration", "bold")
      .style("font-size", 12);

    function arcTween(outerRadius, delay, showTooltip) {
      return function (data) {
        d3.select(this)
          .transition()
          .delay(delay)
          .attrTween("d", function (d) {
            var i = d3.interpolate(d.outerRadius, outerRadius);
            return function (t) {
              d.outerRadius = i(t);
              return arc(d);
            };
          });
        if (showTooltip) {
          d3.select(".Tooltip")
            .transition(100)
            .delay(50)
            .style("left", data.pageX + "px")
            .style("top", data.pageY + "px")
            .style("opacity", 1)
            .text("Awesome Tooltip");
        } else {
          console.log("hiding tooltip");
          d3.select(".Tooltip").style("opacity", 0);
        }
      };
    }
  };
  return (
    <div className="piechartContainer" style={{ position: "relative" }}>
      <div className="Tooltip" style={{ position: "absolute" }}></div>
    </div>
  );
};

PieChart.propTypes = {
  /**
   * In case if you need tooltip
   */
  tooltip: PropTypes.any,
  /**
   * Pic chart label
   */
  label: PropTypes.bool,
  /**
   * Optional mouse hover handler
   */
  onMouseHover: PropTypes.func,
  /**
   * Optional mouse leave handler
   */
  onMouseLeave: PropTypes.func,
  /**
   * Animation if you want
   */
  animation: PropTypes.bool,
  /**
   * Animation if you want
   */
  colors: PropTypes.array,
};
