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
      "FantasyPoints",
      "Rec",
      "PassingYds",
      "PassingTD",
      "PassingAtt",
      "RushingYds",
      "RushingTD",
      "RushingAtt",
      "ReceivingYds",
      "ReceivingTD",
      "PPRFantasyPoints",
      "Standard",
      "PPR"
    ],
    categorical: ["Player", "Tm", "Pos"],
  };
  let tooltip;
  let width = 1375;
  //const width = window.innerWidth;
  let height = 650;
  //const height = window.innerHeight;
  const classSet = new Set(dataset.map((d) => d.Pos));
  const margin = { top: 25, bottom: 50, left: 50, right: 0 };
  const innerHeight = height - margin.top - margin.bottom,
    innerWidth = width - margin.left - margin.right;

  onMount(() => {
    tooltip = select("#my_dataviz")
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 0)
      .style("background-color", "black")
      .style("color", "white")
      .style("border", "solid")
      .style("border-color", "orangered")
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
      .style("opacity", 1);
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
    .range(["#35e859", "#FF4646", "#05e5fa", "#7846FF"]);
</script>

<div id="my_dataviz" bind:clientWidth={width}>
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
      <text x={innerWidth / 2} id="xaxis-tag" y={innerHeight + 55}>{xSelection}</text>
    </g>
  </svg>
</div>

<style>
  svg *{
    transition: 0.8s;
  }
  svg{
    background-color: white;
    margin-top: 1rem;
  }
  g*{
    color: black;
    transition: 0.2s;
  }
  text {
    fill: black;
    padding: 1rem;
    font-weight: bold;
  }
  #xaxis-tag{
    margin-top: 1rem;
  }
</style>
