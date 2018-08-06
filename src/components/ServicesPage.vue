<template>
  <div id="services-page-top">
    <ServicesBanner></ServicesBanner>
    <div class="container-fluid page" id="services-page-container">
      <div class="row flex-xl-nowrap">
        <div class="col-12 col-xl-10">
          <div data-spy="scroll" data-target="#services-nav" data-offset="0">
            <h1 class="display-4" id="paintless-dent-repair" ref="paintless-dent-repair">Paintless Dent Repair</h1>
            <p>
              When access permits, most dents are repaired with specialty hand tools. These tools come in many different sizes and each has a unique shape and design for various panels on the vehicle. Although two tools may appear to be very different they all share the same function, the ability to apply pressure and "push" the dent. Depending on the size and severity it could take hundreds of precise "pushes" to repair a single dent. This method reverses the damage and results in the cleanest repair possible. An unskilled or unexperienced technician can possibly crack the paint by using too much force. An unskilled technician will also apply pressure to the wrong part of the dent or use too much force resulting in a repair that appears to have a rough or wavy texture. A successful PDR repair will not have an abnormal texture, the clear coat should match the surrounding area.
            </p>
            <!-- images -->
            <h2 id="glue-pulling" ref="glue-pulling">Glue Pulling</h2>
            <p>
              Glue pulling refers to using a high temperature glue and a special plastic "tab" to pull on the dent. The high-temp glue is specially made for automotive finishes and comes in various formulas for temperature and humidity of the working environment. Glue pulling is not recommended for older vehicles or refinished panels, cold temperatures are not recommended as well. In some situations access to the underside of the dent may be impossible and a tool cannot be used. By gluing a plastic tab to the metal, a skilled technician can manipulate the metal by pulling on it with special tools. Once the pull has been made the glue can be safely released with Isopropyl alcohol leaving the finish unharmed. This technique combined with blending will result in a clean repair where there is little or no tool access.
            </p>
            <!-- images -->
            <h2 id="blending" ref="blending">Blending</h2>
            <p>
              Blending refers to using a specialty hammer to manipulate the metal. The hammer is typically small and light weight with a highly polished head that will resist marking the clear coat. With the hammer a highly skilled technician can carefully make precision strikes that can relieve pressure, knockdown or re-contour the panel. This method is usually combined with glue pulling and/or using a tool to finish out the detail work when completing a dent. Where there is no access, small shallow dents can be repaired completely using just the hammer.
            </p>
            <h2 id="texture-correction" ref="texture-correction">Texture Correction</h2>
            <p>
              Texture correction refers to repairing or blending the clear coat thickness and texture. On very large dents it is necessary to lightly wet sand the clear coat to match the texture after it has been stressed. After wet sanding the area it will then be buffed and polished to remove scuff marks. This method can also be applied to poor prior PDR, neglected finish before performing PDR and removing scuff marks from knockdown or hammer. Buffing and polishing is also necessary to remove any marks or scratches before and after performing PDR for door ding and minor collision.
            </p>
            <h2 id="corrosion-protection" ref="corrosion-protection">Corrosion Protection</h2>
            <p>
              In the event that an access hole is stressed and the paint is compromised it is necessary to apply corrosion protection. Over the years and in our travels we rarely see a PDR technician that actually applies corrosion protection. If you look at your insurance estimate they always pay for corrosion protection, they don't want to be responsible if your car starts to rust after it has been worked on. Unfortunately the rust doesn't start to take hold until months or years after the repair has been performed and by that time it is too late. Below are photos of rust starting to take over years after someone performed poor PDR practices. Wherever a tool makes contact with a panels' access point, it should always be treated with corrosion protection. This is especially important for those who drive in areas where salt is applied to the road.
            </p>
            <!-- images -->
            <h2 id="push-to-paint" ref="push-to-paint">Push to Paint</h2>
            <p>
              In the event that the paint has been damaged from being stretched or from sharp impact, PDR may still be the preferred method to repair the dent. After the PDR has been performed the damaged area can then either be primed and painted or may still require a minimal amount of body filler before being refinished. This method is commonly referred to as "Push to Paint".
            </p>
            <h2 id="drilling-policy" ref="drilling-policy">Drilling Policy</h2>
            <p>
              We have a strict no drilling policy for hail damage. Up until the last decade it was quite popular for PDR technicians to drill holes into the underside of body panels. Apparently they didn't realize that metal is there for structural reasons. We will never drill to gain access to a panel on any hail damaged vehicle. In rare circumstances for door ding or minor collision damage it may be necessary to drill for access to successfully complete the repair. In these rare situations all options are presented to the vehicle owner and drilling is at their discretion.
            </p>
            <h1 class="display-4" id="claim-assistance" ref="claim-assistance">Claim Assistance</h1>
            <h1 class="display-4" id="mobile-services" ref="mobile-services">Mobile Services</h1>
          </div>
        </div>
        <div class="d-none d-xl-block col-xl-2 side-nav">
          <ul class="section-nav">
            <li class="nav-entry">
              <a @click="goto('paintless-dent-repair')">
                Paintless Dent Repair
              </a>
              <ul>
                <li class="nav-entry">
                  <a @click="goto('glue-pulling')">
                    Glue Pulling
                  </a>
                </li>
                <li class="nav-entry">
                  <a @click="goto('blending')">
                    Blending
                  </a>
                </li>
                <li class="nav-entry">
                  <a @click="goto('texture-correction')">
                    Texture Correction
                  </a>
                </li>
                <li class="nav-entry">
                  <a @click="goto('corrosion-protection')">
                    Corrosion Protection
                  </a>
                </li>
                <li class="nav-entry">
                  <a @click="goto('push-to-paint')">
                    Push to Paint
                  </a>
                </li>
                <li class="nav-entry">
                  <a @click="goto('drilling-policy')">
                    Drilling Policy
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-entry">
              <a @click="goto('claim-assistance')">
                Claim Assistance
              </a>
            </li>
            <li class="nav-entry">
              <a @click="goto('mobile-services')">
                Mobile Services
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServicesBanner from '@/components/ServicesBanner'
export default {
  name: 'ServicesPage',
  components: {
    ServicesBanner
  },
  methods: {
    goto (ref) {
      const navbar = document.getElementById('services-page-top').offsetTop
      const banner = document.getElementById('services-page-container').offsetTop
      const content = this.$refs[ref]
      console.log(content.tagName)
      const additional = content.tagName === 'H1' ? 40 : 80
      console.log(additional)
      window.scrollTo(0, navbar + banner + content.offsetTop + additional)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  padding-top: 4rem;
  padding-bottom: .5rem;
}
.nav-entry {
  display: block
}
.nav-entry a {
  display: block;
  padding: .125rem 1.5rem;
  color: #99979c
}
.nav-entry a:hover {
  color: #007bff;
  text-decoration: none
}
.page {
  padding-top: 8rem;
}
.side-nav {
  -ms-flex-order: 2;
  order: 2;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  font-size: .875rem
}
@supports ((position:-webkit-sticky) or (position:sticky)) {
  .side-nav {
    position: -webkit-sticky;
    position: sticky;
    top: 4rem;
    height: calc(100vh - 4rem);
    overflow-y: auto
  }
}
.section-nav {
  padding-left: 0;
  border-left: 1px solid #eee
}
.section-nav ul {
  padding-left: 1rem
}
.section-nav ul ul {
  display: none
}
</style>
