<script>
    import { getContext } from "svelte";
    import Bar from "./ChartBar.svelte";
    import colors from "../../assets/data/json/colors2021.json";
  
    const { data } = getContext("Chart");
    const colorCount = colors.length;
  
    export let barCount;
  </script>
  
  {#each $data as { value, rank }, i (i)}
    {#if rank < barCount}
      <Bar value="{value}" rank="{rank}" fill="{colors[i % colorCount]}" />
    {/if}
  {/each}
  