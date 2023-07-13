<template>
  <div class="">
    <div class="q-mx-xl q-pb-md">
        <div class="overflow-auto">
            <h1>HIVESOUND Brand Identity Guide</h1>
            <div>
                <div>
                    <h2 class="q-my-xl">Logo</h2>
                </div>
                <div>
                    <p>
                        When mentioning HIVESOUND, please utilize our logo mark without any modifications. Our branding should not be used for your own open or closed source projects. Refer to our company as HIVESOUND only, in uppercase letters, and without any tagline below it.
                        The logo should be on a dark ground and should never be used on a light ground.
                    </p>
                    <h3>with transparent background</h3>
                    <q-img
                        contain
                        src="~assets/HIVESOUND_CI_waves.png"
                    />
                    <h3>with dark background</h3>
                    <q-img
                        contain
                        src="~assets/HIVESOUND_CI_waves_dark_background.png"
                    />
                </div>
            </div>
        </div>
    </div>
  </div>

  <hivesound-team/>
</template>

<script lang="ts">
import HivesoundTeam from 'src/components/HivesoundTeam.vue'
import { defineComponent } from "vue";

export default defineComponent({
  components: { HivesoundTeam },
  name: 'IndexPage'
})
</script>