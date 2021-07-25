<template>
    <v-footer>
      <v-container> 
        <div class="socials">
           
            
            <a href="#0">
              <i class="fab fa-twitter"></i>
            </a>
            <v-icon>mdi-twitter</v-icon>
            <a href="#0"><i class="fab fa-facebook-f" ></i></a>
           <a href="" class="snap"> <i class="fab fa-snapchat-ghost"  ></i></a>
           <a href="#0"><i class="fab fa-instagram"></i></a>
           
          
        </div>
         </v-container>
    </v-footer>
</template>

<script>
export default {
  name: 'AppFooter',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  .socials{
    display: flex;
    justify-content:center;
  }
</style>
