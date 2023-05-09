<template>
  <div class="window-height">
      <q-img
        contain
        src="~assets/HIVESOUND_CI_waves.png"
      />
    <div class="row arrow-icon">
      <div class="col text-center">
        <div class="q-my-xl q-pt-xl">
          <q-btn flat icon="fas fa-chevron-down" size="large" @click="goToSection"></q-btn>
        </div>
      </div>
    </div>
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
