<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"/>
    </transition>
  </router-view>
  <div v-if="isMobile === false">
    <sf-vue-animated-cursor target="#app" teleport-to="body"/>
  </div>
</template>
<script>

export default {
  data() {
    return {
      isMobile: false,
    }
  },
  mounted() {
    this.checkDevice();
  },
  methods: {
    checkDevice() {
      this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    },
  }
}
</script>
<style lang="scss">
@import "@/assets/sass/main.scss";

body {
  cursor: none;
}

.sf-vue-animated-cursor {
  z-index: 9999 !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media only screen and (max-width: 1024px) {
  body {
    cursor: default;
  }
}
@media only screen and (max-width: 600px) {
  html, body {
    overflow-x: hidden;
  }
}
</style>
