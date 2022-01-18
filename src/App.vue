<template>

  <div id="app">
    <NavBar2></NavBar2>
    <Slider1></Slider1>
  </div>

</template>

<script>

import NavBar2 from "./components/navbars/NavBar2";
import Slider1 from "./components/sliders/Slider1";

export default {
  name: 'App',
  components: {
    NavBar2,
    Slider1,
  }
}

</script>

<style>

/* IMPORT CSS VARIABLES */
@import url(./assets/css_variables.css);

</style>
