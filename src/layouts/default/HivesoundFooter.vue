<template>
    <div class="d-flex footer">
        <v-row class="space-around">
            <v-col class="justify-center">
                <v-img src="@/assets/HIVESOUND_CI_yellow.png" width="40%"></v-img>
                <p class="mt-2 footnote">  @HIVESOUND {{ new Date().getFullYear() }}</p>
            </v-col>
            <v-col >
                <h3>Legal</h3>
                <router-link
                style="text-decoration: none; color: inherit;"
                to="/imprint">
                Imprint
            </router-link>
            </v-col>
            <v-col>
                <h3>Follow us</h3>
                <a class="nostyle" href="https://www.linkedin.com/company/hivesound/" target="_blank">
                    <span class="mr-2"><v-icon icon="fab fa-linkedin-in" size="x-small"/></span>
                    <span>LinkedIn</span>
                </a>
            </v-col>
        </v-row>
    </div>
  </template>

  <script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({

    })
  </script>
