<template>
    <header>
        <v-container class=" header__div">
            <div class="logo">
                <router-link to = "/">
                    <img src="images/logo.png" alt="logo img">
                </router-link>
            </div>
            <div class="language-toggler">
                <a href="#0">بالعربي</a>
            </div>
        </v-container>
    </header>
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

</style>
