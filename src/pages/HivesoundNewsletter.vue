<template>
  <hivesound-newsletter-banner-text />
  <br>
  <hivesound-newsletter-form />
  <br>
  <hivesound-newsletter-project-explanation />
</template>

<script lang="ts">
import HivesoundNewsletterForm from 'src/components/newsletter/HivesoundNewsletterForm.vue'
import HivesoundNewsletterBannerText from 'src/components/newsletter/HivesoundNewsletterBannerText.vue'
import HivesoundNewsletterProjectExplanation from 'src/components/newsletter/HivesoundNewsletterProjectExplanation.vue'
import { defineComponent } from "vue";

export default defineComponent({
  components: { HivesoundNewsletterForm, HivesoundNewsletterBannerText, HivesoundNewsletterProjectExplanation },
  name: 'IndexPage'
})
</script>