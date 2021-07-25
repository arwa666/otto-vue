<template>
<v-app>
   
            <v-expansion-panel  :value="0">
        <v-expansion-panel-content
            
            
        >
            <template v-slot:header>
                    <div class="text-left">
                           <v-img src="images/order-description.png" alt="" class="order__img">
                           </v-img>
                       </div>
                      <div class="order-desc">
                        <p class="text-left bold black-20 ">
                            Order Description:
                           </p>
                      </div>
            </template>
            <v-card>
                     <div class="first">

                            <v-list two-line>
                            <template>


                                <v-list-tile-content>
                                    <v-list-tile-title>Order No</v-list-tile-title>
                                    <v-list-tile-sub-title >  1234567</v-list-tile-sub-title>
                                </v-list-tile-content>
                            
                            </template>
                            </v-list>

                            
                            <v-list two-line>
                            <template>
                                <v-list-tile-content>
                                    <v-list-tile-title> Order ipsum</v-list-tile-title>
                                    <v-list-tile-sub-title > 
                                        <p>
                                            Lorem ipsum dolor
                                        </p>
                                        <p>
                                            Lorem ipsum dolor
                                        </p></v-list-tile-sub-title>
                                </v-list-tile-content>
                            </template>
                            </v-list>
                            <!-- <ul class="list-unstyled">
                                <li>
                                    Lorem ipsum
                                </li>
                                <li>
                                    Lorem ipsum dolor
                                </li>
                            </ul> -->

                            <v-list two-line>
                            <template>
                                <v-list-tile-content>
                                    <v-list-tile-title>  Lorem ipsum</v-list-tile-title>
                                    <v-list-tile-sub-title > 
                                         Lorem ipsum dolor
                                    </v-list-tile-sub-title>
                                </v-list-tile-content>
                            </template>
                            </v-list>
                            <v-list two-line>
                            <template>
                                <v-list-tile-content>
                                    <v-list-tile-title>  Lorem ipsum</v-list-tile-title>
                                    <v-list-tile-sub-title > 
                                         Lorem ipsum dolor
                                    </v-list-tile-sub-title>
                                </v-list-tile-content>
                            </template>
                            </v-list>
                        </div>
                        <div class="second">
                            <!-- <ul class="list-unstyled">
                                <li class="black-20 bold">
                                    <i class="far fa-calendar-alt" ></i> <span>Date</span>
                                </li>
                                <li class="black-20 bold">
                                    <i class="far fa-id-card" ></i> 
                                    <span>
                                        Internal ID
                                    </span>
                                </li>
                            </ul> -->
                            <v-list>
                                <template>
                                    <v-list-tile-content>
                                        <v-list-tile-title  class="black-20 bold">  
                                            <i class="far fa-calendar-alt" ></i> <span>Date</span>
                                        </v-list-tile-title>
                                        <v-list-tile-sub-title   class="black-20 bold"> 
                                            <i class="far fa-id-card" ></i> 
                                            <span>
                                                Internal ID
                                            </span>
                                        </v-list-tile-sub-title>
                                    </v-list-tile-content>
                                </template>
                            </v-list>
                            <v-list>
                                <template>
                                    <v-list-tile-content>
                                        <v-list-tile-title class="padding-left">  
                                             2021-04-06
                                        </v-list-tile-title>
                                        <v-list-tile-sub-title class="padding-left" > 
                                            123456789098765432
                                        </v-list-tile-sub-title>
                                    </v-list-tile-content>
                                </template>
                            </v-list>
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
.first .v-list__tile__content{
    display: flex;
    flex-direction: row;
}
.second .v-list__tile__content{
    display: flex;
    flex-direction: row;
}
.first .v-list__tile__title{
    width:50%;
}
.second .v-list__tile__title{
    width:50%;
}
.first .v-list__tile__sub-title{
    width:50%;
    color: rgba(0,0,0,.87)!important;
}
.second .v-list__tile__sub-title{
    width:50%;
    color: rgba(0,0,0,.87)!important;
}
.first .theme--light.v-list{
    background-color: transparent;
}
.second .theme--light.v-list{
    background-color: transparent;
}
.first .v-list {
    padding:0px;
}
.first .v-list__tile__sub-title p{
    margin-bottom:5px;
}
.first .v-list__tile__sub-title p{
    margin-bottom:5px;
}
</style>
