import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import Vant from 'vant'
// import 'vant/lib/index.css'
import '@/utils/vant-ui'
import ArticleItem from '@/components/ArticleItem'
// Vue.use(Vant)
Vue.component('ArticleItem', ArticleItem)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
