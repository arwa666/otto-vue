<template>
  <div id="app">
    <AppHeader/>
    <!-- <Accordion/> -->
    <!-- <router-view/> -->
    <!-- <PaymentRequest/> -->
    <!-- <SuccessfulPayment/> -->
    <!-- <FailedPayment/> -->
    <router-view/>
    <AppFooter/>
  </div>
</template>

<script>
// import SuccessfulPayment from './components/SuccessfulPayment.vue'
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
// import FailedPayment from './components/FailedPayment.vue';
import PaymentRequest from './components/PaymentRequest.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
   PaymentRequest
  }
}
</script>

<style>

</style>
