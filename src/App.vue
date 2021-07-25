<template>
  <div id="app">
    <AppHeader/>
    <!-- <Accordion/> -->
    <!-- <router-view/> -->
    <!-- <PaymentRequest/> -->
    <!-- <SuccessfulPayment/> -->
    <FailedPayment/>
    <AppFooter/>
  </div>
</template>

<script>
// import SuccessfulPayment from './components/SuccessfulPayment.vue'
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import FailedPayment from './components/FailedPayment.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    FailedPayment
  }
}
</script>

<style>

</style>
