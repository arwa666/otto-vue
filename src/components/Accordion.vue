<template>

            <v-expansion-panel :value="0" >
        <v-expansion-panel-content
           
            class="green-bg"
        >
            <template v-slot:header>
                     <div class="text-left">
                           <img src="images/knet.png" alt="" class="v-expansion-img">
                       </div>
                      <div class="order-desc">
                        <p class="text-left ">
                            Payment Details  :
                           </p>
                           <p class="text-left">
                            Knet
                           </p>
                      </div>
            </template>
            <v-card>
             Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </v-card>
        </v-expansion-panel-content>
         <v-expansion-panel-content
            
            class="red-bg"
        >
            <template v-slot:header>
                     <div class="text-left">
                             <img src="images/order-description.png" alt="" class="v-expansion-img">
                         </div>
                        <div class="order-desc">
                          <p class="text-left ">
                             Order description  :
                             </p>
                             <p class="text-left">
                              25368974
                             </p>
                        </div>
            </template>
            <v-card>
             Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </v-card>
        </v-expansion-panel-content>
     </v-expansion-panel>


</template>

<script>
import 'vuetify/dist/vuetify.min.css';
export default {
  name: 'Accordion',
  props: {
    msg: String
  },
  data() {
 return {
   panel: [0]
 }
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
.v-expansion-img{
    width: 40px;
    margin-inline-end: 22px;
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
.v-expansion-panel {
    margin-bottom: 0px;
}
</style>
