<template>
    <section class="page-content">
        <v-container>
            <div class="first-row2 text-center">
             <img src="images/success.png" alt="" class="success-logo">
              <p class="green-c status-text">
                  Thank you!
              </p>
              <p class="text-gray status-text2">
                Congratulation Your Transaction is
                completed successfully
              </p>
           </div>
        </v-container>
       <div class="second-row2">
        <v-container>
           <Accordion/>
        </v-container>
       </div>
       <div class="third-row2">
            <v-container>
                <a href="#0" class="oto-btn bg-orange">
                    <img src="images/attachment.png" alt="">
                    <span>
                        Download Receipt
                    </span>
                </a>
                <a href="#0" class="oto-btn bg-gray">
                    <img src="images/receipt.png" alt="">
                    <span>
                        Download Attachment
                    </span>
                </a>
            </v-container>
       </div>
    </section>
</template>

<script>
import Accordion from './Accordion.vue';
export default {
  name: 'SuccessfulPayment',
  props: {
    msg: String
  },
  components:{
      Accordion
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
    .green-c{
        color: #02a154;
    }
    .third-row2 {
        padding-top: 0px;
    }
    .second-row2 {
    padding-top: 0px;
}
</style>
