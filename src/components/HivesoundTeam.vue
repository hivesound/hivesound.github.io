<template>
  <div class="q-my-xl">
      <h2 class="q-my-md">Team</h2>
      <div class="row justify-center">
        <div v-for="(profile, idx) in profiles" :key="idx" class="col-12 col-md-6 col-lg-4 q-mb-md">
          <q-img
              contain
              :src="profile.img"
              style="max-width: 22rem"
            >
          </q-img>
          <q-card
            flat
            class="q-mt-sm"
            style="max-width:22rem"
            >
            <q-card-section class="text-subtitle-1">
                {{ profile.text }}
                <q-btn class="" flat icon="fab fa-linkedin-in" size="small" :href="profile.linkedin" target="_blank"></q-btn>
            </q-card-section>
          </q-card>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
// TODO: Imports work fine, but still get syntax error highlighting
import { defineComponent } from "vue"
import team_michelle from "../assets/team_michelle.jpg"
import team_julian from "../assets/team_julian.jpg";
import team_kevin from "../assets/team_kevin.jpg";

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