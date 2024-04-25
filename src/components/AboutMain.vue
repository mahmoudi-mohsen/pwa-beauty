<template>
  <div class="about">
    <div class="banner-hero">
      <div class="hero-background">
        <div class="image-wrapper">
          <img :src="require(`@/assets/images/about/a-main.webp`)" alt="">
        </div>
      </div>
      <div class="hero-content">
        <h1>گیسو سیفی</h1>
        <p data-aos="zoom-in"
           data-aos-duration="1500">آرتیست و مدرس میکروبلیدینگ، فیبروز، رنگ مو و بافت مو</p>

      </div>
    </div>
    <div class="explain-work">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 mb-2 mb-md-0">
            <img class="rounded-4" :src="require(`@/assets/images/about/a-top.webp`)" alt="">
          </div>
          <div class="col-lg-5 offset-md-1">
            <div class="pt-4 pb-sm-4 ps-md-4 ps-xl-0">
              <h2 class="h1 pb-2 pb-sm-3 pb-xl-4">درباره <br>خدمات</h2>
              <div class="d-flex pb-3 mb-2 mb-xl-3">
                <div class="text-body-secondary pt-1 item-images" style="width: 200px">
                  <img class=" m-0" :src="require(`@/assets/images/about/logo-micropng.png`)" alt=""
                       data-aos="fade-right"
                       data-aos-duration="300">
                </div>
                <div class="ps-3" data-aos="ex-anime"
                     data-aos-duration="400">
                  <h3 class="h5">میکروبلیدینگ</h3>
                  <p class="mb-0 text-justify">
                    میکروبلیدینگ ابرو یک شیوه طراحی ابرو است که در دسته انواع آرایش دائم قرار می گیرد. در این روش با
                    دستگاه های مخصوص که شامل سوزن های بسیار ظریف هستند، رنگدانه ها را به شکل تارهای نازک مو به زیر پوست
                    تزریق می کنند. این تکنیک به قدری با ظرافت انجام می شود که نتیجه کار ایجاد ابروهایی طبیعی و بدون قاب
                    است. با گیسو سیفی بهترین رو تجربه کنید.
                  </p>
                </div>
              </div>
              <div class="d-flex pb-3 mb-2 mb-xl-3">
                <div class="text-body-secondary pt-1 item-images" style="width: 200px">
                  <img class=" m-0" :src="require(`@/assets/images/about/hair.png`)" alt="" data-aos="fade-right"
                       data-aos-duration="500">
                </div>
                <div class="ps-3" data-aos="ex-anime"
                     data-aos-duration="500">
                  <h3 class="h5">رنگ مو</h3>
                  <p class="mb-0 text-justify">
                    رنگ و لایت مو از خدمات تخصصی آرایشگریست که در آن با کمک فرآیند دکلراسون و بکارگیری اکسیدان‌ها در
                    تمام
                    یا قسمتی از موها تغییر رنگ ایجاد می‌شود.انجام انواع خدمات مش و لایت مو ( هایلایت، چانکی لایت، بیبی
                    لایت
                    ) و انواع خدمات رنگ مو ( دکلره کامل، رنگ ریشه، رنگساژ مو ) با گیسو سیفی.
                  </p>
                </div>
              </div>
              <div class="d-flex pb-3 mb-2 mb-xl-3">
                <div class="text-body-secondary pt-1 item-images" style="width: 200px">
                  <img class=" m-0" :src="require(`@/assets/images/about/braids.png`)" alt="" data-aos="fade-right"
                       data-aos-duration="500">
                </div>
                <div class="ps-3" data-aos="ex-anime"
                     data-aos-duration="500">
                  <h3 class="h5">بافت مو</h3>
                  <p class="mb-0 text-justify">
                    بافت مو یک روش جمع آوری و آرایش مو است که به سبک و مدل های مختلفی روی مو های افراد اجرا می شود. این
                    روش در گذشته نیز مورد استفاده قرار گرفته است. مردم آفریقا اولین افرادی بودند که مو های خود را به این
                    روش درست می کردند.
                    انجام انواع خدمات بافت مو(بافت مو آفریقایی، بافت مو فرانسوی، بافت مو ساده، بافت موی تیغ ماهی، بافت
                    مو تزاری، بافت مو پنج تایی، بافت مو دردلاک) را با گیسو سیفی تجربه کنید.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid pt-5 pb-5 parallax mb-5">
      <div class="row">
        <div class="col-6 col-md-3 d-flex flex-column justify-content-start mb-2 "></div>
        <div class="col-md-6 mb-2 position-relative z-1 vh-200 about-video">
          <figure class="video-player w-100 position-sticky vh-50" style="top: 160px" ref="video">
            <video muted id="video" preload="auto" autoplay="autoplay" loop="loop" playsinline
                   class="video responsive">
              <source
                  :src="require(`@/assets/images/about/IMG_5180.mp4`)"
                  type="video/mp4">
            </video>
          </figure>
        </div>
        <div class="col-6 col-md-3 d-flex flex-column justify-content-end mb-2"></div>
      </div>
    </div>
    <div class="container-fluid mt-5 image-row pb-5 mb-5">
      <div class="row">
        <div class="col-md-4">
          <img class="m-0" :src="require(`@/assets/images/about/a5.webp`)" alt="" data-aos="fade-left"
               data-aos-offset="500"
               data-aos-duration="500">
        </div>
        <div class="col-md-4">
          <img class="m-0" :src="require(`@/assets/images/about/a1.webp`)" alt="" data-aos="fade-down"
               data-aos-offset="500"
               data-aos-duration="500">
        </div>
        <div class="col-md-4">
          <img class="m-0" :src="require(`@/assets/images/about/a3.webp`)" alt="" data-aos="fade-right"
               data-aos-offset="500"
               data-aos-duration="500">
        </div>
        <div class="col-md-4">
          <img class="m-0" :src="require(`@/assets/images/about/a4.webp`)" alt="" data-aos="fade-left"
               data-aos-offset="500"
               data-aos-duration="500">
        </div>
        <div class="col-md-4">
          <img class="m-0" :src="require(`@/assets/images/about/a2.webp`)" style="object-position: right;" alt=""
               data-aos="fade-up" data-aos-offset="500"
               data-aos-duration="500">
        </div>
        <div class="col-md-4">
          <img class="m-0" :src="require(`@/assets/images/about/a6.webp`)" alt="" data-aos="fade-right"
               data-aos-offset="500"
               data-aos-duration="500">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {translate} from '@/anime';
