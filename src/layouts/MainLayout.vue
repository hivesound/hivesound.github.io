<template>
  <q-layout class="q-pa-xl" view="lHh Lpr lFf">
    <q-header class="header q-pa-md">
      <router-link to="/hivesound/">
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
      <div class="row q-pa-xl q-gutter-xl q-ml-none">
        <div class="col">
            <q-img src="~assets/HIVESOUND_CI_yellow.png" style="min-width: 7rem; max-width: 15rem"></q-img>
            <p class="q-mt-sm footnote">  @HIVESOUND {{ new Date().getFullYear() }}</p>
        </div>
        <div class="col imprint">
          <div class="">
            <h4>Legal</h4>
            <router-link
              style="text-decoration: none; color: inherit;"
              to="/imprint">
              Imprint
            </router-link>
          </div>
        </div>
        <div class="col imprint">
          <h4>Follow us</h4>
          <a class="imprint" href="https://www.linkedin.com/company/hivesound/" target="_blank">
              <span class="q-pr-sm"><q-icon name="fab fa-linkedin-in"/></span>
              <span>LinkedIn</span>
          </a>
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
