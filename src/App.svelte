<script>
  import ScatterPlot from "./lib/scatterPlot.svelte";
  import Selector from "./lib/Selector.svelte";
  import { csv } from "d3";
  import { onMount } from "svelte";

  let dataset = [];
  let xSelection = "FantasyPoints";
  let ySelection = "Tgt";
  let options;
  $: options = dataset.columns;
  const row = function (d) {
    d.Tgt = +d.Tgt;
    d.FantasyPoints = +d.FantasyPoints;
    d.Rec = +d.Rec;
    d.PassingYds = +d.PassingYds;
    d.PassingTD = +d.PassingTD;
    d.PassingAtt = +d.PassingAtt;
    d.RushingYds = +d.RushingYds;
    d.RushingTD = +d.RushingTD;
    d.RushingAtt = +d.RushingAtt;
    d.ReceivingYds + d.ReceivingYds;
    d.ReceivingTD = +d.ReceivingTD;
    return d;
  };
  onMount(async () => {
    dataset = await csv(
      "https://raw.githubusercontent.com/fantasydatapros/data/master/yearly/2021.csv",
      row
    ).then((data) => {
      return data;
    });
  });
</script>

<main>
  <Selector {options} bind:xAxis={xSelection} bind:yAxis={ySelection} />
  <ScatterPlot {dataset} {ySelection} {xSelection} />
</main>

<style>
</style>
