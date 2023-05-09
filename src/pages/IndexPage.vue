<template>
  <hero-banner/>
  <hivesound-impact/>
  <hivesound-team/>
  <hivesound-partner/>
</template>

<script>
import HeroBanner from 'src/components/HeroBanner.vue'
import HivesoundImpact from 'src/components/HivesoundImpact.vue'
import HivesoundPartner from 'src/components/HivesoundPartner.vue'
import HivesoundTeam from 'src/components/HivesoundTeam.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { HeroBanner, HivesoundImpact, HivesoundTeam, HivesoundPartner },
  name: 'IndexPage'
})
</script>
