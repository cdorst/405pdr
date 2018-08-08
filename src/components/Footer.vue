<template>
  <footer class="footer bg-light text-center">
    <div class="container">
      <a class="text-dark pr-3" href="https://facebook.com/405-PDR-901136290077736/">
        <i class="fab fa-facebook-square fa-lg"></i>
      </a>
      <a class="text-dark" href="https://instagram.com/405pdr">
        <i class="fab fa-instagram fa-lg"></i>
      </a>
      <a class="text-dark pl-3" href="https://www.youtube.com/channel/UCp366OzueWxyqWkDHiBatZA">
        <i class="fab fa-youtube-square fa-lg"></i>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  /* Set the fixed height of the footer here */
  height: 60px;
  line-height: 60px; /* Vertically center the text there */
}
</style>
