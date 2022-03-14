import { createApp } from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import { focusDirective } from './directives'
import './styles/styles.css'

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

app.mount('#app')
