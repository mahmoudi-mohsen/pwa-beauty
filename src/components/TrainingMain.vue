<template>
  <div class="content-wrap" id="content-wrap">
    <div class="pt-160 pb-100 position-relative">
      <div class="background">
        <div class="background-video bg-dark jarallax">
          <video autoplay loop class="w-100" muted playsinline>
            <source :src="require(`@/assets/images/about/teaching.mp4`)"
                    type="video/mp4">
          </video>
        </div>
        <div class="background-color"
             style="background-image: linear-gradient(rgba(14, 14, 14, 0) 0%, rgb(14, 14, 14) 100%);"></div>
      </div>
      <div class="py-lg-2 container">
        <div class="gh-1 gv-2 text-white row">
          <div data-aos-duration="900" data-aos="fade" class="me-auto col-lg-5 aos-init">
            <h1 class="display-4 text-white mb-0">
              آموزش با
              <br/>
              گیسو سیفی
            </h1>
          </div>
          <div class="col-lg-2"></div>
          <div data-show-duration="900" data-show-delay="150" class="col-lg me-xl-n30 col">
            <hr class="mt-0 border-white">
            <p class="lead fw-normal" data-aos="fade">
              آموزش میکروبلیدینگ، رنگ مو و یا بافت مو را با گیسو سیفی تجربه کنید
            </p>
            <a data-aos="fade" class="btn btn-white btn-with-ball"
               href="+989037249424">
              برای اطلاعات بیشتر تماس بگیرید
            </a>
          </div>
          <div class="d-none d-xl-block col-1"></div>
        </div>
      </div>
    </div>
    <div class="content-container">
    <div class="overflow-hidden container">
      <a class="card-category subtitle mt-5 d-block" href="javascript:void(0)">آموزش میکروبلیدینگ</a>
      <div class="row mt-4 mb-4">
        <div class="col-md-3">
          <img class="m-0 w-100" :src="require(`@/assets/images/about/a3.webp`)" alt="" data-aos="flip-right"
               data-aos-duration="1000">
          <img class="m-0 mt-3 w-100" style="object-position: center" :src="require(`@/assets/images/about/a6.webp`)"
               alt=""
               data-aos="flip-right" data-aos-duration="1000">
        </div>
        <div class="col-md-6">
          <img class="m-0 w-100" :src="require(`@/assets/images/about/a2.webp`)" alt="" data-aos="flip-left"
               data-aos-duration="1000">
          <img class="m-0 mt-3 w-100" style="object-position: center" :src="require(`@/assets/images/about/a6.webp`)"
               alt=""
               data-aos="flip-left" data-aos-duration="1000">
        </div>
        <div class="col-md-3">
          <img class="m-0 w-100" :src="require(`@/assets/images/about/a3.webp`)" alt="" data-aos="flip-right"
               data-aos-duration="1000">
          <img class="m-0 mt-3 w-100" style="object-position: center" :src="require(`@/assets/images/about/a6.webp`)"
               alt=""
               data-aos="flip-right" data-aos-duration="1000">
        </div>
      </div>
    </div>
    <div class="row mt-15 mb-5">
      <div class="col-md-3">
        <img class="m-0 mt-3 w-100" style="object-position: center" :src="require(`@/assets/images/about/a6.webp`)"
             alt=""
             data-aos="fade-left" data-aos-duration="2000" data-aos-offset="600">
      </div>
      <div class="col-md-6">
        <figure class="video-player w-100" data-aos="ox-anime" data-aos-duration="1000" data-aos-offset="500">
          <video muted id="video" preload="auto" autoplay="autoplay" loop="loop" playsinline
                 class="video responsive w-100">
            <source
                :src="require(`@/assets/images/about/IMG_5180.mp4`)"
                type="video/mp4">
          </video>
        </figure>
        <img class="m-0 mt-3 w-100" style="object-position: top" :src="require(`@/assets/images/about/a2.webp`)"
             alt=""
             data-aos="fade-up" data-aos-duration="1000" data-aos-offset="100">
      </div>
      <div class="col-md-3">
        <img class="m-0 mt-3 w-100" style="object-position: center" :src="require(`@/assets/images/about/a6.webp`)"
             alt=""
             data-aos="fade-right" data-aos-duration="2000" data-aos-offset="600">
      </div>
    </div>
    </div>
    <div class="mobile-content">
      <img class="w-100" :src="require(`@/assets/images/about/a3.webp`)" alt="">
      <img class="mt-3 w-100" :src="require(`@/assets/images/about/a6.webp`)" alt="">
      <img class="mt-3 w-100" :src="require(`@/assets/images/about/a2.webp`)" alt="">
      <img class="mt-3 w-100" :src="require(`@/assets/images/about/a6.webp`)" alt="">
      <img class="mt-3 w-100" :src="require(`@/assets/images/about/a3.webp`)" alt="">
      <img class="mt-3 w-100" :src="require(`@/assets/images/about/a6.webp`)" alt="">
      <img class="mt-3 w-100" :src="require(`@/assets/images/about/a6.webp`)">
      <video  muted id="video" preload="auto" autoplay="autoplay" loop="loop" playsinline
             class="mt-3 w-100">
        <source
            :src="require(`@/assets/images/about/IMG_5180.mp4`)"
            type="video/mp4">
      </video>
      <img class="mt-3 w-100" style="object-position: top" :src="require(`@/assets/images/about/a2.webp`)" alt="">
      <img class="mt-3 w-100"  :src="require(`@/assets/images/about/a6.webp`)" alt="">
    </div>
  </div>
