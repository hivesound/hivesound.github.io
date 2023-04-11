<template>
  <v-app>
    <hivesound-nav-bar />
    <hivesound-view />
    <hivesound-footer />
  </v-app>
</template>

<script lang="ts">
  import HivesoundNavBar from './HivesoundNavBar.vue'
  import HivesoundView from './View.vue'
  import HivesoundFooter from './HivesoundFooter.vue'
  import { defineComponent } from 'vue'

  export default defineComponent({
    components: {
      HivesoundNavBar,
      HivesoundView,
      HivesoundFooter
    }
  })
</script>
