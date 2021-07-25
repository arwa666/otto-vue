import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import router from './Router';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

import SuccessfulPayment from './components/SuccessfulPayment.vue';
import FailedPayment from './components/FailedPayment.vue';
import PaymentRequest from './components/PaymentRequest';

Vue.config.productionTip = false
Vue.use(Vuetify,{iconfont: 'fa4'});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
export default {
 
  components: {
    SuccessfulPayment,
    FailedPayment,
    // SuccessfulPayment
    PaymentRequest,
    
  //  Accordion
  }
}