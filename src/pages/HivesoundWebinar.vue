<template>
  <h1 class="primary-color" style="margin-bottom: 20px;">{{ $t('components.webinar.only-in-german') }}</h1>
  <br>
  <hivesound-webinar-form />
  <br>
  <br>
  <hivesound-webinar-project-explanation />
  <br>
  <hivesound-webinar-form />
</template>

<script lang="ts">
import HivesoundWebinarForm from 'src/components/webinar/HivesoundWebinarForm.vue'
import HivesoundWebinarProjectExplanation from 'src/components/webinar/HivesoundWebinarProjectExplanation.vue'
import { defineComponent } from "vue";

export default defineComponent({
  components: { HivesoundWebinarForm, HivesoundWebinarProjectExplanation },
  name: 'IndexPage'
})
</script>