<template>
  <div >
  
   <slick
  ref="slick"
  :options="slickOptions">
    <div class="payment-method">
      <div class="my-tooltip">
          <span>Best Choice</span>
          <div class="triangle"></div>
          </div>
          <div class="image-container">
              <img src="../assets/images/f1.png" alt="">
          </div>
          <span class="b-price">+1.000</span>
    </div>
    <div class="payment-method">
        <div class="my-tooltip">
            <span>Best Choice</span>
            <div class="triangle"></div>
            </div>
            <div class="image-container">
            <img src="../assets/images/paypal.png" alt="">
         </div>
         <span class="b-price">+1.800</span>
    </div>
    <div class="payment-method">
        <div class="my-tooltip">
            <span>Best Choice</span>
            <div class="triangle"></div>
        </div>
        <div class="image-container">   
            <img src="../assets/images/f1.png" alt="">
        </div>
        <span class="b-price ">+1.500</span>
    </div>
    <div class="payment-method">
      <div class="my-tooltip">
        <span>Best Choice</span>
        <div class="triangle"></div>
      </div>
      <div class="image-container">
        <img src="../assets/images/knet.png" alt="">
      </div>
       <span class="b-price ">+0.500</span>
      </div>
      <div class="payment-method">
          <div class="my-tooltip">
              <span>Best Choice</span>
              <div class="triangle"></div>
          </div>
          <div class="image-container">
              <img src="../assets/images/visa.png" alt="">
          </div>
          <span class="b-price">+0.000</span>
      </div>
      <div class="payment-method">
          <div class="my-tooltip">
              <span>Best Choice</span>
              <div class="triangle"></div>
          </div>
          <div class="image-container">
              <img src="../assets/images/knet.png" alt="">
          </div>
              <span class="b-price">+0.500</span>
      </div>
      <div class="payment-method">
          <div class="my-tooltip">
              <span>Best Choice</span>
              <div class="triangle"></div>
          </div>
          <div class="image-container">
             <img src="../assets/images/f2.png" alt="">
          </div>
          <span class="b-price">+1.800</span>
      </div>
</slick>
  </div>
</template>

<script>
import Slick from 'vue-slick';

export default {
  name: 'PaymentMethod',
  components: {
   Slick
  },
  data() {
        return {
            slickOptions: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '70px',
                arrows:false
            },
        };
    },
    methods: {
        next() {
            this.$refs.slick.next();
        },

        prev() {
            this.$refs.slick.prev();
        },
    }
}
import 'slick-carousel/slick/slick.css';
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;900&display=swap');
body{
  background-color: #eee;
  font-family: 'Poppins', sans-serif;
}
.slick-slide img {
    max-width: 100%;
    width: 75px;
    height: 75px;
}
.payment-method .image-container {
    background-color: #fff;
}
.payment-method .image-container {
    padding: 25px;
    box-shadow: rgb(175 214 236 / 20%) 0px 0px 30px;
    margin-top: 15px;
    margin-bottom: 15px;
    border-radius: 40px;
    -webkit-border-radius: 40px;
    -moz-border-radius: 40px;
    -ms-border-radius: 40px;
    -o-border-radius: 40px;
}
.slick-initialized .slick-slide {
    display: flex !important;
    justify-content: center;
    position: relative;
}
.b-price {
    position: absolute;
    bottom: -15px;
}
.slick-current .image-container {
    border: 1px solid #f77d1a;
}
.slick-current span.b-price {
    color: #f77d1a;
}
.my-tooltip span {
    display: block;
    background-color: #02a154;
    padding: 7px 15px;
    color: #fff;
    border-radius: 13px;
    -webkit-border-radius: 13px;
    -moz-border-radius: 13px;
    -ms-border-radius: 13px;
    -o-border-radius: 13px;
    white-space: nowrap;
}
.triangle {
    width: 0;
    height: 0px;
    /* border: 10px solid red; */
    border-left: 20px solid transparent;
    border-right: 17px solid #02a154;
    border-bottom: 20px solid transparent;
    border-top: 20px solid transparent;
    transform: rotate(45deg);
    top: 10px;
    left:37px;
    position: absolute;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
}
.my-tooltip {
    position: absolute;
    top: -45px;
    opacity: 0;
    transition: all .3s ease-in-out;
    -webkit-transition: all .3s ease-in-out;
    -moz-transition: all .3s ease-in-out;
    -ms-transition: all .3s ease-in-out;
    -o-transition: all .3s ease-in-out;
}
.slick-track {
    padding-bottom: 30px;
    padding-top: 50px;
}
.slick-slide:hover .my-tooltip {
    opacity: 1;
}
.payment-method{
    display: flex!important;
    justify-content: center;
    position: relative;
}
.slick-slide:hover .b-price {
    color: #02a154;
}
.slick-slide:hover .image-container {
    border: 1px solid #02a154;
}
.slick-slide:focus{
  outline: none;
  border:none;
}
@media (max-width: 768px)
{
  .slick-slide img {
    width: 50px;
    height: 50px;
  }
  .payment-method .image-container {
    border-radius: 30px;
    -webkit-border-radius: 30px;
    padding: 22px;
  }
}
@media (max-width: 480px)
{
.slick-slide img {
    max-width: 100%;
    /* width: 38px;
    height: 38px; */
    width: 25px;
    height:25px;
}
.payment-method .image-container {
    padding: 12px;
    -webkit-border-radius: 15px;
    /* padding: 5px;
    -webkit-border-radius: 5px; */
       box-shadow: rgb(175 214 236 / 20%) 0px 0px 10px;
}
.slick-slide{
    margin-inline-start: 10px;
}
.b-price {
    font-size: 12px;
}
.my-tooltip span{
  font-size: 10px;
}
.triangle{
  top: 8px;
  left: 15px;
}
}

</style>
