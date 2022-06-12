<template>
  <Header />
  <router-view />
  <section class="section pt-5 pb-5 bg-white becomemember-section border-bottom" v-if="!isLogged">
      <div class="container">
        <div class="section-header text-center white-text">
            <h2>Seja um Membro</h2>
            <p>Crie a sua conta gratuita!</p>
            <span class="line"></span>
        </div>
        <div class="row">
            <div class="col-sm-12 text-center">
              <router-link to="/register" class="btn btn-success btn-lg">
              Criar Conta <i class="fa fa-chevron-circle-right"></i>
              </router-link>
            </div>
        </div>
      </div>
  </section>
  <section class="footer pt-5 pb-5">
      <div class="container">
        <div class="row">
            <div class="col-md-4 col-12 col-sm-12">
              <!-- <h6 class="mb-3">Subscribe to our Newsletter</h6> -->
              <form class="newsletter-form mb-1">
                  <div class="input-group">
                    <input type="text" placeholder="pesquisar refeições, restaurantes, localização, etc." class="form-control">
                    <div class="input-group-append">
                        <button type="button" class="btn btn-primary">
                        Pesquisar
                        </button>
                    </div>
                  </div>
              </form>
              <!-- <p><a class="text-info" href="register.html">Register now</a> to get updates on <a href="offers.html">Offers and Coupons</a></p> -->
              <!-- <div class="app">
                  <p class="mb-2">DOWNLOAD APP</p>
                  <a href="#">
                  <img class="img-fluid" src="../public/plugins/osahan/img/google.png">
                  </a>
                  <a href="#">
                  <img class="img-fluid" src="../public/plugins/osahan/img/apple.png">
                  </a>
              </div> -->
            </div>
            <div class="col-md-1 col-sm-6 mobile-none">
            </div>
            <div class="col-md-2 col-6 col-sm-4">
              <h6 class="mb-3">SOBRE cloudDishes</h6>
              <ul>
                  <li><a href="#">Sobre nós</a></li>
                  <li><a href="#">Contacto</a></li>
              </ul>
            </div>
            <div class="col-md-2 col-3 col-sm-4">
              <h6 class="mb-2">Termos</h6>
              <ul>
                  <li><a href="#">Termos & Condições</a></li>
                  <li><a href="#">Políticas de Privacidade</a></li>
                  <!-- <li><a href="#">Developers</a></li>
                  <li><a href="#">Blogger Help</a></li>
                  <li><a href="#">Verified Users</a></li> -->
                  <li><a href="#">Código de Conduta</a></li>
              </ul>
            </div>
            <div class="col-md-2 col-3 col-sm-4">
              <h6 class="mb-3">Para Restaurantes</h6>
              <ul>
                  <li><a href="#">Solicitar Demo</a></li>
                  <li><a href="#">Junte-se a Nós</a></li>
                  <li><a href="#">Normas do Proprietário</a></li>
                  <!-- <li><a href="#">Add a Restaurant</a></li>
                  <li><a href="#">Claim your Listing</a></li>
                  <li><a href="#">For Businesses</a></li>
                  <li><a href="#">Owner Guidelines</a></li> -->
              </ul>
            </div>
        </div>
      </div>
  </section>
  <section class="footer-bottom-search pt-5 pb-5 bg-white">
      <div class="container">
        <div class="row">
            <div class="col-md-12">
              <p class="text-black">PROVÍNCIAS ABRANGIDAS</p>
              <div class="search-links">
                  <a href="#"  v-for="(province, index) in provinces" :key="index" :value="province"> {{province.name.replace(/_/g, ' ')}} |</a> 
              </div>
              <p class="mt-4 text-black">CATEGORIAS</p>
              <div class="search-links">
                  <a href="#" v-for="(mealtype, index) in mealTypes" :key="index" :value="mealtype"> {{ mealtype=='FASTFOOD' ? 'FAST FOOD' : mealtype }} |</a>
              </div>
            </div>
        </div>
      </div>
  </section>
  <Footer/>
</template>

<script>
import Header from './views/layout/Header.vue';
import Footer from './views/layout/Footer.vue';
import Role from './models/enums/Role';
import Province from './models/enums/Province';
import vuex from 'vuex';
import MealType from './models/enums/MealType';


export default {
  name: 'App',
  components:  { Header, Footer },
  props: {},
  data() {
    return {
      provinces: Province,
      mealTypes: MealType, 
    }
  },
  computed: {
     ...vuex.mapGetters(['currentUser']),
     isLogged() {
       return this.currentUser?.role === Role.CLIENT;  
     },
  },
  mounted() {
    window.onpopstate = function () {
     location.reload()
    };

  },
  beforeDestroy() {},
  methods: {
  },
}
</script>

<style lang="css" scoped></style>
 	  