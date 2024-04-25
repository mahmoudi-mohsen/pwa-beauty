<template>
  <div>
    <div class="side">
      <router-link to="/" v-if="$route.name !== 'Home'">
        <img class="side-logo" :src="require(`@/assets/images/gs-logo.png`)" alt="">
      </router-link>
      <div class="menu-icon-trigger">
        <div class="menu-icon-wrapper">
          <a href="javascript:void(0)" @click="showMenu = true" v-show="showMenu === false">
            <i class="far fa-bars"></i>
          </a>
          <a href="javascript:void(0)" @click="showMenu = false" v-show="showMenu === true">
            <i class="far fa-times"></i>
          </a>
        </div>
      </div>
      <h3 class="page-caps grey">
        <span class="black">gisoo seifi</span> • microblading • hair • braids
      </h3>
    </div>
    <Transition name="bounce">
      <div class="menu" v-show="showMenu === true">
        <div class="menu-panel valign text-center">
          <nav>
            <ul class="font3 white">
              <li>
                <router-link to="/">خانه</router-link>
              </li>
              <li>
                <router-link to="/about">درباره من</router-link>
              </li>
              <li>
                <router-link to="/microGallery">نمونه های میکروبلیدینگ</router-link>
              </li>
              <li>
                <router-link to="/hairGallery">نمونه های رنگ مو</router-link>
              </li>
              <li>
                <router-link to="/braids">نمونه های بافت</router-link>
              </li>
              <li>
                <router-link to="/training">آموزش</router-link>
              </li>
              <li>
                <router-link to="/contact">تماس با من</router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    }
  }
}
</script>

<style lang="scss" scoped>
.side-logo {
  max-width: 50px;
  filter: invert(100);
}

.bounce-enter-active {
  animation: bounce-in 1s;
}

.bounce-leave-active {
  animation: bounce-in 1s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

.menu {
  border: solid 100px #ffffff;
  transition: all .4s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(4, 4, 4, 0.9);
  background-size: cover;
  z-index: 40;
  overflow: hidden;

  .valign {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    transition: all .4s ease-in-out;
    text-align: center;
  }

  .menu-panel nav > ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    transition: all .4s ease-in-out;
    color: #ffffff;
  }

  .menu-panel ul li a {
    font-size: 2rem;
    line-height: 5rem;
    text-align: right;
    color: #ffffff;

    &:hover {
      color: #d6b36a;
    }
  }
}

.side {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100px;
  padding: 20px 0;
  text-align: center;
  z-index: 9995;
  transition: all .4s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
    transition: all .4s ease-in-out;

    .side-logo {
      filter: none;
    }

    .black {
      color: #0c0c0c;
    }

    .menu-icon-wrapper {
      color: #0c0c0c;

      a {
        color: #0c0c0c;
      }
    }
  }

}

.menu-icon-trigger {
  position: fixed;
  top: 50%;
  left: 0;
  height: 100px;
  margin-top: -50px;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu-icon-wrapper {
  cursor: pointer;
  position: relative;
  width: 34px;
  height: 34px;
  margin: 2em;
  transition: 0.1s;
  color: #c2c2c2;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    font-size: 28px;
    display: flex;
    width: max-content;
    position: relative;
    z-index: 33;
    color: #c2c2c2;
  }
}

.page-caps {
  font-size: 14px;
  bottom: 30px;
  display: inline-block;
  font-family: inherit;
  left: 50%;
  position: absolute;
  transform: translateY(50%) rotate(-90deg);
  transform-origin: 0 50% 0;
  white-space: nowrap;
}

.grey {
  color: #c2c2c2;
}

.black {
  color: #d6b36a;
}
@media only screen and (max-width: 574px){
.menu{
  border-width: 20px;
  .menu-panel ul li a {
    font-size: 1.5rem;
  }
}
}
</style>