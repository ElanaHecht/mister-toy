import { createApp } from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import './styles/styles.css'

const app = createApp(App)

// app.config.globalProperties.$filters = {
//    currencyUSD(amount) {
//      // look implementation inside car-preview.vue
//      return '$' + amount
//    },
//  }

app.use(router)
app.use(store)

app.mount('#app')
