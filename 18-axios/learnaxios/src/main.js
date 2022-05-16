import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios";
import {request} from "./network/request";
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }).then(res => {
//   console.log(res);
// })
request({
  url:'/home/multidata'
}).then(res =>{
  console.log(res);
}).catch(err =>{
  // console.log(err);
})
