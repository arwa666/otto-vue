<template>
  <div id="app">
    <AppHeader/>
    <!-- <Accordion/> -->
    <PaymentRequest/>
    <OrderDetails/>
    <AppFooter/>
  </div>
</template>

<script>
// import Accordion from './components/Accordion.vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import PaymentRequest from './components/PaymentRequest.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    PaymentRequest
  //  Accordion
  }
}
</script>

<style>

</style>
