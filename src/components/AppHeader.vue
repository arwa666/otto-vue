<template>
    <v-toolbar class="header">
        <v-container class=" header__div">
            <div class="logo">
                <router-link to = "/">
                    <v-img src="images/logo.png" alt="logo img" class="logo__img">
                    </v-img>
                </router-link>
            </div>
            <div class="language-toggler">
                <a href="#0">بالعربي</a>
            </div>
        </v-container>
    </v-toolbar>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
    .v-toolbar__content{
        height:unset!important;
        display:flex;
        justify-content:center;
    }
   
</style>
