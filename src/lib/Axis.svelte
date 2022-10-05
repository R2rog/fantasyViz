<script>
import { select, selectAll } from  "d3-selection";
import { axisBottom, axisLeft } from  "d3-axis";
let options = { duration: 1000 }

    export let  innerHeight;
    export let  margin;
    export let  position;
    export let  scale;

    let  transform;
    let  g;
    let id;
    $: {

        select(g).selectAll("*").remove()
        let  axis;
        switch (position) {
            case  "bottom":
                axis  =  axisBottom(scale).tickSizeOuter(0);
                transform  =  `translate(5, ${innerHeight+18})`;
                id = "bottom-axis";
                break;

            case  "left":
                axis  =  axisLeft(scale).tickSizeOuter(0);
                transform  =  `translate(5, 0)`;
                id = "left-axis";
        }
    select(g).call(axis);
}
</script>

<g class="axis" id={id} bind:this={g} {transform} />

<style>
#bottom-axis{
    transition: 0.8s;
}
</style>