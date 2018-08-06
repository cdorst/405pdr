<template>
  <main role="main" class="page">
    <router-view/>
  </main>
</template>

<script>
export default {
  name: 'Page'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page {
  padding-top: 60px;
}
</style>
