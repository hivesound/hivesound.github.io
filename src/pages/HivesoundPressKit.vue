<template>
  <div class="">
    <div class="q-mx-xl q-pb-md">
        <div class="overflow-auto">
            <h1>{{ $t('pages.presskit.title') }}</h1>
            <div>
                <div>
                    <h2 class="q-my-xl">Logo</h2>
                </div>
                <div>
                    <p>
                        {{ $t('pages.presskit.brand_guidelines') }}
                    </p>
                    <h3>{{ $t('pages.presskit.logo_transparent_background_title') }}</h3>
                    <q-img
                        contain
                        src="~assets/HIVESOUND_CI_waves.png"
                    />
                    <h3>{{ $t('pages.presskit.logo_dark_background_title') }}</h3>
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