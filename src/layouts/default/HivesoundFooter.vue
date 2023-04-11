<template>
    <v-footer absolute>
        <!-- <div>
            <v-btn>
                <a href="https://www.linkedin.com/company/hivesound/" target="_blank">
                    <v-icon icon="mdi-linkedin"/>
                </a>
            </v-btn>
        </div> -->
        <div>
            <router-link 
                style="text-decoration: none; color: inherit;"
                to="/imprint">
                Imprint
            </router-link>
        </div>
        <div>
            @HIVESOUND {{ new Date().getFullYear() }}
        </div>
    </v-footer>
  </template>

  <script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({

    })
  </script>
