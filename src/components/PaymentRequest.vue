<template>
<section class="page-content">
        <v-container class="first-row0 ">
            
                <v-list class=" padding-top-30">
                    <template>
                        <v-list-tile-content>
                            <v-list-tile-title  class="text-gray">  
                                           From:
                            </v-list-tile-title>
                            <v-list-tile-sub-title  class="text-gray" > 
                                           To:
                            </v-list-tile-sub-title>
                        </v-list-tile-content>
                    </template>
                </v-list>
                <v-list >
                    <template>
                        <v-list-tile-content>
                            <v-list-tile-title  class="text-gray">  
                                           Emirates
                            </v-list-tile-title>
                            <v-list-tile-sub-title  class="text-gray" > 
                                           Saif Taher
                            </v-list-tile-sub-title>
                        </v-list-tile-content>
                    </template>
                </v-list>
                <v-list >
                    <template>
                        <v-list-tile-content>
                            <v-list-tile-title  class="text-gray">  
                                          www.emirates.com
                            </v-list-tile-title>
                            <v-list-tile-sub-title  class="text-gray" > 
                                          +093 1234 1234
                            </v-list-tile-sub-title>
                        </v-list-tile-content>
                    </template>
                </v-list>
           
        </v-container>
      
        <v-container  class="second-row2 request">
           <order-Details/>   
        </v-container>
      
       
            <v-container  class="third-row">
                <a href="#0" class="download-link"><i class="fas fa-download" ></i><span class="black-20 bold">Download attachment</span></a>

                <v-list class="bill">
                    <template>
                        <v-list-tile-content>
                            <v-list-tile-title  class="total padding-top-6">  
                                          Total Bill
                            </v-list-tile-title>
                            <v-list-tile-sub-title> 
                                        <span class="amount orange-bg orange-c">12.000</span>
                                        <span class="currency orange-c">KWD</span>
                            </v-list-tile-sub-title>
                        </v-list-tile-content>
                    </template>
                </v-list>
                <v-form action="" class="pay">
                    <label for="">
                        Pay Now
                    </label>
                    <v-text-field placeholder="13.000 KWD">
                        <a href="#0" class="close-btn"  slot="append">
                            <i class="fas fa-times-circle"  ></i>
                        </a>
                    </v-text-field>
                </v-form>
            </v-container>
                <PaymentMethod/>
                <v-container  class="paying-section text-center" >
                        <q class="text-gray">
                          + 1.500 kwd “ fee will be applied  
                        </q>
                          
                           <router-link  to="/successful_payment" class="pay-btn">Pay (13.500 KED)</router-link>
                     <div class="terms text-gray">
                         By clicking Pay button you are accepting our 
                         <TermsConditions/>
                     </div>
                </v-container>
           
      
    </section>
</template>

<script>
import OrderDetails from './Order-details.vue';
import PaymentMethod from './PaymentMethod.vue';
import TermsConditions from './TermsConditions.vue';
export default {
  name: 'AppFooter',
  props: {
    msg: String
  },
   components: {
       OrderDetails,
       PaymentMethod,
       TermsConditions
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
    padding-inline-start:0px!important;
}
.request .v-expansion-panel{
    margin-bottom: 0px!important;
}
.request .v-card{
    padding-bottom: 0px!important;
}
.pay .v-input__control{
    border: 1px solid rgb(133,133,133);
    padding:10px;
    border-radius: 10px;
    height: 50px;
}
.pay .theme--light.v-text-field>.v-input__control>.v-input__slot:before {
   display:none;
}
.pay .v-text-field>.v-input__control>.v-input__slot:after{
    display:none;
}
.v-text-field {
    padding-top: 0px;
    margin-top: 0px;
}
.first-row0 .v-list__tile__content {
    display: flex;
    flex-direction: row;
}
.first-row0 .v-list__tile__title{
    width:50%;
}
.first-row0 .v-list__tile__sub-title{
    width:50%;
}
.first-row0 .theme--light.v-list{
    background-color:transparent;
}

.first-row0 .v-list{
    padding:0px;
    margin-bottom: 5px;
}
.padding-top-30{
    padding-top:30px;
}
.bill .v-list__tile__content {

    display:flex;
    flex-direction: row;
}
.bill.theme--light.v-list{
      background-color:transparent;
}
.bill .v-list__tile__title{
    width:fit-content;
    overflow:visible
}
.padding-top-6{
    padding-top:6px;
}
</style>
