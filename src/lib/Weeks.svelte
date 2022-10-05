<script>
let max = 16;
let week=1;
$: console.log('Week: ',week);
</script>

<div class="range-control">
    <h3>Week: {week}</h3>
    <input id="week-slider" bind:value={week} type="range" min="1" max={max} step="1" data-thumbwidth="80" list="weeks">
    <!--output name="rangeVal">Week 1</output-->
    <datalist id="weeks">
        {#each {length: max} as _, i}
            <option value={i+1} id={'week_'+(i+1)} label={'Week'} >{i}</option>
            <label for={'week_'+(i+1)}>{i+1}</label>
        {/each}
    </datalist>
</div>
<!--div id="debt-amount-slider">
   
    <input type="radio" name="debt-amount" id="1" value="1" required>
    <label for="1" data-debt-amount="< $10k"></label>
    
    <input type="radio" name="debt-amount" id="2" value="2" required>
    <label for="2" data-debt-amount="$10k-25k"></label>
    <input type="radio" name="debt-amount" id="3" value="3" required>
    <label for="3" data-debt-amount="$25k-50k"></label>
    <input type="radio" name="debt-amount" id="4" value="4" required>
    <label for="4" data-debt-amount="$50k-100k"></label>
    <input type="radio" name="debt-amount" id="5" value="5" required>
    <label for="5" data-debt-amount="$100k+"></label>
    <div id="debt-amount-pos"></div>
</div-->

<style>
    #week-slider{
        width: 85%;
    }
</style>