<template>
  <q-layout class="q-pa-xl" view="lHh Lpr lFf">
    <q-header class="header q-pa-md" style="display: flex; justify-content: space-between; align-items: center;">
      <router-link to="/">
        <q-img
          class=""
          src="~assets/HIVESOUND_CI_logotype_yellow_transparent.png"
          width="12rem"
          >
        </q-img>
      </router-link>
      <language-swicher/>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="footer">
      <div class="row q-pa-xl q-ml-none">
        <div class="col q-mr-md">
            <q-img src="~assets/HIVESOUND_CI_logotype_yellow_transparent.png" style="max-width: 15rem"></q-img>
            <p class="q-mt-sm footnote">@HIVESOUND {{ new Date().getFullYear() }}</p>
        </div>
        <div class="col imprint q-mr-md">
          <div class="">
            <p style="font-weight: bold; font-size:medium">{{ $t('layout.footer.legal') }}</p>
            <router-link
              style="text-decoration: none; color: inherit;"
              to="/imprint">
              {{ $t('layout.footer.imprint') }}
            </router-link>
          </div>
        </div>
        <div class="col imprint">
          <p style="font-weight: bold; font-size:medium">{{ $t('layout.footer.follow_us') }}</p>
          <a class="imprint" href="https://www.linkedin.com/company/hivesound/" target="_blank">
              <span class="q-pr-sm"><q-icon name="fab fa-linkedin-in"/></span>
              <span>LinkedIn</span>
          </a>
          <br>
          <br>
          <router-link
              style="text-decoration: none; color: inherit;"
              to="/newsletter">
              Newsletter
          </router-link>
          <br>
          <br>
          <router-link
              style="text-decoration: none; color: inherit;"
              to="/webinar">
              Webinar
          </router-link>
        </div>
        <div class="col imprint q-mr-md">
          <div class="">
            <p style="font-weight: bold; font-size:medium">{{ $t('layout.footer.media') }}</p>
            <router-link
              style="text-decoration: none; color: inherit;"
              to="/press-kit">
              {{ $t('layout.footer.presskit') }}
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
import LanguageSwicher from 'src/components/LanguageSwitcher.vue'

export default defineComponent({
  name: 'MainLayout',

  components: { LanguageSwicher },

  setup () {

    const $q = useQuasar()
    $q.dark.set(true)

    return {
    }
  }
})
</script>