</template>

<script>
import AOS from "aos";

export default {
  mounted() {
    AOS.init();
  }
}
</script>

<style lang="scss" scoped>
.mt-15 {
  margin-top: 15rem;
}

.col-md-6 {
  padding-right: .5rem;
  padding-left: .5rem;

  img {
    width: 100%;
    max-height: 600px;
    object-fit: cover;
    object-position: top;
    border-radius: 20px;
    transition: all 1s;
  }
}

.content-wrap {
  max-width: 100%;
  position: relative;
  z-index: 1;
}

.pb-100 {
  padding-bottom: 160px !important;
}

.pt-160 {
  padding-top: 160px !important;
}

.background {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
}

.bg-dark {
  --bs-bg-opacity: 1;
  background-color: rgba(14, 14, 14, 1) !important;
}

.background-video {
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;

  video {
    bottom: 0;
    height: 100%;
    left: 0;
    object-fit: cover;
    position: absolute;
    right: 0;
  }
}

.background-color, .background-image {
  bottom: 0;
  display: block;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}


.row.gv-2 {
  margin-top: -40px;
}

.row.gh-1 {
  margin-left: -30px;
}

.row.gv-2 > [class*="col"] {
  padding-top: 40px;
}

.row.gh-1 > [class*="col"] {
  padding-right: 30px;
}

.display-4 {
  font-size: 5.25em;
  margin-bottom: .4em;
}

.lead {
  margin-bottom: 3.0588235294em;
}

.btn-with-ball {
  padding: 15px 40px;
}

[data-aos="ox-anime"] {
  opacity: 1;
  transition-property: transform;
  transform: scale(2);

  &.aos-animate {
    transform: scale(1);
  }
}

@media only screen and (max-width: 1199px) {
  .display-4 {
    font-size: 3.25em;
    margin-bottom: 0.4em;
  }
}

@media only screen and (max-width: 780px) {
  .content-container{
    display: none;
  }
}

@media only screen and (max-width: 590px) {
  .row.gh-1 > [class*="col"] {
    padding-right: 8px;
  }
  .row.gh-2 > [class*="col"] {
    padding-right: 8px;
  }
  h1.display-4{
    text-align: center;
  }
  .row.gh-1{
    margin-left: auto;
    margin-right: auto;
  }
}
</style>