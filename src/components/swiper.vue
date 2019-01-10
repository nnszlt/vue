<template>
  <div>
    <swiper
      class="swiper_box"
      :options="swiperOption"
      ref="mySwiper"
    >
      <!-- slides -->
      <swiper-slide>I'm Slide 1</swiper-slide>
      <swiper-slide>I'm Slide 2</swiper-slide>
      <swiper-slide>I'm Slide 3 <button @click="top">dain</button></swiper-slide>

      <!-- Optional controls -->
      <div
        class="swiper-button-next"
        slot="button-next"
      ></div>

    </swiper>
  </div>
</template>
 
<style scoped>
@import "swiper/dist/css/swiper.css";
.swiper_box {
  height: 80vh;
  overflow: hidden;
}
</style>


<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "carrousel",
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        allowTouchMove: false,
        height: window.innerHeight,
        navigation: {
          nextEl: ".swiper-button-next"
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
 
  },
  methods: {
    top: function() {
     this.swiper.slideTo(0, 0, false)
    }
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

