import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';


import SuccessfulPayment from './components/SuccessfulPayment.vue';
import FailedPayment from './components/FailedPayment.vue';
import PaymentRequest from './components/PaymentRequest';

Vue.config.productionTip = false
Vue.use(Vuetify);
new Vue({
  
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