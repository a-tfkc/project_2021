<template>

  <div id="app">
    <NavBar1></NavBar1>
    <Slider1></Slider1>
  </div>

</template>

<script>

import NavBar1 from "./components/navbars/NavBar1";
import Slider1 from "./components/sliders/Slider1";

export default {
  name: 'App',
  components: {
    NavBar1,
    Slider1,
  }
}

</script>

<style>

/* IMPORT CSS VARIABLES */
@import url(./assets/css_variables.css);

</style>
