<template>
  <div class="">
    <div class="q-mx-xl q-pb-md">
        <div class="overflow-auto">          
          <hivesound-newsletter-banner-text/>
          <br>
          <hivesound-newsletter-form/>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import HivesoundNewsletterForm from 'src/components/newsletter/HivesoundNewsletterForm.vue'
import HivesoundNewsletterBannerText from 'src/components/newsletter/HivesoundNewsletterBannerText.vue'
import { defineComponent } from "vue";

export default defineComponent({
  components: { HivesoundNewsletterForm, HivesoundNewsletterBannerText },
  name: 'IndexPage'  
})
</script>