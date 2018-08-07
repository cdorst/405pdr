<template>
  <div>
    <HomeBanner></HomeBanner>
    <div class="container">
      <div class="row">
        <div class="col-md">
          <div class="card bg-light mb-3 shadow">
            <img class="card-img-top" src="../assets/home/card0.jpg">
            <div class="card-body">
              <h5 class="card-title">Paintless Dent Repair</h5>
              <router-link to="services#paintless-dent-repair" class="card-link">
                Learn more <i class="fal fa-angle-right"></i>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md">
          <div class="card bg-light mb-3 shadow">
            <img class="card-img-top" src="../assets/home/card1.jpg">
            <div class="card-body">
              <h5 class="card-title">Claim Assistance</h5>
              <router-link to="services#claim-assistance" class="card-link">
                Learn more <i class="fal fa-angle-right"></i>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md">
          <div class="card bg-light mb-3 shadow">
            <img class="card-img-top" src="../assets/home/card2.jpg">
            <div class="card-body">
              <h5 class="card-title">Mobile Services</h5>
              <router-link to="services#mobile-services" class="card-link">
                Learn more <i class="fal fa-angle-right"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="card bg-dark mb-4 mt-3 shadow text-white">
            <img class="card-img" src="../assets/home/storm.jpeg" alt="Card image">
            <div class="card-img-overlay text-center">
              <h4>Hail Catastrophe Management</h4>
              <a href="mailto:mike@405pdr.com" class="btn btn-danger">Email mike@405pdr.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeBanner from '@/components/HomeBanner'
export default {
  name: 'HomePage',
  components: {
    HomeBanner
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
