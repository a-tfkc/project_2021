<template>
  <div class="wholeThing" style="position: relative;" ref="wholeThing">
    <div class="logo">
      <img src="../../assets/images/logo/logo.png"  height="128" width="128" />
      <div>
        <button class="hamburger hamburger--squeeze" type="button" ref="hamburger"  v-on:click="toggleMenuIcon()">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
        </button>
      </div>
    </div>
    <div class="menu" ref="menu">
      <div class="header"></div>
      <div class="main">
        <div style="width: 5px"></div>
        <div class="wrapper" ref="main">
          <a href="#" class="animate"><div class="point"><span class="material-icons">home</span>HOME</div></a>
          <a class="animate"><div class="point"><span class="material-icons">arrow_right</span>PORTFOLIO</div></a>
          <a href="#" class="animate"><div class="point sub"><span class="material-icons" style="visibility: hidden">photo_camera</span><span class="material-icons">photo_camera</span>FOTO</div></a>
          <a href="#" class="animate"><div class="point sub"><span class="material-icons" style="visibility: hidden">videocam</span><span class="material-icons">videocam</span>VIDEO</div></a>
          <a class="animate"><div class="point"><span class="material-icons">arrow_right</span>INFO</div></a>
          <a href="#" class="animate"><div class="point sub"><span class="material-icons" style="visibility: hidden">handyman</span><span class="material-icons">handyman</span>LEISTUNGEN</div></a>
          <a href="#" class="animate"><div class="point sub"><span class="material-icons" style="visibility: hidden">groups</span><span class="material-icons">groups</span>ABOUT</div></a>
          <a href="#" class="animate"><div class="point"><span class="material-icons">email</span>KONTAKT</div></a>
        </div>
        <div style="width: 5px"></div>
      </div>
      <div class="footer">
        <a href="#"><font-awesome-icon icon="fa-brands fa-facebook" class="fa-bounce" size="1x" style="--fa-animation-timing: ease-in-out;" inverse /></a>
        <a href="#"><font-awesome-icon icon="fa-brands fa-instagram" size="1x" inverse fade/></a>
        <a href="#"><font-awesome-icon icon="fa-brands fa-youtube" class="fa-shake" size="1x" inverse /></a>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: "NavBar7.vue",
  mounted() {
    /* CALCULATE & SET INITIAL VH VALUE */
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    /* ADD LISTENER FOR VH VALUE IN CASE OF WINDOW RESIZING */
    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  },
  methods: {
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    async toggleMenuIcon() {
      let ham = this.$refs["hamburger"]
      let menu = this.$refs["menu"]
      let all_animate = document.getElementsByClassName('animate')
      let wholeThing = this.$refs["wholeThing"]
      if (ham.classList.contains("is-active")) {
        ham.classList.remove("is-active")
        ham.classList.remove("open")
        menu.style.opacity = "0"
        let i = 0
        while (all_animate[i]) {
          all_animate[i].classList.remove('move')
          i++;
        }
        wholeThing.style.position = "relative"
        // TODO: find a more elegant solution!!!
        //await this.sleep(1000);
        menu.style.zIndex = "-1"
      } else {
        wholeThing.style.position = "revert"
        ham.classList.add("is-active")
        ham.classList.add("open")
        menu.style.zIndex = "1000"
        menu.style.opacity = "1"
        let i = 0
        while (all_animate[i]) {
          all_animate[i].classList.add('move')
          i++;
        }
      }
    },
  }
}
</script>

<style scoped>

.logo {
  position: absolute;
  height: 15vh;
  height: calc(var(--vh, 1vh) * 15);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10000;
  background-color: transparent;
}

.menu {
  font-family: 'Glory', sans-serif;
  letter-spacing: 0.1em;
  display: block;
  position: absolute;
  background-color: black;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  margin: auto;
  opacity: 0;
  transition: opacity 1s;
}

img {
  height: 10vh;
  height: calc(var(--vh, 1vh) * 10);
  width: 10vh;
  width: calc(var(--vh, 1vh) * 10);
  margin-left: 30px;
}

.header {
  height: 15vh;
  height: calc(var(--vh, 1vh) * 15);
  background-color: #56373c;
}

.main {
  height: 70vh;
  height: calc(var(--vh, 1vh) * 70);
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  background-color: #9f807d;
  /* overflow: scroll;  use this when there are too many menu points */
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.main a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  padding: 0 0px;
  margin: 2px 0;
}

.point {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4vh;
}

.wrapper a:nth-child(1) {
  animation-delay: 0.1s;
}
.wrapper a:nth-child(2) {
  animation-delay: 0.2s;
}
.wrapper a:nth-child(3) {
  animation-delay: 0.3s;
}
.wrapper a:nth-child(4) {
  animation-delay: 0.4s;
}
.wrapper a:nth-child(5) {
  animation-delay: 0.5s;
}
.wrapper a:nth-child(6) {
  animation-delay: 0.6s;
}
.wrapper a:nth-child(7) {
  animation-delay: 0.7s;
}
.wrapper a:nth-child(8) {
  animation-delay: 0.8s;
}


.move {
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: fadeInUp;
}

@-webkit-keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    -ms-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
}

.fadeInUp {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}

.material-icons {
  font-size: 4vh;
  color: white;
  padding-right: 10px;
}

.footer {
  width: 100%;
  height: 15vh;
  height: calc(var(--vh, 1vh) * 15);
  background-color: #56373c;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer a {
  font-size: 4vh;
  padding: 0 20px;
}

/* HAMBURGER ICON ONLY */

.hamburger {
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  height: 25px;
  background-color: transparent;
  border: 0;
  margin-right: 20px;
}

.hamburger:hover {
  opacity: 0.7;
}

.hamburger.is-active:hover {
  opacity: 0.7;
}

.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner::before,
.hamburger.is-active .hamburger-inner::after {
  background-color: white;
}

.hamburger-box {
  width: 25px;
  height: 5px;
  display: inline-block;
  position: relative;
}

.hamburger-inner {
  display: block;
}

.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
  width: 25px;
  height: 1.5px;
  background-color: white;

  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
}

.hamburger-inner::before, .hamburger-inner::after {
  content: "";
  display: block;
}

.hamburger-inner::before {
  top: -8px;
}

.hamburger-inner::after {
  bottom: -8px;
}

/*
   * Squeeze
   */
.hamburger--squeeze .hamburger-inner {
  transition-duration: 0.075s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.hamburger--squeeze .hamburger-inner::before {
  transition: top 0.075s 0.12s ease, opacity 0.075s ease;
}

.hamburger--squeeze .hamburger-inner::after {
  transition: bottom 0.075s 0.12s ease, transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.hamburger--squeeze.is-active .hamburger-inner {
  transform: rotate(45deg);
  transition-delay: 0.12s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}

.hamburger--squeeze.is-active .hamburger-inner::before {
  top: 0;
  opacity: 0;
  transition: top 0.075s ease, opacity 0.075s 0.12s ease;
}

.hamburger--squeeze.is-active .hamburger-inner::after {
  bottom: 0;
  transform: rotate(-90deg);
  transition: bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
}


@media screen and (min-width: 800px) {

  .wholeThing {
    display: none;
  }

}

</style>