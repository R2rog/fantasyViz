<script>
  import Axis from "./Axis.svelte";
  import { onMount } from "svelte";
  import { select, extent, scaleOrdinal, scaleLinear, scalePoint } from "d3";
  export let dataset;
  export let xSelection;
  export let ySelection;
  let yScale;
  let xScale;

  let tooltip;
  const width = 1000;
  //const width = window.innerWidth;
  const height = 600;
  //const height = window.innerHeight;
  const classSet = new Set(dataset.map((d) => d.class));
  const margin = { top: 15, bottom: 50, left: 50, right: 20 };
  const innerHeight = height - margin.top - margin.bottom,
    innerWidth = width - margin.left - margin.right;

  onMount(() => {
    tooltip = select("#my_dataviz")
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 0)
      .style("background-color", "white")
      .style("color", "black")
      .style("border", "solid")
      .style("border-color","orange")
      .style("border-width", "5px")
      .style("border-radius", "5px")
      .style("padding", "10px");
  });

  let showTooltip = function (data, e) {
    let html =
      "Class" +
      data.class +
      "petal width: " +
      data.petal_width +
      "petal length: " +
      data.petal_length;
    tooltip
      .html(html)
      .style("left", e.pageX + 15 + "px")
      .style("top", e.pageY - 28 + "px")
      .transition()
      .duration(200) // ms
      .style("opacity", 0.9);
  };
  function hideTooltip() {
    tooltip
      .transition()
      .duration(300) // ms
      .style("opacity", 0);
  }
  $: yScale =
    ySelection == "class"
      ? (yScale = scalePoint().domain(
          dataset.map((d) => d[ySelection])
        ).padding(0.2).range([height - margin.bottom, margin.top]))
      : (yScale = scaleLinear()
          .domain(extent(dataset, (d) => d[ySelection]))
        ).range([height - margin.bottom, margin.top]);
  $: xScale =
    xSelection == "class"
      ? (xScale = scalePoint().domain(
          dataset.map((d) => d[xSelection])
        ).padding(0.2).range([0, width]))
      : (xScale = scaleLinear()
          .domain(extent(dataset, (d) => d[xSelection]))
          .range([0, width]));

  $: colorScale = scaleOrdinal()
    .domain(classSet)
    .range(["#33FF74 ", "#33FFDD", "#FF5733"]);//#FF3333 Uncomment this for the last class
</script>

<div id="my_dataviz">
  <svg {width} {height}>
    <g transform={`translate(${margin.left},${margin.right})`}>
      <Axis {innerHeight} {margin} scale={xScale} position="bottom" />
      <Axis {innerHeight} {margin} scale={yScale} position="left" />
      {#each dataset as data, i}
        <circle
          cx={xScale(data[xSelection])}
          cy={yScale(data[ySelection])}
          r="5"
          style={`fill:${colorScale(data.class)}`}
          on:mouseover={(e) => showTooltip(data, e)}
          on:focus={(e) => showTooltip(data, e)}
          on:mouseout={hideTooltip}
          on:blur={hideTooltip}
        />
      {/each}
      <text transform={`translate(${-25},${innerHeight / 2}) rotate(-90)`}
        >{ySelection}</text
      >
      <text x={innerWidth / 2} y={innerHeight + 30}>{xSelection}</text>
    </g>
  </svg>
</div>

<style>
  text {
    fill: white;
    padding: 1rem;
  }
  .tooltip {
    position: absolute;
    font-size: 12px;
    width: auto;
    height: auto;
    pointer-events: none;
    height: 100px;
    width: 100px;
    background-color: white;
  }
</style>
