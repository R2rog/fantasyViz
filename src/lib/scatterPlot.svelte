<script>
  import Axis from "./Axis.svelte";
  import { onMount } from "svelte";
  import { select, extent, scaleOrdinal, scaleLinear, scalePoint } from "d3";
  export let dataset;
  export let xSelection;
  export let ySelection;
  let yScale;
  let xScale;
  let optionsValue = {
    quantitative: [
      "Tgt",
      "FanatasyPoints",
      "Rec",
      "PassingYds",
      "PassingTD",
      "PassingAtt",
      "RushingYds",
      "RushingTD",
      "RushingAtt",
      "ReceivingYds",
      "ReceivingTD",
    ],
    categorical: ["Player", "Tm", "Pos"],
  };
  let tooltip;
  const width = 1000;
  //const width = window.innerWidth;
  const height = 600;
  //const height = window.innerHeight;
  const classSet = new Set(dataset.map((d) => d.Pos));
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
      .style("border-color", "orange")
      .style("border-width", "5px")
      .style("border-radius", "5px")
      .style("padding", "10px");
  });

  let showTooltip = function (data, e) {
    console.log('Event target', e.target);
    let html =
      "Player: " +
      data.Player +
      " Position: " +
      data.Pos +
      " Team: " +
      data.Tm +
      (" " + xSelection + ": ") +
      data[xSelection] +
      (" " + ySelection + ": ") +
      data[ySelection];
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

  $: yScale = optionsValue.categorical.includes(ySelection)
    ? (yScale = scalePoint()
        .domain(dataset.map((d) => d[ySelection]))
        .padding(0.5)
        .range([height - margin.bottom, margin.top]))
    : (yScale = scaleLinear().domain(
        extent(dataset, (d) => d[ySelection])
      )).range([height - margin.bottom, margin.top]);
  $: xScale = optionsValue.categorical.includes(xSelection)
    ? (xScale = scalePoint()
        .domain(dataset.map((d) => d[xSelection]))
        .padding(0.5)
        .range([0, width]))
    : (xScale = scaleLinear()
        .domain(extent(dataset, (d) => d[xSelection]))
        .range([0, width]));

  $: colorScale = scaleOrdinal()
    .domain(classSet)
    .range(["#33FF74 ", "#FF4646", "#FFF446", "#7846FF"]);
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
          r="3"
          style={`fill:${colorScale(data.Pos)}`}
          on:mouseover={(e) => showTooltip(data, e)}
          on:focus={(e) => showTooltip(data, e)}
          on:mouseout={hideTooltip}
          on:blur={hideTooltip}
        />
      {/each}
      <text transform={`translate(${-35},${innerHeight / 2}) rotate(-90)`}
        >{ySelection}</text
      >
      <text x={innerWidth / 2} y={innerHeight + 40}>{xSelection}</text>
    </g>
  </svg>
</div>

<style>
  svg *{
    transition: 0.8s;
  }
  g*{
    color: aqua;
    transition: 0.2s;
  }
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
