<template>
    <q-select v-model="locale" :options="localeOptions" label="select language" dense borderless emit-value map-options
        options-dense style="min-width: 150px">
    </q-select>
</template>
  
<script>
import { useI18n } from 'vue-i18n'
import { useQuasar } from 'quasar';

export default {
    setup() {
        const $q = useQuasar();
        const { locale } = useI18n({ useScope: 'global' })

        const localeOptions = [
                { value: 'en-US', label: '🇬🇧 English' },
                { value: 'de', label: '🇩🇪 Deutsch' }
            ]

        const browserLocaleCode = $q.lang.getLocale()

        if(localeOptions.some(localeOption => localeOption.value == browserLocaleCode)) {
            locale.value = browserLocaleCode
        }

        return {
            locale,
            localeOptions
        }
    }
}
</script>