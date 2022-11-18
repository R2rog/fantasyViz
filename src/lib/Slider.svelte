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
  pagination
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
      <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp" alt="">
      </div>
      <div class="card-content">
        <h2>1968</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </p>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>Slide 2</SwiperSlide>
  <SwiperSlide>Slide 3</SwiperSlide>
  <SwiperSlide>Slide 4</SwiperSlide>
  <SwiperSlide>Slide 5</SwiperSlide>
  <SwiperSlide>Slide 6</SwiperSlide>
  <SwiperSlide>Slide 7</SwiperSlide>
  <SwiperSlide>Slide 8</SwiperSlide>
  <SwiperSlide>Slide 9</SwiperSlide>
</Swiper>

<style>
.slider-content{
  display: flex;
  align-content: center;
  justify-content: space-around;
  color: black;
}
.card-img{
  background-color: orangered;
  display: flex;
  align-content: center;
}
.card-content{
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
img{
  height: 270px;
  width: 270px;
  background-color: orangered;
  opacity: 50%;
}
</style>