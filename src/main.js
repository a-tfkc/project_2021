import Vue from 'vue'
import App from './App.vue'

// VUE FONT AWESOME STUFF FOR ICONS - START
// https://fontawesome.com/docs/web/use-with/vue/
// https://fontawesome.com/docs/web/use-with/vue/add-icons
// https://fontawesome.com/docs/web/use-with/vue/style
/* import the fontawesome core */
// TODO: clean this up!!!
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons HERE */
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library HERE */
library.add(faFacebook, faInstagram, faYoutube)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

// VUE FONT AWESOME STUFF FOR ICONS - END

Vue.config.productionTip = false

new Vue({
  render: h => h(App),

}).$mount('#app')
