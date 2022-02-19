<template>
  <div class="slider">
    <img class="sliderImages" src="../../assets/images/horizontal/beatriz-perez-moya-unsplash.jpg" alt="ImageTitle">
    <img class="sliderImages" src="../../assets/images/horizontal/hannah-busing-unsplash.jpg" alt="ImageTitle">
    <img class="sliderImages" src="../../assets/images/horizontal/foto-pettine-unsplash.jpg" alt="ImageTitle">
    <img class="sliderImages" src="../../assets/images/horizontal/sandy-millar-unsplash.jpg" alt="ImageTitle">
    <img class="sliderImages" src="../../assets/images/horizontal/ulyana-tim-unsplash.jpg" alt="ImageTitle">
  </div>
</template>

<script>

export default {
  name: 'Slider1',
  mounted() {

    /* EDIT SLIDER SETTINGS HERE */
    /* eslint-env jquery */
    $(document).ready(() => {
      $('.slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        easing: 'ease-in-out',
        pauseOnFocus: 'false',
        pauseOnHover: 'false',
        speed: 5000,
        touchThreshold: 20
      });
    });

    /* CALCULATE & SET INITIAL VH VALUE */
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    /* ADD LISTENER FOR VH VALUE IN CASE OF WINDOW RESIZING */
    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

  },
}

</script>

<style>

.slick-list {
  height: 100vh; /* Fallback for browsers */
  height: calc(var(--vh, 1vh) * 100);
}

</style>

<style scoped>

.sliderImages {
  height: 100vh; /* Fallback for browsers */
  height: calc(var(--vh, 1vh) * 100);
  object-fit: cover;
}

</style>