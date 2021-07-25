import Vue from 'vue'
import Router from 'vue-router'

import PaymentRequest from '../components/PaymentRequest.vue';
import FailedPayment from '../components/FailedPayment.vue';
import SuccessfulPayment from '../components/SuccessfulPayment.vue'

Vue.use(Router)

const router = new Router ({
    routes: [
        {
            path:'/',
            component: PaymentRequest,
            name:'payment_request'
        },
        {
            path:'/failed_payment',
            component: FailedPayment,
            name:'failed_payment'
        },
        {
            path:'/successful_payment',
            component: SuccessfulPayment,
            name:'successful_payment'  
        },

    ],
    mode: 'history'
})

export default router