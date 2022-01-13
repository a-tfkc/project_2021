<template>
  <div id="app">
    <NavBar1></NavBar1>
    <Slider1></Slider1>
  </div>
</template>

<script>

import Slider1 from "./components/slider/Slider1";
import NavBar1 from "./components/navbars/NavBar1";

export default {
  name: 'App',
  components: {
    NavBar1,
    Slider1,
  }
}
</script>

<style>

/* IMPORT BUNDLED CSS */
@import url(./assets/bundled_style.css);

</style>
