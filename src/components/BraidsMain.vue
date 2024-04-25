<template>
  <div class="h-gallery">
    <h2 class="page-title text-center">
      <KinesisContainer class="h-100" event="scroll">
        <KinesisElement tag="span" :strength="-20" type="depth">
          نمونه های
          <br/>
          بافت مو
        </KinesisElement>
      </KinesisContainer>
    </h2>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-3">
          <div class="image-holder">
            <img class="w-100 h-auto" :src="require(`@/assets/images/gallery/b-1.webp`)" alt="">
          </div>
          <div class="image-holder">
            <img class="w-100 h-auto" :src="require(`@/assets/images/gallery/b-5.webp`)" alt="">
          </div>
        </div>
        <div class="col-md-3">
          <div class="image-holder">
            <img class="w-100 h-auto" :src="require(`@/assets/images/gallery/b-3.webp`)" alt="">
          </div>
          <div class="image-holder">
            <img class="w-100 h-auto" :src="require(`@/assets/images/gallery/b-6.webp`)" alt="">
          </div>
          <div class="image-holder">
            <img class="w-100 h-auto" :src="require(`@/assets/images/gallery/b-9.webp`)" alt="">
          </div>
        </div>
        <div class="col-md-3">
          <div class="image-holder">
            <img class="w-100 h-auto" :src="require(`@/assets/images/gallery/b-4.webp`)" alt="">
          </div>
          <div class="image-holder">
            <img class="w-100 h-auto" :src="require(`@/assets/images/gallery/b-7.webp`)" alt="">
          </div>
          <div class="image-holder">
            <img class="w-100 h-auto" :src="require(`@/assets/images/gallery/b-10.webp`)" alt="">
          </div>
        </div>
        <div class="col-md-3">
          <div class="image-holder">
            <img class="w-100 h-auto" :src="require(`@/assets/images/gallery/b-2.webp`)" alt="">
          </div>
          <div class="image-holder">
            <img class="w-100 h-auto" :src="require(`@/assets/images/gallery/b-8.webp`)" alt="">
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