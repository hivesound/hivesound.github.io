<template>
    <v-container class="fill-height" fluid>
        <v-container class="space-around">
            <v-responsive class="d-flex align-center justify-center fill-height">
                <h4 class="mb-6 text-h4" >Team</h4>
                <v-row>
                    <v-col v-for="(profile, idx) in profiles" :key="idx" cols="4">
                        <v-img
                            contain
                            :src="profile.img"
                            width="25rem"
                            height="25rem">
                        </v-img>
                        <v-card
                            class="mt-2"
                            width="25rem"
                            variant="tonal">
                            <v-card-title>
                                    {{ profile.text }}
                            </v-card-title>
                        </v-card>
                        <!-- <div class="mt-2 mx-2">
                            {{ profile.text }}
                        </div> -->
                    </v-col>
                </v-row>
            </v-responsive>
        </v-container>
    </v-container>
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
                {img: team_michelle, text:'Dr. Michelle Maurer'},
                {img: team_julian, text:'Julian Obrecht'},
                {img: team_kevin, text:'Kevin Kraus'},
            ]
        }
    },
    methods: {
    }
})

</script>

<style>

</style>