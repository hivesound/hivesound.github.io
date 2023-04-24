<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <!-- TODO: Remove logo and add a short "Mission" -->
      <v-img
        contain
        height="400"
        src="@/assets/HIVESOUND_CI_waves.png"
      />
      <!-- TODO: Chevon needs to be at the bottom -> not possible with current layout by vuetify -->
    <v-row class="chevron">
      <v-col cols="12">
        <v-icon icon="fas fa-chevron-down" size="x-large"></v-icon>
      </v-col>
    </v-row>
    </v-responsive>
  </v-container>

</template>

<script lang="ts" setup>
</script>
