<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light fixed-top">
    <router-link class="navbar-brand" to="/">
      <img src="@/assets/logo.svg" width="30" height="30" class="icon d-inline-block align-top" alt="405 PDR logo">
      405 PDR
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarDefault">
      <ul class="navbar-nav mr-auto">
        <router-link class="nav-item" tag="li" active-class="active" to="/">
          <a class="nav-link">Home</a>
        </router-link>
        <router-link class="nav-item" tag="li" active-class="active" to="/services">
          <a class="nav-link">Services</a>
        </router-link>
        <!--<router-link class="nav-item" tag="li" active-class="active" to="/contact">
          <a class="nav-link">Contact</a>
        </router-link>-->
      </ul>
      <span class="navbar-text">
        <a href="tel:+18336524245">
          <i class="fas fa-phone"></i>
          (833) OKC-HAIL
        </a>
      </span>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  watch: {
    $route (to, from) {
      $('.navbar-collapse').collapse('hide')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icon {
  margin-top: 2px;
}
</style>
