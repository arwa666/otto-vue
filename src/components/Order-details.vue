<template>
<v-app>
   
            <v-expansion-panel  >
        <v-expansion-panel-content
            
            
        >
            <template v-slot:header>
                    <div class="text-left">
                           <img src="images/order-description.png" alt="" class="order__img">
                       </div>
                      <div class="order-desc">
                        <p class="text-left bold black-20 ">
                            Order Description:
                           </p>
                      </div>
            </template>
            <v-card>
                     <div class="first">
                            <ul class="list-unstyled">
                                <li>
                                    Order No
                                </li>
                                <li>
                                    1234567
                                </li>
                            </ul>
                            <ul class="list-unstyled">
                                <li>
                                    Order ipsum
                                </li>
                                <li>
                                    <p>
                                        Lorem ipsum dolor
                                    </p>
                                    <p>
                                        Lorem ipsum dolor
                                    </p>
                                </li>
                            </ul>
                            <ul class="list-unstyled">
                                <li>
                                    Lorem ipsum
                                </li>
                                <li>
                                    Lorem ipsum dolor
                                </li>
                            </ul>
                            <ul class="list-unstyled">
                                <li>
                                    Lorem ipsum
                                </li>
                                <li>
                                    Lorem ipsum dolor
                                </li>
                            </ul>
                        </div>
                        <div class="second">
                            <ul class="list-unstyled">
                                <li class="black-20 bold">
                                    <i class="far fa-calendar-alt" ></i> <span>Date</span>
                                </li>
                                <li class="black-20 bold">
                                    <i class="far fa-id-card" ></i> 
                                    <span>
                                        Internal ID
                                    </span>
                                </li>
                            </ul>
                            <ul class="list-unstyled">
                                <li class="padding-left">
                                    2021-04-06
                                </li>
                                <li  class="padding-left">
                                   123456789098765432
                                </li>
                            </ul>
                        </div>
            </v-card>
        </v-expansion-panel-content>
      
     </v-expansion-panel>
  
</v-app>

</template>

<script>
import 'vuetify/dist/vuetify.min.css';
export default {
  name: 'OrderDetails',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.v-expansion-panel__header__icon{
    margin-inline-start: auto;
}
.v-expansion-panel__body .v-card{
    padding: 24px;
}
.theme--light.v-sheet{
    background-color:transparent;
}
.v-expansion-panel__body>.v-card{
    box-shadow: none;
}
.v-expansion-panel{
    box-shadow: none;
}

.v-expansion-panel__header>:not(.v-expansion-panel__header__icon){
    flex:unset;
}
.v-expansion-panel__header{
    height:60px;
    padding-top:7px;
    padding-bottom: 7px;
}
.order-desc p:first-child{
    margin-bottom:0px;
}
.theme--light.v-expansion-panel .v-expansion-panel__container{
    border-radius: 22px;
    margin-bottom: 25px;
    border:none;
}
.order-desc p{
    margin:0px;
}
.order__img{
    width: 40px;
    margin-inline-end: 22px;
}
.theme--light.v-expansion-panel .v-expansion-panel__container{
    background-color: transparent;
}
</style>
