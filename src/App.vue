<template>
  <div id="app">
    <NavBar1></NavBar1>
    <Message msg="Welcome!"/>
  </div>
</template>

<script>
import Message from "./components/Message";
import NavBar1 from "./components/navbars/NavBar1";

export default {
  name: 'App',
  components: {
    NavBar1,
    Message
  }
}
</script>

<style>

</style>
