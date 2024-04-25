<template>
  <div class="h-gallery">
    <h2 class="page-title text-center">
      <KinesisContainer class="h-100" event="scroll">
        <KinesisElement tag="span" :strength="-20" type="depth">
          نمونه های
          <br/>
          رنگ مو
        </KinesisElement>
      </KinesisContainer>
    </h2>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-3">
          <div class="image-holder">
            <img class="w-100 h-auto" :src="require(`@/assets/images/gallery/h-1.webp`)" alt="">
          </div>
          <div class="image-holder">
            <img class="w-100 h-auto" :src="require(`@/assets/images/gallery/h-4.webp`)" alt="">
          </div>
          <div class="image-holder">
            <img class="w-100 h-auto" :src="require(`@/assets/images/gallery/h-6.webp`)" alt="">
          </div>
        </div>
        <div class="col-md-3">
          <div class="image-holder">
            <img class="w-100 h-auto" :src="require(`@/assets/images/gallery/h-2.webp`)" alt="">
          </div>
          <div class="image-holder mb-0">
            <video class="w-100 h-auto" preload="auto" autoplay="autoplay" loop="loop" muted playsinline>
              <source :src="require(`@/assets/images/gallery/h-11.mp4`)"/>
            </video>
          </div>
          <div class="image-holder">
            <img class="w-100 h-auto" :src="require(`@/assets/images/gallery/IMG_9979.webp`)" alt="">
          </div>
        </div>
        <div class="col-md-3">
          <div class="image-holder mb-0">
            <video class="w-100 h-auto" preload="auto" autoplay="autoplay" loop="loop" muted playsinline>
              <source :src="require(`@/assets/images/gallery/h-8.mp4`)"/>
            </video>
          </div>
          <div class="image-holder">
            <img class="w-100 h-auto" :src="require(`@/assets/images/gallery/h-7.webp`)" alt="">
          </div>
          <div class="image-holder">
            <video class="w-100 h-auto" preload="auto" autoplay="autoplay" loop="loop" muted playsinline>
              <source :src="require(`@/assets/images/gallery/h-6.mp4`)"/>
            </video>
          </div>
        </div>
        <div class="col-md-3">
          <div class="image-holder">
            <img class="w-100 h-auto" :src="require(`@/assets/images/gallery/h-3.webp`)" alt="">
          </div>
          <div class="image-holder mb-0">
            <video class="w-100 h-auto" preload="auto" autoplay="autoplay" loop="loop" muted playsinline>
              <source :src="require(`@/assets/images/gallery/h-5.mp4`)"/>
            </video>
          </div>
          <div class="image-holder">
            <img class="w-100 h-auto" :src="require(`@/assets/images/gallery/h-10.jpg`)" alt="">
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.page-title {
  position: absolute;
  top: 40px;
  right: 32px;
  height: 100%;

  span {
    position: sticky;
    top: 32px;
    right: 16px;
    display: block;
    -webkit-animation-name: change-color;
    -webkit-animation-duration: 5s;
    -webkit-animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-play-state: running;

    animation-name: change-color;
    animation-duration: 5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-play-state: running;
  }
}

@keyframes change-color {
  0% {
    color: #ffffff;
  }
  20% {
    color: #d6b36a;
  }
  50% {
    color: #ffb338;
  }
  100% {
    color: #ffffff;
  }
}

.col-md-3 {
  padding: 3px;
  overflow: hidden;

  .image-holder {
    overflow: hidden;
    margin-bottom: 6px;
  }

  video {
    transition: 1s ease-in-out;

    &:hover {
      scale: 1.2;
    }
  }

  img {
    transition: 1s ease-in-out;

    &:hover {
      scale: 1.2;
    }
  }
}
@media only screen and (max-width: 1660px) {
  .page-title {
    position: unset;
    margin-top: 1rem;
    height: unset;
    span{
      position: unset;
    }
  }
}
</style>