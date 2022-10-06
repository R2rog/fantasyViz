<script>
import {fly} from 'svelte/transition'
let max = 16;
export let weekRange = 0;
</script>
<div class="range-control" in:fly={{y:-20}} out:fly={{y:-20}} >
    <h3>Week: {weekRange}</h3>
    <input id="week-slider" bind:value={weekRange} type="range" min="1" max={max} step="1" data-thumbwidth="80" list="weeks">
    <!--output name="rangeVal">Week 1</output-->
    <datalist id="weeks">
        {#each {length: max} as _, i}
            <option value={i+1} id={'week_'+(i+1)} label={'Week'} >{i}</option>
            <label for={'week_'+(i+1)}>{i+1}</label>
        {/each}
    </datalist>
</div>
<style>
    #week-slider{
        width: 85%;
    }
    input[type=range]::-webkit-slider-runnable-track {
    width: 300px;
    height: 5px;
    background: #ddd;
    border: none;
    border-radius: 3px;
}

</style>