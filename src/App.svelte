<script>
  import { Router, Route, Link } from "svelte-routing";
  import ScatterPlot from "./lib/scatterPlot.svelte";
  import BarchartRace from "./lib/BarchartRace/BarchartRace.svelte";
  import Footer from "./lib/Footer.svelte";
  import Selector from "./lib/Selector.svelte";
  import Slider from "./lib/Slider.svelte";
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
    try {
      dataset = await csv(
      url,
      row
      ).then((data) => {
        return data;
      });
    } catch (error) {
      window.alert('No dataset found. Please try another option')
    }
  }
  $:{
    if(year>2021 && weekly) dataURL = 'https://raw.githubusercontent.com/R2rog/fantasyData/main/localData/'+year+'_'+'week'+week+'.csv'
    else if(year==2022){
      weekly = true;
      week = 1;
      dataURL = 'https://raw.githubusercontent.com/R2rog/fantasyData/main/localData/'+year+'_'+'week'+week+'.csv';
    }
    else if(year<=2021 && weekly) dataURL = 'https://raw.githubusercontent.com/fantasydatapros/data/master/weekly/'+year+'/'+'week'+week+'.csv';
    else if(year<=2021 && !weekly) dataURL = 'https://raw.githubusercontent.com/fantasydatapros/data/master/yearly/'+year+'.csv';
    fetchData(dataURL)
  };
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
  function hover(e){
    color: 'orangered'
  }
  function restore(e){
    color: 'white'
  }
</script>

<main>
  <!--Navbar></Navbar-->
  <Router url="{url}">
    <nav>
      <Link on:mouseover={hover} on:mouseout={restore} to="/" style="color:white">FantasyViz</Link>
      <Link on:mouseover={hover} on:mouseout={restore} to="race" style="color:white">the 2021 race</Link>
      <Link on:mouseover={hover} on:mouseout={restore} to="history" style="color:white">the history of fantasy football</Link>
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
  <Footer></Footer>
  <!--ScatterPlot {dataset} {ySelection} {xSelection} /-->
</main>

<style>
  nav{
    background-color: black;
    color: white !important;
    height: 3rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
  }
</style>
