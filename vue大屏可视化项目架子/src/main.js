import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

//全局导入方式-this.echarts
// import echarts from 'echarts';
// Vue.prototype.echarts=echarts

new Vue({
  render: h => h(App)
}).$mount('#app')
