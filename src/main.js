

import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'

import router from './router/index'
import AOS from 'aos'
import 'aos/dist/aos.css'


Vue.config.productionTip = false;

new Vue({
  router: router,
  created() {
    AOS.init({
      duration: 1200
    })
  },
  render: h => h(App)
}).$mount('#app')
