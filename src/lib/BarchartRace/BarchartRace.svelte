<script>
    import { scaleLinear } from "d3";
    import { onMount, setContext } from "svelte";
    import { writable } from "svelte/store";
    import { tweened } from "svelte/motion";
  
    import Timer from "./Timer.svelte";
    import Bars from "./ChartBars.svelte";
    import Axis from "./ChartAxis.svelte";
    import Labels from "./ChartLabels.svelte";
    import Ticker from "./ChartTicker.svelte";
    //import {keyframes} from "../../season2021"
    import {keyframes} from "../../season2022"
    const duration = 3000; // ms between keyframes
    const barCount = 10; // how many bars to show
    const barMargin = 4; // space between bars
    const keyframeCount = keyframes.length; // number of keyframes
    const names = keyframes[0][1].map((d) => d.name); // all data names/labels
  
    const dimensions = writable({});
    const scales = writable({});
    const data = tweened(null, { duration });
    const xMax = tweened(null, { duration });
  
    let figureWidth = 0;
    let figureHeight = 0;
    let currentKeyframe = 0;
    let isEnabled = false;
  
    // update dimensions
    $: width = figureWidth;
    $: height = figureHeight;
    $: barHeight = height / barCount - barMargin;
  
    // update data
    $: isEnabled = currentKeyframe < keyframeCount;
    $: frameIndex = Math.min(currentKeyframe, keyframeCount - 1);
    $: frame = keyframes[frameIndex];
    $: keyframeDate = frame[0];
    $: keyframeData = frame[1];
    $: currentData = names.map((name) => ({
      ...keyframeData.find((d) => d.name == name),
    }));
  
    // update stores and context
    $: data.set(currentData);
    $: dimensions.set({
      width,
      height,
      barHeight,
      barMargin,
    });
    $: xMax.set(Math.max(...keyframeData.map((d) => d.value)));
    $: scales.set({
      x: scaleLinear().domain([0, $xMax]).range([0, $dimensions.width]),
      y: scaleLinear().domain([0, barCount]).range([0, $dimensions.height]),
    });
    $: chartContext = { dimensions, scales, data, names };
    $: setContext("Chart", chartContext);
  
    console.log('keyframes: ', keyframes)
  </script>
  
  {#if keyframes}
    <div class="ticker">
      <Ticker week="{keyframeDate}" />
    </div>
    <figure bind:offsetWidth="{figureWidth}" bind:offsetHeight="{figureHeight}">
      <div class="bars">
        <Bars barCount="{barCount}" />
      </div>
  
      <div class="axis">
        <Axis />
      </div>
  
      <div class="labels">
        <Labels barCount="{barCount}" />
      </div>
    </figure>
    <Timer
      bind:currentKeyframe
      keyframeCount="{keyframes.length}"
      duration="{duration}"
      isEnabled="{isEnabled}"
      on:end="{() => (isEnabled = false)}"
    />
  {/if}
  
  <style>
    figure {
      display: block;
      position: relative;
      width: 100%;
      height: 70vh;
      min-height: 420px;
      /*margin: 1rem;*/
      margin-left: 0px;
      user-select: none;
      color: black;
      font-size: 1.5rem;
      background-color: white;
      font-weight: bold;
      /*background-color: black;*/
    }
  
    figure > * {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  
    .axis {
      overflow: visible;
    }
  </style>
  