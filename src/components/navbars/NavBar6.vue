<template>

  <div>

    <div class="hamburgerWrapper">
      <div class="hamburger" ref="hamburger" v-on:click="toggle()">
        <span></span>
      </div>
    </div>

    <div id="menu" ref="menu">

      <nav class="main-nav">
        <ul>
          <li class="mainPoint"><a href="#">HOME</a></li>
          <li class="mainPoint">
            <a href="#" v-on:click="dropDown1()">PORTFOLIO
              <span class="material-icons" ref="more1" style="display: block">expand_more</span>
              <span class="material-icons" ref="less1" style="display: none">expand_less</span>
            </a>
            <ul class="submenu" ref="dropDown1">
              <li><a href="#">FOTO</a></li>
              <li><a href="#">VIDEO</a></li>
            </ul>
          </li>
          <li class="mainPoint">
            <a href="#" v-on:click="dropDown2()">INFO
              <span class="material-icons" ref="more2" style="display: block">expand_more</span>
              <span class="material-icons" ref="less2" style="display: none">expand_less</span>
            </a>
            <ul class="submenu" ref="dropDown2">
              <li><a href="#">LEISTUNGEN</a></li>
              <li><a href="#">ABOUT</a></li>
            </ul>
          </li>
          <li class="mainPoint"><a href="#">KONTAKT</a></li>

        </ul>
      </nav>

    </div>

    <div class="menu-footer">
      <nav class="footer-nav">
        <ul>
          <li><a href="#"><img src="https://camo.githubusercontent.com/8f245234577766478eaf3ee72b0615e99bb9ef3eaa56e1c37f75692811181d5c/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f66616365626f6f6b2e737667" height="20px" width="20px"></a></li>
          <li><a href="#"><img src="https://camo.githubusercontent.com/c9dacf0f25a1489fdbc6c0d2b41cda58b77fa210a13a886d6f99e027adfbd358/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f696e7374616772616d2e737667" height="20px" width="20px"></a></li>
          <li><a href="#"><img src="https://camo.githubusercontent.com/d54e97f5edde790381f7e62b217410df33e066a0dc8f692f2fc6b25fc1768b0c/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f796f75747562652e737667" height="20px" width="20px"></a></li>
        </ul>
      </nav>
    </div>

  </div>

</template>

<script>
export default {
  name: "NavBar6",
  methods: {
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    async toggle() {
      let toggleMenu = this.$refs["hamburger"];
      let menu = this.$refs["menu"]
      let dropDown1 = this.$refs["dropDown1"]
      let dropDown2 = this.$refs["dropDown2"]
      if (toggleMenu.classList.contains("active")) {
        toggleMenu.classList.remove("active");
        menu.classList.remove("open");
      } else {
        toggleMenu.classList.add("active");
        menu.classList.add("open");
      }
      await this.sleep(650);
      dropDown1.classList.remove("active")
      dropDown2.classList.remove("active")
    },
    dropDown1() {
      let dropDown1 = this.$refs["dropDown1"]
      let more1 = this.$refs["more1"]
      let less1 = this.$refs["less1"]
      console.log(more1)
      console.log(less1)
      if (dropDown1.classList.contains("active")) {
        dropDown1.classList.remove("active")
        more1.setAttribute("style", "display: block;")
        less1.setAttribute("style", "display: none;")
      } else {
        dropDown1.classList.add("active")
        more1.setAttribute("style", "display: none;")
        less1.setAttribute("style", "display: block;")
      }
    },
    dropDown2() {
      let more2 = this.$refs["more2"]
      let less2 = this.$refs["less2"]
      let dropDown2 = this.$refs["dropDown2"]
      if (dropDown2.classList.contains("active")) {
        dropDown2.classList.remove("active")
        more2.setAttribute("style", "display: block;")
        less2.setAttribute("style", "display: none;")
      } else {
        dropDown2.classList.add("active")
        more2.setAttribute("style", "display: none;")
        less2.setAttribute("style", "display: block;")
      }
    }
  }
}
</script>

<style scoped>

/* HAMBURGER STYLE */

.hamburgerWrapper {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.hamburger {
  padding: 10px;
  height: 40px;
  width: 40px;
  cursor: pointer;
  z-index: 1110;
}

.hamburger span {
  background-color: white;
  display: block;
  position: relative;
  left: calc(50% - 13px);
  top: calc(50% - 1px);
  height: 2px;
  width: 26px;
  content: "";
  transform-origin: 50% 50%;
  transition: background-color 0.2s ease-in-out, top 0.2s 0.2s ease-out, transform 0.2s linear;
}

.hamburger span:before, .hamburger span:after {
  background-color: white;
  display: block;
  content: "";
  position: absolute;
  height: 2px;
  width: 26px;
  transform-origin: 50% 50%;
  transition: background-color 0.2s ease-in-out, top 0.2s 0.2s ease-out, transform 0.2s linear;
}

.hamburger span:before {
  top: 7px;
}

.hamburger span:after {
  top: -7px;
}

.hamburger.active span {
  background-color: transparent;
  transition: background 0.2s ease-out;
}

.hamburger.active span:before, .hamburger.active span:after {
  transition: top 0.2s ease-out, transform 0.2s 0.2s ease-out;
}

.hamburger.active span:before {
  top: 0;
  transform: rotate3d(0, 0, 1, -45deg);
}

.hamburger.active span:after {
  top: 0;
  transform: rotate3d(0, 0, 1, 45deg);
}

/* MENU STYLE */

#menu {
  background: #533637;
  position: absolute;
  overflow-y: scroll;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;

  transition: all 0.7s ease-in-out;
  visibility: hidden;
  opacity: 0;
  z-index: 1100;
}

#menu.open {
  opacity: 0.99;
  visibility: visible;
}

#menu.open li:nth-child(1) {
  animation-delay: 0.1s;
}
#menu.open li:nth-child(2) {
  animation-delay: 0.2s;
}
#menu.open li:nth-child(3) {
  animation-delay: 0.3s;
}
#menu.open li:nth-child(4) {
  animation-delay: 0.4s;
}
#menu.open li:nth-child(5) {
  animation-delay: 0.5s;
}

#menu.open .mainPoint {
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

#menu ul:hover a {
  opacity: 0.5;
}

#menu ul a {
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  transition: opacity 0.3s ease-in-out;
}

#menu ul a:hover {
  opacity: 1;
}

#menu .main-nav {
  position: relative;
  top: 30%;
}

#menu .main-nav ul a {
  display: flex;
  align-items: center;
}

#menu .main-nav ul a span {
  padding-bottom: 1px;
}

#menu .main-nav ul {
  width: min-content;
  list-style: none;
  margin: auto;
  padding: 0;
}

#menu .main-nav a {
  width: min-content;
  margin: auto;
  color: #DDC1C6;
  display: block;
  font-size: 2vh;
  font-weight: bold;
  padding: 1em 1em;
  text-decoration: none;
}

/* SUBMENU STYLE */

.submenu {
  visibility: hidden;
  opacity: 0;
  max-height: 0;
  background-color: #906E74;
  color: #DDC1C6;
}

.active {

  max-height: max-content;
  visibility: visible;
  opacity: 1;
  animation-duration: 0.5s;
  animation-fill-mode: none;
  animation-name: fadeIn;
}


@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

/* FOOTER STYLE */

.menu-footer {
  padding-bottom: 10px;
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
}

.menu-footer ul {
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu-footer img {
  padding: 20px;
}

</style>