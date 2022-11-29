<script>
  import { Router, Route, Link } from "svelte-routing";
  import ScatterPlot from "./lib/scatterPlot.svelte";
  import BarchartRace from "./lib/BarchartRace/BarchartRace.svelte";
  import Selector from "./lib/Selector.svelte";
  import Card from "./lib/Card.svelte";
  import Slider from "./lib/Slider.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import Weeks from "./lib/Weeks.svelte";
  import { csv } from "d3";
  import { onMount } from "svelte";

  export let url = "";

  let dataset = [];
  let xSelection = "FantasyPoints";
  let ySelection = "Tgt";
  let weekly = false;
  let week = 1;
  let year = 2021;
  let options;
  //let dataURL = 'https://raw.githubusercontent.com/fantasydatapros/data/master/yearly/2021.csv';
  let dataURL = 'https://raw.githubusercontent.com/R2rog/fantasyData/main/localData/2022_week11.csv';
  //week url: let url = 'https://raw.githubusercontent.com/fantasydatapros/data/master/yearly/2021.csv';
  async function fetchData(url){
    dataset = await csv(
      url,
      row
    ).then((data) => {
      return data;
    });
  }
  //Include ternary if to get the year and fetch the data from the fantasyData repo.
  $:{
    /*weekly ? dataURL = 'https://raw.githubusercontent.com/fantasydatapros/data/master/weekly/'+year+'/'+'week'+week+'.csv':
            dataURL = 'https://raw.githubusercontent.com/fantasydatapros/data/master/yearly/'+year+'.csv';
    fetchData(dataURL);*/
    if(year>2021 && weekly) dataURL = 'https://raw.githubusercontent.com/R2rog/fantasyData/main/localData/'+year+'_'+'week'+week+'.csv'
    else if(year<=2021 && weekly) dataURL = 'https://raw.githubusercontent.com/fantasydatapros/data/master/weekly/'+year+'/'+'week'+week+'.csv';
    else if(year<=2021 && !weekly) dataURL = 'https://raw.githubusercontent.com/fantasydatapros/data/master/yearly/'+year+'.csv';
    fetchData(dataURL)
    console.log('Data URL changed: ',dataURL);
  };
  /*$: console.log('Selected week: ', week);
  $: console.log('Weekly range?', weekly);
  $: console.log('Selected year: ', year);*/
  $: options = dataset.columns; 
  $: console.log('Dataset: ', dataset);
  const row = function (d) {
    d.Tgt = +d.Tgt;
    //d.FantasyPoints = +d.FantasyPoints;
    d.FantasyPoints = +d.FantasyPoints;
    d.PPRFantasyPoints =  +d.PPRFantasyPoints;
    d.StandardFantasyPoints = +d.StandardFantasyPoints;
    d.HalfPPRFantasyPoints = +d.HalfPPRFantasyPoints;
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
  $:
  onMount(async () => {
    dataset = await csv(
      dataURL,
      row
    ).then((data) => {
      return data;
    });
  });
</script>

<main>
  <!--Navbar></Navbar-->
  <Router url="{url}">
    <nav>
      <Link to="/" style="color:orangered">Home</Link>
      <Link to="race" style="color:orangered">2021 Season</Link>
      <Link to="history" style="color:orangered">History</Link>
    </nav>
    <Route path="/">
      <Selector {options} bind:selectedYear={year} bind:span={weekly} bind:xAxis={xSelection} bind:yAxis={ySelection} />
      {#if weekly == true}
        <Weeks bind:weekRange={week}/>
      {/if}
      <ScatterPlot {dataset} {ySelection} {xSelection} />
    </Route>
    <Route path="race" component="{BarchartRace}" />
    <Route path="history" component="{Slider}" />
  </Router>
  <!--ScatterPlot {dataset} {ySelection} {xSelection} /-->
</main>

<style>
  nav{
    background-color: black;
    height: 3rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
  }
</style>
