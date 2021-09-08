<template>
  <div id="app">
    <img alt="Logo" src="./assets/logo.png" width="200" height="200">
    <Message msg="Welcome!"/>
  </div>
</template>

<script>
import Message from "./components/Message";

export default {
  name: 'App',
  components: {
    Message
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
