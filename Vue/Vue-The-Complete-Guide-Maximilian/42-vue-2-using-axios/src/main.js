import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vue-2-using-axios-default-rtdb.firebaseio.com'
// axios.defaults.headers.common['Content-type'] = 'application/json'
// axios.defaults.headers.common['Authorization'] = 'Bearer Your_token'
// axios.defaults.headers.get['Accepts'] = 'Application/json'

const reqInterceptor =  axios.interceptors.request.use(config => {
  console.log(config)
  return config
})

const resInterceptor = axios.interceptors.response.use( res => {
  console.log(res)
  return res
})

axios.interceptors.request.eject(reqInterceptor)
axios.interceptors.response.eject(resInterceptor)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
