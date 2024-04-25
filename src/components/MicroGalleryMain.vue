<template>
  <div class="gallery">
    <carousel :items-to-show="1" dir="rtl" ref="myCarousel" :wrap-around="true" @slide-end="slideEnd"
              :transition="1500">
      <slide :key="0">
        <section class="section-one" :class="{'slide-anime': currentSlideIndex === 0}">
          <div class="right-section">
            <img :src="require(`@/assets/images/gallery/gm-2.webp`)" alt="">
          </div>
          <div class="left-section">
            <img :src="require(`@/assets/images/gallery/gm-1.webp`)" alt="">
          </div>
        </section>
      </slide>
      <slide :key="1">
        <section class="section-one" :class="{'slide-anime': currentSlideIndex === 1}">
          <div class="right-section">
            <img :src="require(`@/assets/images/gallery/gm-a1.webp`)" alt="">
          </div>
          <div class="left-section">
            <img :src="require(`@/assets/images/gallery/gm-b1.webp`)" alt="">
          </div>
        </section>
      </slide>
      <slide :key="2">
        <section class="section-one" :class="{'slide-anime': currentSlideIndex === 2}">
          <div class="right-section">
            <img :src="require(`@/assets/images/gallery/gm-4.webp`)" alt="">
          </div>
          <div class="left-section">
            <img :src="require(`@/assets/images/gallery/gm-3.webp`)" alt="">
          </div>
        </section>
      </slide>
      <slide :key="3">
        <section class="section-one" :class="{'slide-anime': currentSlideIndex === 3}">
          <div class="right-section">
            <img :src="require(`@/assets/images/gallery/gm-8.webp`)" alt="">
          </div>
          <div class="left-section">
            <img :src="require(`@/assets/images/gallery/gm-7.webp`)" alt="">
          </div>
        </section>
      </slide>
      <template #addons>
        <pagination/>
      </template>
    </carousel>
    <div class="container-fluid image-back">
      <div class="row">
        <div class="col">
          <img class="m-0" :src="require(`@/assets/images/about/a6.webp`)" alt="">
          <img class="m-0" :src="require(`@/assets/images/about/a5.webp`)" alt="">
          <img class="m-0" :src="require(`@/assets/images/about/a7.webp`)" alt="">
          <img class="m-0" :src="require(`@/assets/images/about/a4.webp`)" alt="">
          <img class="m-0" :src="require(`@/assets/images/about/a6.webp`)" alt="">
        </div>
        <div class="col">
          <img class="m-0" :src="require(`@/assets/images/about/a11.webp`)" alt="">
          <img class="m-0" :src="require(`@/assets/images/about/a8.webp`)" alt="">
          <img class="m-0" :src="require(`@/assets/images/about/a2.webp`)" alt="">
          <img class="m-0" :src="require(`@/assets/images/about/a9.webp`)" alt="">
          <img class="m-0" :src="require(`@/assets/images/about/a9.webp`)" alt="">
        </div>
        <div class="col">
          <img class="m-0" :src="require(`@/assets/images/about/a12.webp`)" alt="">
          <img class="m-0" :src="require(`@/assets/images/about/a7.webp`)" alt="">
          <img class="m-0" :src="require(`@/assets/images/about/a5.webp`)" alt="">
          <img class="m-0" :src="require(`@/assets/images/about/a8.webp`)" alt="">
          <img class="m-0" :src="require(`@/assets/images/about/a9.webp`)" alt="">
        </div>
        <div class="col">
          <img class="m-0" :src="require(`@/assets/images/about/a13.webp`)" alt="">
          <img class="m-0" :src="require(`@/assets/images/about/a4.webp`)" alt="">
          <img class="m-0" :src="require(`@/assets/images/about/a3.webp`)" alt="">
          <img class="m-0" :src="require(`@/assets/images/about/a7.webp`)" alt="">
          <img class="m-0" :src="require(`@/assets/images/about/a8.webp`)" alt="">
        </div>
        <div class="col">
          <img class="m-0" :src="require(`@/assets/images/about/a14.webp`)" alt="">
          <img class="m-0" :src="require(`@/assets/images/about/a2.webp`)" alt="">
          <img class="m-0" :src="require(`@/assets/images/about/a4.webp`)" alt="">
          <img class="m-0" :src="require(`@/assets/images/about/a1.webp`)" alt="">
          <img class="m-0" :src="require(`@/assets/images/about/a9.webp`)" alt="">
        </div>
        <div class="col">
          <img class="m-0" :src="require(`@/assets/images/about/a15.webp`)" alt="">
          <img class="m-0" :src="require(`@/assets/images/about/a9.webp`)" alt="">
          <img class="m-0" :src="require(`@/assets/images/about/a7.webp`)" alt="">
          <img class="m-0" :src="require(`@/assets/images/about/a1.webp`)" alt="">
          <img class="m-0" :src="require(`@/assets/images/about/a5.webp`)" alt="">
          <img class="m-0" :src="require(`@/assets/images/about/a2.webp`)" alt="">
        </div>
      </div>
    </div>
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
          this.$refs.myCarousel.slideTo(1);
        } else if (this.currentSlideIndex === 1) {
          this.$refs.myCarousel.slideTo(2);
        } else if (this.currentSlideIndex === 2) {
          this.$refs.myCarousel.slideTo(3);
        } else if (this.currentSlideIndex === 3) {
          this.$refs.myCarousel.slideTo(0);
        }
      } else {
        if (this.currentSlideIndex === 0) {
          this.$refs.myCarousel.slideTo(3);
        } else if (this.currentSlideIndex === 1) {
          this.$refs.myCarousel.slideTo(0);
        } else if (this.currentSlideIndex === 2) {
          this.$refs.myCarousel.slideTo(1);
        } else if (this.currentSlideIndex === 3) {
          this.$refs.myCarousel.slideTo(2);
        }
      }

    },
    changeSlide() {
      if (this.currentSlideIndex === 0) {
        this.$refs.myCarousel.slideTo(1);
      } else if (this.currentSlideIndex === 1) {
        this.$refs.myCarousel.slideTo(2);
      } else if (this.currentSlideIndex === 2) {
        this.$refs.myCarousel.slideTo(3);
      } else if (this.currentSlideIndex === 3) {
        this.$refs.myCarousel.slideTo(0);
      }
    },
    changeSlideUp() {
      if (this.currentSlideIndex === 0) {
        this.$refs.myCarousel.slideTo(3);
      } else if (this.currentSlideIndex === 1) {
        this.$refs.myCarousel.slideTo(0);
      } else if (this.currentSlideIndex === 2) {
        this.$refs.myCarousel.slideTo(1);
      } else if (this.currentSlideIndex === 3) {
        this.$refs.myCarousel.slideTo(2);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel {
  z-index: 11;
}

.slide-anime {
  animation: slide-slide 3s ease-in-out;;
}

.image-back {
  position: fixed;
  top: 0;
  right: 0;
  opacity: .1;

  .cover-img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: center;
    filter: grayscale(100);
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity .5s;
  }

  .col {
    padding: 0;

    img {
      filter: grayscale(100);
    }
  }
}

.gallery {
  background-color: #000;
  height: 100vh;
  overflow: hidden;
}

.carousel__pagination {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateX(-50%);
  flex-direction: column;
}

.hide-scrollbar {
  background-color: #d2d2d2;
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
    img {
      transform: translateY(0) translateX(0) scale(1);
      visibility: visible;
      z-index: 3;
    }
  }

  .left-section {
    img {
      transform: translateY(0) translateX(0) scale(1);
      visibility: visible;
      z-index: 3;
    }
  }
}

