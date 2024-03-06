<template>
  <div class="window-height">
      <q-img
        contain
        src="~assets/HIVESOUND_CI_transparent_banner.png"
      />
      <div class="text-center">
        <a :href="$t('components.newsletter.cleverreach.form_url')" target="_blank" class="button-link">{{ $t('components.newsletter.button_label') }}</a>
      </div>
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

<style>
.button-link {
    display: inline-block;
    padding: 0.5em 1em;
    background-color: #FAA916; /* Example orange color */
    color: black;
    text-align: center;
    text-decoration: none;
    border-radius: 10px; /* Adjust for rounded corners */
    font-weight: bold;
    font-size: 1.5em; /* Adjust as needed */
    border: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Example shadow */
    transition: background-color 0.3s, box-shadow 0.3s; /* Smooth transition for hover effect */
}

.button-link:hover {
    background-color: #e69500; /* Darker orange on hover */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); /* Larger shadow on hover */
    cursor: pointer;
}
</style>