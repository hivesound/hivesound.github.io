<template>
    <v-container class="fill-height">
      <v-responsive class="d-flex align-center text-center fill-height">
        <v-row>
            <v-col v-for="(image, idx) in images" :key="idx" cols="4">
                <v-img
                    contain
                    :src="image">
                </v-img>
            </v-col>
        </v-row>
      </v-responsive>
    </v-container>
  </template>

<script>
export default {
    data () {
        return {
            images: {
                1: '@/assets/team_michelle.png',
                2: '@/assets/team_julian.jpg',
                3: '@/assets/team_kevin.jpg'
            }
        }
    }
}
</script>

<style>

</style>