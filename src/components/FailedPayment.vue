<template>
    <section class="page-content">
        <v-container>
            <div class="first-row2">
             <img src="images/failed.png" alt="" class="success-logo">
              <p class="red-c text-center status-text">
                  Failed
              </p>
           </div>
        </v-container>
       <div class="second-row2">
        <v-container>
            <Accordion/>
        </v-container>
       </div>
       <div class="third-row2 third-row3">
            <v-container>
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
import Accordion from './Accordion.vue'
export default {
  name: 'FailedPayment',
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
    .red-c{
        color: #e94637;
    }
    .third-row3 {
    padding-top: 0px;
}
.second-row2 {
    padding-top: 0px;
}
</style>
