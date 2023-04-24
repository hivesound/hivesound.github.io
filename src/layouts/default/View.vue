<template>
  <v-main>
    <router-view />
    <HivesoundFooter/>
  </v-main>
</template>

<script lang="ts" >
  import { defineComponent } from "vue";
  import HivesoundFooter from './HivesoundFooter.vue'
  export default defineComponent({
  components: { HivesoundFooter },

})
</script>
