<template>
  <div>
    <q-img contain :src="image.img" style="max-width: 15rem;float: left; margin-right: 20px; margin-bottom: 20px;">
    </q-img>
    <br><br>
    <p>{{ $t("components.newsletter.project.tab2.text") }}</p>
  </div>
</template>

<script lang="ts">
// TODO: Imports work fine, but still get syntax error highlighting
import { defineComponent } from "vue"
import product_image from "../../assets/hivesound_product_image_logo_centered.png"

export default defineComponent({
  data() {
    return {
      image: { img: product_image }
    }
  },
})

</script>