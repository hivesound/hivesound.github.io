<template>
  <div class="main h-screen">
      <v-img
        contain
        height="400"
        width="90vh"
        src="@/assets/HIVESOUND_CI_waves.png"
      />
    <v-row class="arrow-icon">
      <v-col cols="12">
        <v-btn variant="text" icon="fas fa-chevron-down" size="x-large" @click="goToSection"></v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({

  methods: {
    goToSection() {
        this.$nextTick(() => {
          const el = document.getElementById('impact')
          if (el) {
            const rect = el.getBoundingClientRect();
            window.scroll({
              top: rect.top + window.pageYOffset - 130,
              behavior: "smooth",
            });
          }
        }
      )
    }
  }

})

</script>
