<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      There is nothing interesting to see yet &#128035;
    </p>
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello {
  text-align: center;
}

</style>
