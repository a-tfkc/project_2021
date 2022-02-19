<template>

  <div id="app">
    <NavBar5 class="desktop"></NavBar5>
    <NavBar class="mobile"></NavBar>
    <Slider></Slider>
    <div style="height: 2000px; background-color: #906E74; position: relative;">
    </div>
  </div>

</template>

<script>


import Slider from "./components/slider/Slider";
import NavBar5 from "./components/navbars/NavBar5";
import NavBar from "./components/navbar/NavBar";

export default {
  name: 'App',
  components: {
    NavBar,
    NavBar5,
    Slider,
  }
}

</script>

<style>

/* IMPORT CSS VARIABLES */
@import url(./assets/css_variables.css);

</style>
