<script>
  import ScatterPlot from "./lib/scatterPlot.svelte";
  import Selector from "./lib/Selector.svelte";
  import { csv} from "d3";
  import { onMount } from "svelte";

  let dataset=[];
  let xSelection = 'petal_width';
  let ySelection = 'petal_length';
  let options;
  $: options = dataset.columns;
  const row = function (data) {
    data.sepal_length  =  +data.sepal_length;
    data.sepal_width  =  +data.sepal_width;
    data.petal_length  =  +data.petal_length;
    data.petal_width  =  +data.petal_width;
    return data;
  };
  onMount(async () => {
    dataset = await csv(
      "https://gist.githubusercontent.com/curran/9e04ccfebeb84bcdc76c/raw/3d0667367fce04e8ca204117c290c42cece7fde0/iris.csv",
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
