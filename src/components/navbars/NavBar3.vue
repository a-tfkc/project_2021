<template>

  <div class="top">
    <div class="test"></div>

    <div class="menu">

      <div class="menuLeftSide">
        <div class="menuPoints">HOME</div>
        <div class="menuPoints">FOTO</div>
        <div class="menuPoints">VIDEO</div>
      </div>

      <div class="logo">
        <img alt="Logo" src="../../assets/images/logo/logo.png" width="80" height="80">
      </div>

      <div class="menuRightSide">
        <div class="menuPoints">INFO</div>
        <div class="menuPoints">KONTAKT</div>
      </div>

    </div>

  </div>

</template>

<script>
export default {
  name: "NavBar2"
}
</script>

<style scoped>

.top {

}

.test {
  width: 100%;
  margin-top: 2%;
  height: 5vw;
  position: absolute;
  background-color: white;
  z-index: 1;
  opacity: 0.50;
}

.menu {
  width: 100%;
  margin-top: 2%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 10%;
  z-index: 2;
}

.logo {
  display: inherit;
}

img {
  height: 5vw;
  width: 5vw;
}

.menuLeftSide {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 0 10%;
}

.menuRightSide {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 0 10%;
}

.menuPoints {
  font-family: 'Zilla Slab', serif;
  font-size: 1vw;
  color: white;
}

/* Responsive Stuff starting here */

@media screen and (max-width: 1700px) {

  .menuPoints {
    font-size: 1.2vw;
  }

}

</style>