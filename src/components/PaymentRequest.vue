<template>
<section class="page-content">
        <v-container>
            <div class=" first-row0">
                <ul class="list-unstyled">
                    <li class="text-gray">
                        From:
                    </li>
                    <li class="text-gray">
                        To:
                    </li>
                </ul>
                <ul  class="list-unstyled">
                    <li>
                        Emirates
                    </li>
                    <li>
                        Saif Taher
                    </li>
                </ul>
                <ul  class="list-unstyled">
                    <li>www.emirates.com</li>
                    <li>+093 1234 1234</li>
                </ul>
           </div>
        </v-container>
       <div class="second-row2 request">
        <v-container>
           <order-Details/>   
        </v-container>
       </div>
       <div class="third-row">
            <v-container>
                <a href="#0" class="download-link"><i class="fas fa-download" ></i><span class="black-20 bold">Download attachment</span></a>
                <div class="bill">
                    <ul class="list-unstyled">
                        <li class="total">Total Bill</li>
                        <li>
                            <span class="amount orange-bg orange-c">12.000</span>
                            <span class="currency orange-c">KWD</span>
                        </li>
                    </ul>
                </div>
                <form action="" class="pay">
                    <label for="">
                        Pay Now
                    </label>
                    <div class="input__div">
                        <input type="text" placeholder="13.000 KWD">
                        
                           <a href="#0" class="close-btn">
                            <i class="fas fa-times-circle" ></i>
                           </a>
                      
                    </div>
                </form>
            </v-container>
                <PaymentMethod/>
                <v-container >
                <div class="paying-section">
            
                
                
                    <div class=" text-center">
                        <q class="text-gray">
                          + 1.500 kwd “ fee will be applied  
                        </q>
                           <a href="#0" class="pay-btn">Pay (13.500 KED)</a>
                     <div class="terms text-gray">
                         By clicking Pay button you are accepting our <span>Terms & Conditions</span>
                     </div>
                    </div>
                  </div>
                </v-container>
           
       </div>
    </section>
</template>

<script>
import OrderDetails from './Order-details.vue';
import PaymentMethod from './PaymentMethod.vue';
export default {
  name: 'AppFooter',
  props: {
    msg: String
  },
   components: {
       OrderDetails,
       PaymentMethod,
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.theme--light.application{
    background-color: transparent;
}
.application--wrap{
    min-height:auto!important;
}
.request .v-expansion-panel__header {
    padding-inline-start:0px;
}
.request .v-card{
    padding-inline-start:0px;
}
.request .v-expansion-panel{
    margin-bottom: 0px;
}
.request .v-card{
    padding-bottom: 0px;
}
</style>
