<template>
  <v-app>
    <hivesound-nav-bar />
    <hivesound-view />
  </v-app>
</template>

<script lang="ts">
  import HivesoundNavBar from './HivesoundNavBar.vue'
  import HivesoundView from './View.vue'
  import { defineComponent } from 'vue'

  export default defineComponent({
    components: {
      HivesoundNavBar,
      HivesoundView,
    }
  })
</script>