.section-one {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;


  .right-section {
    height: 100%;
    width: 45vw;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    z-index: 11;

    img {
      width: 100%;
      object-fit: contain;
      object-position: left center;
      vertical-align: middle;
      transition: 1.5s;
      margin: 0;
      border-radius: 24px;
    }
  }

  .left-section {
    height: 100%;
    width: 40vw;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-right: -10px;

    img {
      width: 100%;
      object-fit: contain;
      object-position: right center;
      vertical-align: middle;
      transition: 1.5s;
      margin: 0;
      border-radius: 24px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }


}

.right-section {
  img {
    transform: translateY(0) translateX(200vw) scale(1);
    visibility: hidden;
    position: relative;
    z-index: 1;
  }
}

.left-section {
  img {
    transform: translateY(0) translateX(-200vw) scale(1);
    visibility: hidden;
    position: relative;
    z-index: 1;
  }
}

@keyframes slide-slide {
  0% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(40px);
  }
  40% {
    transform: translateX(-40px);
  }
  60% {
    transform: translateX(40px);
  }
  80% {
    transform: translateX(-40px);
  }
  100% {
    transform: translateX(0);
  }
}

@media only screen and (max-width: 790px) {
  .right-section {
    width: 100% !important;
    margin: 0 0 4px !important;

    img {
      border-radius: 0 !important;
    }
  }
  .left-section {
    width: 100% !important;
    margin: 0 0 4px !important;

    img {
      border-radius: 0 !important;
    }
  }
  .slide-anime {
    display: block !important;
    height: auto !important;
  }
  .image-back{
    display: none;
  }
}
</style>