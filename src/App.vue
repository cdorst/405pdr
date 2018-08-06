<template>
  <div id="app">
    <Navbar></Navbar>
    <Page></Page>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Page from '@/components/Page'
export default {
  name: 'App',
  components: {
    Footer,
    Navbar,
    Page
  }
}
</script>

<style scoped>
</style>
