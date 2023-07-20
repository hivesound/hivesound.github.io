<template>
  <q-layout class="q-pa-xl" view="lHh Lpr lFf">
    <q-header class="header q-pa-md">
      <router-link to="/">
        <q-img
          class=""
          src="~assets/HIVESOUND_CI_yellow.png"
          width="12rem"
          >
        </q-img>
      </router-link>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="footer">
      <div class="row q-pa-xl q-ml-none">
        <div class="col q-mr-md">
            <q-img src="~assets/HIVESOUND_CI_yellow.png" style="max-width: 15rem"></q-img>
            <p class="q-mt-sm footnote">@HIVESOUND {{ new Date().getFullYear() }}</p>
        </div>
        <div class="col imprint q-mr-md">
          <div class="">
            <p style="font-weight: bold; font-size:medium">Legal</p>
            <router-link
              style="text-decoration: none; color: inherit;"
              to="/imprint">
              Imprint
            </router-link>
          </div>
        </div>
        <div class="col imprint">
          <p style="font-weight: bold; font-size:medium">Follow us</p>
          <a class="imprint" href="https://www.linkedin.com/company/hivesound/" target="_blank">
              <span class="q-pr-sm"><q-icon name="fab fa-linkedin-in"/></span>
              <span>LinkedIn</span>
          </a>
        </div>
        <div class="col imprint q-mr-md">
          <div class="">
            <p style="font-weight: bold; font-size:medium">Media</p>
            <router-link
              style="text-decoration: none; color: inherit;"
              to="/press-kit">
              Press Kit
            </router-link>
          </div>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'MainLayout',

  components: {
  },

  setup () {

    const $q = useQuasar()
    $q.dark.set(true)

    return {
    }
  }
})
</script>
