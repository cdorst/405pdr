<template>
  <div class="jumbotron jumbotron-fluid">
    <div class="container text-center">
      <img src="../assets/home/logo.svg" class="img-fluid logo" alt="405 PDR Hail Dings Dents">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeBanner'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jumbotron {
  background-image: url("../assets/home/banner.png");
  background-size: cover;
}
.logo {
  max-width: 580px;
}
</style>
