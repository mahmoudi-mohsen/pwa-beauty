<template>
  <div class="hide-scrollbar">
    <img class="logo" :src="require(`@/assets/images/gs-logo.png`)" alt="">
    <carousel :items-to-show="1" dir="rtl" ref="myCarousel" :wrap-around="true" @slide-end="slideEnd"
              :transition="1500">
      <slide :key="0">
        <section class="section-one">
          <div class="right-section"></div>
          <div class="left-section"></div>
        </section>
      </slide>
      <slide :key="1">
        <section class="section-two">
          <div class="right-section"></div>
          <div class="left-section"></div>
        </section>
      </slide>
      <slide :key="2">
        <section class="section-three">
          <div class="right-section"></div>
          <div class="left-section"></div>
        </section>
      </slide>
      <slide :key="3">
        <section class="section-four">
          <div class="right-section"></div>
          <div class="left-section"></div>
        </section>
      </slide>
      <template #addons>
        <pagination/>
      </template>
    </carousel>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      currentSlideIndex: 0,
    }
  },
  mounted() {
    window.addEventListener('wheel', this.scrollBottom);
    window.addEventListener('keyup', event => {
      if (event.keyCode === 40) {
        this.changeSlide()
      }
    })
    window.addEventListener('keyup', event => {
      if (event.keyCode === 38) {
        this.changeSlideUp()
      }
    })
  },
  unmounted() {
    window.removeEventListener('wheel', this.scrollBottom);
    window.removeEventListener('keyup', this.changeSlide);
    window.removeEventListener('keyup', this.changeSlideUp);
  },
  methods: {
    slideEnd(e) {
      this.currentSlideIndex = e.currentSlideIndex;
    },
    scrollBottom(e) {
      if (e.deltaY > 0) {
        if (this.currentSlideIndex === 0) {
          this.$refs.myCarousel.slideTo(1)
        } else if (this.currentSlideIndex === 1) {
          this.$refs.myCarousel.slideTo(2)
        } else if (this.currentSlideIndex === 2) {
          this.$refs.myCarousel.slideTo(3)
        } else if (this.currentSlideIndex === 3) {
          this.$refs.myCarousel.slideTo(0)
        }
      } else {
        if (this.currentSlideIndex === 0) {
          this.$refs.myCarousel.slideTo(3)
        } else if (this.currentSlideIndex === 1) {
          this.$refs.myCarousel.slideTo(0)
        } else if (this.currentSlideIndex === 2) {
          this.$refs.myCarousel.slideTo(1)
        } else if (this.currentSlideIndex === 3) {
          this.$refs.myCarousel.slideTo(2)
        }
      }

    },
    changeSlide() {
      if (this.currentSlideIndex === 0) {
        this.$refs.myCarousel.slideTo(1)
      } else if (this.currentSlideIndex === 1) {
        this.$refs.myCarousel.slideTo(2)
      } else if (this.currentSlideIndex === 2) {
        this.$refs.myCarousel.slideTo(3)
      } else if (this.currentSlideIndex === 3) {
        this.$refs.myCarousel.slideTo(0)
      }
    },
    changeSlideUp() {
      if (this.currentSlideIndex === 0) {
        this.$refs.myCarousel.slideTo(3)
      } else if (this.currentSlideIndex === 1) {
        this.$refs.myCarousel.slideTo(0)
      } else if (this.currentSlideIndex === 2) {
        this.$refs.myCarousel.slideTo(1)
      } else if (this.currentSlideIndex === 3) {
        this.$refs.myCarousel.slideTo(2)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 99;
  width: 80px;
  transition: ease-in-out 3s;
  -webkit-animation-name: changeLogoColor;
  -webkit-animation-duration: 3s;
  -webkit-animation-timing-function: ease-in-out;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-play-state: running;

  animation-name: changeLogoColor;
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-play-state: running;
}
@-webkit-keyframes changeLogoColor {
  0%     {filter: none;}
  50.0%  {filter: invert(100);}
  100.0%  {filter: none;}
}

@keyframes changeLogoColor {
  0%     {filter: none;}
  50.0%  {filter: invert(100);}
  100.0%  {filter: none;}
}


.carousel__pagination {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateX(-50%);
  flex-direction: column;
}

.hide-scrollbar {
  background-color: #000;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  transform: rotateY(-20deg) translateX(0) scale(1);
  position: relative;
  z-index: 1;
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(1);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) translateX(0) scale(1);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) translateX(0) scale(1);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) translateX(0);
}

.carousel__slide--active {
  z-index: 3;

  .right-section {
    transform: translateY(0) translateX(0) scale(1);
    visibility: visible;
    z-index: 3;
  }

  .left-section {
    transform: translateY(0) translateX(0) scale(1);
    visibility: visible;
    z-index: 3;
  }
}

.section-one {
  width: 100vw;
  height: 100vh;
  display: flex;

  .right-section {
    background: url("@/assets/images/home/r-5.webp") no-repeat left center;
    background-size: cover;
    height: 100%;
    width: 50vw;
    transition: 1.5s;
  }

  .left-section {
    background: url("@/assets/images/home/l-5.webp") no-repeat right center;
    background-size: cover;
    height: 100%;
    width: 50vw;
    transition: 1.5s;
  }
}

.section-two {
  width: 100vw;
  height: 100vh;
  display: flex;

  .right-section {
    background: url("@/assets/images/home/r-6.webp") no-repeat left center;
    background-size: cover;
    height: 100%;
    width: 50vw;
    transition: 1.5s;
  }

  .left-section {
    background: url("@/assets/images/home/l-6.webp") no-repeat right center;
    background-size: cover;
    height: 100%;
    width: 50vw;
    transition: 1.5s;
  }
}

.section-three {
  width: 100vw;
  height: 100vh;
  display: flex;

  .right-section {
    background: url("@/assets/images/home/r-8.webp") no-repeat left center;
    background-size: cover;
    height: 100%;
    width: 50vw;
    transition: 1.5s;
  }

  .left-section {
    background: url("@/assets/images/home/l-8.webp") no-repeat right center;
    background-size: cover;
    height: 100%;
    width: 50vw;
    transition: 1.5s;
  }
}

.section-four {
  width: 100vw;
  height: 100vh;
  display: flex;

  .right-section {
    background: url("@/assets/images/home/r-7.webp") no-repeat left center;
    background-size: cover;
    height: 100%;
    width: 50vw;
    transition: 1.5s;
  }

  .left-section {
    background: url("@/assets/images/home/l-7.webp") no-repeat right center;
    background-size: cover;
    height: 100%;
    width: 50vw;
    transition: 1.5s;
  }
}

.right-section {
  transform: translateY(100vh) translateX(0);
  visibility: hidden;
  position: relative;
  z-index: 1;
}

.left-section {
  transform: translateY(-100vh) translateX(0);
  visibility: hidden;
  position: relative;
  z-index: 1;
}
@media only screen and (max-width: 1024px) {
  .right-section,.left-section{
    background-size: contain!important;
  }
}
</style>