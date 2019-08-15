// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

router.push('/goods')
Vue.config.productionTip = false

Vue.directive('rainbow-background', {
  bind (element, binding, vNode) {
    element.style.backgroundColor = '#' + Math.random().toString(16).slice(2, 8)
  }
})

Vue.directive('rainbow-text', {
  bind (element, binding, vNode) {
    element.style.color = '#' + Math.random().toString(16).slice(2, 8)
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
