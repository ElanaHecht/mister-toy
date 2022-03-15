import { createApp } from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import { focusDirective } from './directives'
import './styles/styles.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import VueGoogleMaps from '@fawmi/vue-google-maps'

const app = createApp(App)

app.config.globalProperties.$filters = {
   currencyUSD(amount) {
     return '$' + amount
   },
   timeFormat(time) {
     return new Date(time).toDateString()
   },
 }

 app.directive('focus', focusDirective)

app.use(router)
app.use(store)

app.use(ElementPlus)
// app.use(VueGoogleMaps, {
//     load: {
//         key: '',
//     },
// })

app.mount('#app')
