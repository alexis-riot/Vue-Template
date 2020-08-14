import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
    rtl: false,
    theme: {
        options: {
            customProperties: true,
            cspNonce: 'dQuWErd6G2sEp9gf'
        },
        themes: {
            light: {
                primary: '#b22ccb',
                secondary: '#424242',
                accent: '#3bafbd',
                error: '#FF5252',
                info: '#2196F3',
                success: '#6ec5a0',
                warning: '#FFC107'
            }
        }
    }
})
