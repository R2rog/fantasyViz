<script>
    export let xAxis;
    export let yAxis;
    export let options= [1,2,3,4];
    let previousXAxis = '';
    let previousYAxis = '';
    function axisChange(e){
        if(e.target.id=='x-axis'){
            document.getElementById('y-'+xAxis).setAttribute('disabled','true');
            if(previousXAxis!='') document.getElementById('y-'+previousXAxis).removeAttribute('disabled');
            previousXAxis = xAxis;
        }
        else{
            document.getElementById('x-'+yAxis).setAttribute("disabled",'true');
            if(previousYAxis!='') document.getElementById('x-'+previousYAxis).removeAttribute('disabled');
            previousYAxis = yAxis;
        }
    }
</script>

<div id="axis-selector">
    <label for="x-axis">x axis</label>
    <select bind:value={xAxis} on:change={axisChange} id="x-axis">
        {#each options as option}
            <option value={option} id={'x-'+option} >{option}</option>
        {/each}
    </select>
    <label for="y-axis">y axis</label>
    <select bind:value={yAxis} on:change={axisChange} id="y-axis">
        {#each options as option}
            <option value={option} id={'y-'+option}>{option}</option>
        {/each}
    </select>
</div>

<style>
    #axis-selector {
        display: flex;
        justify-content: space-around;
        margin: 2rem;
    }
</style>
