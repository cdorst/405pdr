<template>
  <div class="jumbotron jumbotron-fluid">
    <div class="container text-center">
      <img src="../assets/logo.svg" class="img-fluid logo" alt="405 PDR Hail Dings Dents">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesBanner'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jumbotron {
  background-image: url("../assets/services/banner.jpg");
  background-size: cover;
  max-height: 333px;
}
.logo {
  max-width: 400px;
}
</style>
