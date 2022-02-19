<template>

  <div>
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
        <div class="menuPoints">ABOUT</div>
        <div class="menuPoints">LEISTUNGEN</div>
        <div class="menuPoints">KONTAKT</div>
      </div>

    </div>

    <div class="mobileMenu">
      <div class="logo">
        <img alt="Logo" src="../../assets/images/logo/logo.png" width="80" height="80">
      </div>
      <div class="burger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
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

.menu {
  width: 100%;
  margin-top: 2%;
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 0 10%;
  z-index: 1;
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
  font-size: 1.1vw;
  letter-spacing: 0.1em;
  color: white;
}

.menuPoints:hover {
  opacity: 0.75;
  cursor: pointer;
}

.mobileMenu {
  display: none;
  width: 100%;
  margin-top: 2vw;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 4;
}

.burger {
  margin-right: 2vw;
}

.burger div {
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 5px;
  transition: all 0.3s ease;
}

/* Responsive Stuff starting here */

@media screen and (max-width: 1700px) {

  .menuPoints {
    font-size: 1.2vw;
  }

  img {
    height: 5.5vw;
    width: 5.5vw;
  }

}

@media screen and (max-width: 1200px) {

  .menuPoints {
    font-size: 1.3vw;
  }

}

@media screen and (max-width: 768px) {

  .menu {
    display: none;
  }

  .mobileMenu {
    display: flex;
  }

  img {
    height: 10vw;
    width: 10vw;
    margin-left: 5vw;
    padding: 10px 0;
  }

}

</style>