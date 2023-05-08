<template>
    <div class="main team">
        <h4 class="mb-4 text-h4">Team</h4>
        <v-row class="no-gutters">
            <v-col v-for="(profile, idx) in profiles" :key="idx" class="col-12 col-md-6 col-lg-4">
                <v-img
                    contain
                    :src="profile.img"
                    width="22rem"
                  >
                </v-img>
                <v-card
                    class="mt-2 d-flex align-center"
                    width ="22rem"
                    variant="tonal">
                    <v-card-title class="text-subtitle-1">
                        {{ profile.text }}
                    </v-card-title>
                    <v-btn class="ml-2" variant="text" icon="fab fa-linkedin-in" size="small" href="https://www.linkedin.com/in/kraus-kevin/" target="_blank"></v-btn>
                </v-card>
                <!-- <div class="mt-2 mx-2">
                    {{ profile.text }}
                </div> -->
            </v-col>
        </v-row>
    </div>
  </template>

<script lang="ts">
import { defineComponent } from "vue"
import team_michelle from '@/assets/team_michelle.jpg'
import team_julian from '@/assets/team_julian.jpg'
import team_kevin from '@/assets/team_kevin.jpg'
export default defineComponent({
    data() {
        return {
            profiles: [
                {img: team_michelle, text:'Dr. Michelle Maurer | Research lead', linkedin: 'https://www.linkedin.com/in/dr-mmaurer/'},
                {img: team_julian, text:'Julian Obrecht | DevOps lead', linkedin: 'https://www.linkedin.com/in/julian-obrecht-2a9677114/'},
                {img: team_kevin, text:'Kevin Kraus | AI lead', linkedin: 'https://www.linkedin.com/in/kraus-kevin/'},
            ],

            showLinkedIn: false,

        }
    },
})

</script>

<style>

</style>