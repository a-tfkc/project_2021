<template>

  <nav style="position: absolute; z-index: 1; width: 100%">
    <div class="logo">
      <!-- TODO: logo should fit screen-size!!! -->
      <img alt="Logo" src="../../assets/images/logo/logo.png" width="45" height="45">
    </div>
    <ul class="nav-links">
      <!-- TODO: menu items should fit screen-size!!! -->
      <li><a href="#">Home</a></li>
      <li><a href="#">Work</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <div class="burger" v-on:click="navSlide(); show = !show">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
  </nav>

</template>

<script>
export default {
  name: "NavBar1",
  data() {
    return {
      show: true
    }
  },
  methods: {
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    async navSlide () {
      // TODO: clean/comment this method

      console.log(this.show);

      let burger = document.querySelector('.burger');
      let nav = document.querySelector('.nav-links');
      let navLinks = document.querySelectorAll('.nav-links li');

      // TODO: need to overthink this...maybe find another solution
      if (this.show) {
        nav.classList.toggle('nav-active');
      } else {
        nav.animate([
          // keyframes
          { transform: 'translateX(0%)' },
          { transform: 'translateX(100%)' }
        ], {
          // timing options
          duration: 500,
          iterations: 1
        });
        await this.sleep(480);
        nav.classList.toggle('nav-active');
      }

      // Menu items animation
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
        }
      })

      // Burger animation
      burger.classList.toggle('toggle');
    }
  }
}

</script>

<style scoped>

/* TODO: clean the whole css stuff T_T */

nav {
  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: var(--theme-color);
  font-family: 'Glory', sans-serif;
  padding-bottom: 20px;
  padding-top: 20px;
}

.logo {
  width: 5%;
}

.logo img {
  vertical-align: middle;
  height: auto;
  width: 100%;
}

.nav-links {
  display: flex;
  justify-content: space-around;
  width: 40%;
}

.nav-links li {
  list-style: none;
}

.nav-links a {
  color: white;
  text-decoration: none;
  letter-spacing: 2px;
  font-weight: bold;
  font-size: large;
}

.burger {
  display: none;
}

.burger div {
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 5px;
  transition: all 0.3s ease;
}

/* Responsive Stuff starting here */

@media screen and (max-width: 1400px) {

  .logo {
    width: 6%;
  }
}

@media screen and (max-width: 1024px) {

  .logo {
    width: 8%;
  }

  .nav-links {
    width: 60%;
  }
}

@media screen and (max-width: 768px) {

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: var(--theme-color);
    font-family: 'Glory', sans-serif;
  }

  .nav-links {
    background-color: black;
    position: absolute;
    right: 0;
    height: 100vh;
    top: 0vh;
    display: none;
    flex-direction: column;
    justify-content: center;
    margin-top: 0;
    align-items: center;
    width: 100%;
    opacity: 0;
    z-index: 1000;
  }

  .nav-links li {
    margin-top: 5vh;
    margin-bottom: 5vh;
    opacity: 0;
  }

  .burger {
    padding-right: 5%;
    display: block;
    cursor: pointer;
    z-index: 2000;
  }

  .logo {
    z-index: 1000;
    width: 10%;
    padding-left: 5%;
  }

  .logo img {

  }

  .nav-deactive {
    animation: navMenuFadeOut 0.5s ease backwards 0.25s;
  }

  .nav-active {
    animation: navMenuFadeIn 0.5s ease forwards 0.25s;
    display: flex;
  }

  .toggle .line1 {
    transform: rotate(-45deg) translate(-5px,6px);
  }

  .toggle .line2 {
    opacity: 0;
  }

  .toggle .line3 {
    transform: rotate(45deg) translate(-5px,-6px);
  }

}

/* TODO: clean-up breakpoint stuff */

@media screen and (max-width: 650px) {

  .logo {
    width: 12%;
  }

}

@media screen and (max-width: 500px) {

  .logo {
    width: 15%;
  }

}

</style>

<style>
@keyframes navLinkFade {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}


@keyframes navMenuFadeIn {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 0.95;
    transform: translateX(0%);
  }
}

@keyframes navMenuFadeOut {
  from {
    opacity: 0.95;
    transform: translateX(0%);
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
}

</style>