<template>
  <div class="text-xs-center">
    <v-dialog
     class="terms"
     width="500"
     v-model="dialog"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          flat
          v-on="on"
          style=
          "color: #be2428;
            font-weight: bold;"
        >
          Terms & Conditions
        </v-btn>
      </template>

      <v-card class="terms__card">
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Privacy Policy
        </v-card-title>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'TermsConditions',
  props: {
    msg: String
  },
  data() {
 return {
   dialog:false
 }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.terms .v-card{
    background:#fff;
}
.terms{
    display: flex;
    align-items: center;
    justify-content: center;
}
.terms .v-btn{
    padding:0px;
}
.terms__card {
    background-color: #fff!important;
}
</style>
