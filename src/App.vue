<template>
  <div id="app">
    <AppHeader/>
    <!-- <Accordion/> -->
    <PaymentRequest/>
    <!-- <OrderDetails/> -->
    <!-- <SuccessfulPayment/> -->
    <!-- <FailedPayment/> -->
    <AppFooter/>
  </div>
</template>

<script>
// import Accordion from './components/Accordion.vue'
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
// import SuccessfulPayment from './components/SuccessfulPayment.vue';
// import FailedPayment from './components/FailedPayment.vue'
import PaymentRequest from './components/PaymentRequest.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    // FailedPayment
    // SuccessfulPayment
    PaymentRequest
  //  Accordion
  }
}
</script>

<style>

</style>