import AOS from "aos";

export default {
  data() {
    return {
      isMobile: false,
    }
  },
  mounted() {
    if (window.innerWidth >= 1024) {
      translate(this.$refs.video);
    }
    AOS.init();
  },
  unmounted() {

  },
  methods: {}
}
</script>

<style lang="scss" scoped>
[data-aos="ex-anime"] {
  opacity: 0;
  transition-property: transform, opacity;
  transform: none;

  &.aos-animate {
    animation-name: ex-anime;
    animation-fill-mode: forwards;
    animation-play-state: running;
    opacity: 1;
  }
}

[data-aos="ox-anime"] {
  opacity: 1;
  transition-property: transform;
  transform: scale(2);

  &.aos-animate {
    transform: scale(1);
  }
}

[data-aos="ex-anime"] {
  @for $i from 1 through 60 {
    .explain-work[data-aos-duration='#{$i * 50}'] &,
    &[data-aos][data-aos-duration='#{$i * 50}'] {
      transition-duration: #{$i * 100}ms;
      animation-duration: #{$i * 100}ms;
    }

    .explain-work[data-aos-delay='#{$i * 50}'] &,
    &[data-aos][data-aos-delay='#{$i * 50}'] {
      transition-delay: 0s;
      animation-delay: 0s;

      &.aos-animate {
        transition-delay: #{$i * 50}ms;
        animation-delay: #{$i * 50}ms;
      }
    }
  }
}

@keyframes ex-anime {
  0% {
    transform: translate3d(-100px, 0, 0);
  }
  80% {
    transform: translate3d(20px, 0, 0);
  }
  100% {
    transform: translateZ(0);
  }
}

.image-row {
  img {
    height: 100%;
    object-fit: cover;
    filter: grayscale(100);
    transition: all 1s;

    &:hover {
      filter: none;
    }
  }

  .col-md-4 {
    padding: 0;
  }
}

.vh-200 {
  height: 200vh;
}

.vh-50 {
  height: 50vh;
}

.video {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}

.video-player {
  overflow: hidden;
  position: relative;
}

.about {
  background-color: #000000;
  color: #ffffff;
}

.explain-work {
  width: 100%;
  background-image: url("@/assets/images/about/texture-2.jpg");
  padding: 2.5rem 0;
  position: relative;
  z-index: 22;
}


.banner-hero {
  background: #0a0909;
  color: #fff;
  position: relative;
  height: 300px;

  .hero-content {
    position: relative;
    z-index: 3;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
      text-align: center;
      margin-bottom: 1rem;
      font-size: 2.85rem;
      color: #d6b36a;
    }

    p {
      text-align: center;
    }
  }

  .hero-background {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 0;

    &::before {
      content: '';
      background-color: rgba(0, 0, 0, .5);
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }

    .image-wrapper {
      width: 100%;
      height: 100%;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
        vertical-align: middle;
      }
    }
  }
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .banner-hero .hero-content h1 {
    font-size: 4rem;
    line-height: 1;
  }
  .explain-work {
    padding: 7.5rem 0;
  }
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1024px) {
  .parallax.pt-5 {
    padding-top: 19.1rem !important;
  }
  .parallax.pb-5 {
    padding-bottom: 6.5rem !important;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

@media (min-width: 1400px) {
  .container {
    max-width: 1320px;
  }
}

@media only screen and (min-width: 1600px) {
  .container {
    max-width: 1500px;
  }
  .banner-hero {
    height: 33.33vw;
  }
}

@media only screen and (max-width: 575px) {
  .item-images {
    display: none;
  }
}

@media only screen and (max-width: 1023px) {
  .about-video {
    height: auto;
    width: 100%!important;
    padding: 0;
  }

  .video-player {
    position: unset !important;
    height: auto !important;
  }
  .parallax{
    .col-6.col-md-3{
      display: none!important;
    }
  }
}
@media only screen and (max-width: 767px) {
 .image-row{
   img{
     filter: none;
   }
 }
}
</style>