<script>
    export let xAxis;
    export let yAxis;
    export let options= [1,2,3,4];
    export let span;
    export let selectedYear;
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
    };
</script>

<div id="axis-selector">
    <label for="season">Season</label>
    <select tabindex="0" id="season" bind:value={selectedYear}>
        {#each {length: 53} as _, i}
        <option value={1970+i} id={(1970+i)+'_season_'} >{1970+i}</option>
        {/each}
    </select>
    <div class="button b2" id="button-16">
        <input tabindex="0" bind:checked={span} type="checkbox" id="span" class="checkbox" />
        <div class="knobs"></div>
        <div class="layer"></div>
    </div>
    <label for="x-axis">x axis</label>
    <select tabindex="0" bind:value={xAxis} on:change={axisChange} id="x-axis">
        {#each options as option}
            <option value={option} id={'x-'+option} >{option}</option>
        {/each}
    </select>
    <label for="y-axis">y axis</label>
    <select tabindex="0" bind:value={yAxis} on:change={axisChange} id="y-axis">
        {#each options as option}
            <option value={option} id={'y-'+option}>{option}</option>
        {/each}
    </select>
</div>

<style>
  #axis-selector {
    display: flex;
    justify-content: space-around;
    align-content: center;
    align-items: center;
    margin-top: 2rem;
    height: 35px;
    background-color: black;
    color: white;
    font-weight: bold;
  }
  *:focus {
    outline: solid;
  }

  #app-cover {
    display: table;
    width: 600px;
    margin: 80px auto;
    counter-reset: button-counter;
  }
  

  .knobs,
  .layer {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .button {
    position: relative;
    width: 85px;
    height: 36px;
    overflow: hidden;
  }

  .button.b2 {
    border-radius: 2px;
  }

  .checkbox {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    cursor: pointer;
    z-index: 3;
  }

  .knobs {
    z-index: 2;
  }

  .layer {
    width: 100%;
    background-color: #ebf7fc;
    transition: 0.3s ease all;
    z-index: 1;
  }
      /* Button 16 */
  #button-16 .knobs:before {
    content: "All";
    position: absolute;
    top: 4px;
    left: 4px;
    width: 30px;
    height: 10px;
    color: black;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    /*background-color: #03a9f4;*/
    background-color: aqua;
    border-radius: 2px;
    transition: 0.3s ease all, left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15);
  }

  #button-16 .checkbox:active + .knobs:before {
    width: 46px;
  }

  #button-16 .checkbox:checked:active + .knobs:before {
    margin-left: -26px;
  }

  #button-16 .checkbox:checked + .knobs:before {
    content: "Week";
    left: 42px;
    background-color: #f44336;
  }

  #button-16 .checkbox:checked ~ .layer {
    background-color: #fcebeb;
  }
  @media only screen and (max-width: 480px) {
      select{
        font-size: 0.5rem;
        width:60px;
      }
      #axis-selector{
        font-size: 0.5rem;
      }
      #button-16{
        width:65px;
        height:30px;
      }
      #button-16 .knobs{
        font-size: 0.5rem;
      }
      #button-16 .checkbox:checked + .knobs:before {
        content: "W";
      }
    }
  /*label{
    color: black;
    font-weight: bold;
  }*/
</style>
