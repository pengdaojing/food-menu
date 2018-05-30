// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import VeeValidate from 'vee-validate'
import { Message, Dialog, Rate } from 'element-ui'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(VueRouter)
Vue.use(VeeValidate)
Vue.component(Rate.name, Rate)
Vue.component(Message.name, Message)
Vue.component(Dialog.name, Dialog)
Vue.prototype.$message = Message
// Vue.prototype.$msgbox = MessageBox
const router = new VueRouter({
  routes
})
new Vue({
  router
}).$mount('#app')
