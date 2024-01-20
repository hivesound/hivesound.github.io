<template>
  <div class="">
    <div class="q-mx-xl q-pb-md imprint">
        <div class="overflow-auto">
            <h3>{{ $t('pages.imprint.main_title') }}</h3>
            <div>
                <div>
                <h4 class="q-my-xl">{{ $t('pages.imprint.legal_information_title') }}</h4>
                </div>
                <div>
                    <p>
                        <span>
                            <b>
                                Kevin Kraus
                            </b>
                        </span>
                        <br />
                        <span>
                            Münsterstraße 18
                        </span>
                        <br />
                        <span>
                            Hamburg, Germany
                        </span>
                        <br />
                        <span className="">
                            <a href="mailto:mail@hivesound.de"
                                style="text-decoration: none; color: inherit;">
                                Email: mail@hivesound.de
                            </a>
                        </span>
                    </p>
                </div>
            </div>
            <div class="q-mt-xl">
                <h4>{{ $t('pages.imprint.disclaimer_of_liability_title') }}</h4>

                <h5>{{ $t('pages.imprint.liability_for_links_title') }}</h5>
                <p>{{ $t('pages.imprint.liability_for_links_text') }}</p>

                <h5>{{ $t('pages.imprint.liability_for_content_title') }}</h5>
                <p>{{ $t('pages.imprint.liability_for_content_text') }}</p>

                <h5>{{ $t('pages.imprint.copyright_title') }}</h5>
                <p>{{ $t('pages.imprint.copyright_text') }}</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({

})
</script>

<style>

</style>