<script>
  import { Swiper, SwiperSlide } from "swiper/svelte";

  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/effect-cards";
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  // import required modules
  import { EffectCards, Pagination } from "swiper";
</script>

<Swiper
  pagination={{clickable:true}}
  loop = {true}
  effect ={ "cards"}
  grabCursor = {false}
  direction = {'vertical'}
  modules ={[EffectCards, Pagination]}
  class = "mySwiper"
>
  <SwiperSlide>
    <div class="slider-content">
      <div class="card-img">
      <img src="/img/Bill Winkenbach.jpeg" alt="Bill Winkenbach">
      </div>
      <div class="card-content">
        <h2>March 1962</h2>
        <p>Bill Winkenbach, a part owner from the then AFL football team the Oakland Raiders, alongside with Bill Turner and Scotty Striling create the first fantasy football league which would go by the name of the Greater Oakland Professional Pigskin Prognosticators League (GOPPPL for short). The idea came from a game Winkelbach created around the PGA golf tour  where every week the players would draft pro golfers and then add up their scores after the weekly tournament was over.</p>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div class="slider-content">
      <div class="card-img">
      <img src="/img/The founders.jpeg" alt="The founders of the GOPPPL">
      </div>
      <div class="card-content">
        <h2>August 1963</h2>
        <p>The GOPPPL holds its inaugural draft. Hall of Famer George Blanda was the first ever selection. 
          This first league included many concepts that persist even in modern fantasy football such as a snake draft (with 20 rounds), weekly head to head matchups and the ability to have substitutes. The scoring system was a bit different though. The original system rewarded 25 points for a touchdown pass, rush, or reception, 25 for a field goal, 10 for an extra point, and 200 for a kickoff, punt, or interception that was returned for a touchdown.
          </p>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div class="slider-content">
      <div class="card-img">
      <img src="/img/AFL NFL.jpeg" alt="AFL and NFL merger">
      </div>
      <div class="card-content">
        <h2>June 1966</h2>
        <p>A merger between the two major American Football leagues gives birth to the NFL as we know it</p>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div class="slider-content">
      <div class="card-img">
      <img src="/img/Superbowl1.jpeg" alt="Superbowl 1 between San Francisco and Green Bay">
      </div>
      <div class="card-content">
        <h2>January 1967</h2>
        <p>Super Bowl I takes place between the Greenbay Packers and the San Francisco 49ers</p>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div class="slider-content">
      <div class="card-img">
      <img src="/img/andy_mousalimas.jpeg" alt="Andy Mousalimas and Bill Winkenbach">
      </div>
      <div class="card-content">
        <h2>1969</h2>
        <p>Andy Mousalimas, one of the founding members of the GOPPPL, decides to make the game available at the Kings X Sports Bar where he was an owner. He also introduced new rules such as yardage now counted and the creation of defensive and special teams instead of individuals. The decision of taking the game public got him kicked out from the GOPPPL.</p>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div class="slider-content">
      <div class="card-img">
      <img src="/img/FF women.jpeg" alt="Women playing fantasy football">
      </div>
      <div class="card-content">
        <h2>March 1974</h2>
        <p>The first ever Ladies Division was created at the Kings X Sport Bar. Today an estimated 34% of fantasy football players are women per FSGA.</p>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div class="slider-content">
      <div class="card-img">
      <img src="/img/he early days.jpeg" alt="Old bar full of people">
      </div>
      <div class="card-content">
        <h2>The early days</h2>
        <p>
          It was at Mousalimas bar where fantasy football really took off. Customers had to submit their team in person by 9:00 PM on Friday nights, no faxing or phoning in allowed. A league secretary was in charge of keeping track of each team's points which proved difficult at the time since it was hard to get information from every single game played across the country. This would lead Andy to call multiple media outlets in different cities trying to get information about the matches. 
        </p>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div class="slider-content">
      <div class="card-img">
      <img src="/img/one.jpeg" alt="The number one">
      </div>
      <div class="card-content">
        <h2>1989</h2>
        <p>
          Fantasy Football reaches over one million people in the US
        </p>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div class="slider-content">
      <div class="card-img">
      <img src="/img/bye week.png" alt="Bye week logo">
      </div>
      <div class="card-content">
        <h2>1990</h2>
        <p>
          The NFL introduces bye weeks which has a huge impact in the game. The first season with the possibility of a Byepocalipse is played.
        </p>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div class="slider-content">
      <div class="card-img">
      <img src="/img/yahoo ff.png" alt="Yahoo fantasy football logo">
      </div>
      <div class="card-content">
        <h2>1999</h2>
        <p>
          The online site Yahoo offers the possibility to play Fantasy Football online for free. Till this day Yahoo is one of the biggest names in Fantasy Football. 
        </p>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div class="slider-content">
      <div class="card-img">
      <img src="/img/twelve.png" alt="The number twelve">
      </div>
      <div class="card-content">
        <h2>2006</h2>
        <p>
          Fantasy Football reaches an estimate of 12 million players in the US.
        </p>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div class="slider-content">
      <div class="card-img">
      <img src="/img/Redzone.png" alt="NFL Redzone logo">
      </div>
      <div class="card-content">
        <h2>2009</h2>
        <p>
          The Red Zone channel gets created which allows team managers to more easily keep track of all the major plays across multiple games.
        </p>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div class="slider-content">
      <div class="card-content">
        <h2>A short film</h2>
        <!--Embed the CBS Sports HQ Fantasy Football short here-->
        <iframe width="650" height="400" src="https://www.youtube.com/embed/F5pCYIPyet4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div class="slider-content">
      <div class="card-content">
        <h2>Sources</h2>
        <a href="https://www.cbssports.com/fantasy/football/news/fantasy-football-the-history-of-fantasy-football-the-biggest-seasons-and-the-future/">Fantasy Football: The history of Fantasy football, the biggest seasons and the future</a>
        <a href="https://www.sandiegouniontribune.com/sports/chargers/sdut-the-history-of-fantasy-football-cure-2014jul28-story.html">The history of fantasy football</a>
        <a href="https://www.sbnation.com/ad/16119954/explainer-nfl-fantasy-football-history">Fantasy Football is a lot of fun -- but it used to be a lot of work</a>
        <a href="https://fantasyindex.com/resources/the-birth-of-fantasy-football">The birth of fantasy football</a>
    </div>
  </SwiperSlide>
</Swiper>

<style>
.slider-content{
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-around;
  color: black;
}
a{
  color: black!important;;
}
.card-img{
  /*background-color: orangered;*/
  display: flex;
  align-content: center;
  height: 50%;
}
img{
  height: 325px;
  width: 350px;
}
.card-content{
  margin: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.25rem;
}
@media screen and (max-width: 390px){
  img{
    width: 175px;
    height: 150px;
  }
  .card-content{
    font-size: 0.5rem;
    line-height: normal;
  }
}
</style>