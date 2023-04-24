/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@fortawesome/fontawesome-free/css/all.css'
import 'vuetify/styles'
import { aliases, fa } from 'vuetify/iconsets/fa'

// Composables
import { createVuetify, ThemeDefinition} from 'vuetify'

const hivesoundThemeDark: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#1E1E1E',
    surface: '#B79216',
    primary: '#B79216',
    secondary: '#FFE200',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
}

const hivesoundThemeLight = {

}
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'hivesoundThemeDark',
    themes: {
     hivesoundThemeDark
    }
  },
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    }
  },
})
