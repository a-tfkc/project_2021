<template>

  <div class="menu">

    <div class="menuLeftSide">
      <div class="menuPoints">HOME</div>
      <div class="menuPoints">PORTFOLIO
        <div class="subPoints">
          <div class="gap"></div>
          <div class="subPointsWrapper">
            <div class="subPoint">FOTO</div>
            <div class="subPoint">VIDEO</div>
          </div>

        </div>
      </div>
    </div>

    <div class="logo">
      <img alt="Logo" src="../../assets/images/logo/logo.png" width="80" height="80">
    </div>

    <div class="menuRightSide">
      <div class="menuPoints">INFO
        <div class="subPoints">
          <div class="gap"></div>
          <div class="subPointsWrapper">
            <div class="subPoint">ABOUT US</div>
            <div class="subPoint">LEISTUNGEN</div>
          </div>
        </div>
      </div>
      <div class="menuPoints">KONTAKT</div>
    </div>

  </div>

</template>

<script>
export default {
  name: "NavBar2",
  methods: {
    fader(x) {
      x.height = "200px"
      x.style.height = "64px";
      x.style.width = "64px";
    },
  }
}
</script>

<style scoped>

.menu {
  width: 100%;
  margin-top: 2%;
  position: absolute;
  display: flex;
  justify-content: center;
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
  opacity: 0.9;
  cursor: pointer;
}

.subPoints {
  visibility: hidden;
  position: absolute;
  align-content: center;
  opacity: 0;
  transition: opacity 0.5s linear 0s;
}

.subPointsWrapper {
  padding: 10px;
  background-color: white;
}

.menuPoints:hover .subPoints {
  visibility: visible;
  opacity: 0.9;
  cursor: default;
}

.subPoint {
  margin: 10px 0;
  cursor: pointer;
  color: black;
}

.subPoint:hover {
  color: saddlebrown;
}

.gap {
  height: 20px;
  cursor: auto;
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

@media screen and (max-width: 900px) {

  .menuPoints {
    font-size: 1.6vw;
  }

}

@media screen and (max-width: 800px) {

  .menuPoints {
    display: none;
  }

  img {
    margin-top: 1vh;
    height: 7vw;
    width: 7vw;
  }

}

</style>