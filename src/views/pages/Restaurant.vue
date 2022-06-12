<template>
    <section class="restaurant-detailed-banner">
      <div class="text-center">
        <img class="img-fluid cover" src="../../../public/plugins/osahan/img/mall-dedicated-banner.png">
      </div>
      <div class="restaurant-detailed-header">
        <div class="container">
            <div class="row d-flex align-items-end">
              <div class="col-md-8">
                  <div class="restaurant-detailed-header-left">
                    <img class="img-fluid mr-3 float-left" alt="osahan" :src="restaurant.imageUrl">
                    <h2 class="text-white">{{restaurant.name}}</h2>
                    <p class="text-white mb-1"><i class="icofont-location-pin"></i> {{restaurant.province}} <span class="badge badge-success">OPENED</span>
                    </p>
                    <p class="text-white mb-0"><i class="icofont-food-cart"></i>{{restaurant.email}} - {{restaurant.phone}}
                    </p>
                  </div>         
              </div>
              <div class="col-md-4">
                  <div class="restaurant-detailed-header-right text-right">
                    <button class="btn btn-success" type="button"><i class="icofont-clock-time"></i> {{ restaurant.openTime }} AM - {{ restaurant.closeTime }} PM
                    </button>
                    <h6 class="text-white mb-0 restaurant-detailed-ratings"><span class="generator-bg rounded text-white"><i class="icofont-star"></i> 3.1</span> 23 Ratings  <i class="ml-3 icofont-speech-comments"></i> 91 reviews</h6>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </section>
    <section class="offer-dedicated-nav bg-white border-top-0 shadow-sm">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <span class="restaurant-detailed-action-btn float-right">
                  <!-- <button class="btn btn-light btn-sm border-light-btn" type="button"><i class="icofont-heart text-danger"></i> Mark as Favourite</button> -->
                  <!-- <button class="btn btn-light btn-sm border-light-btn" type="button"><i class="icofont-cauli-flower text-success"></i>  Pure Veg</button> -->
                  <!-- <button class="btn btn-outline-danger btn-sm" type="button"><i class="icofont-sale-discount"></i>  OFFERS</button> -->
                  </span>
                  <ul class="nav" id="pills-tab" role="tablist">
                     <li class="nav-item">
                        <a class="nav-link active" id="pills-order-online-tab" data-toggle="pill" href="#pills-order-online" role="tab" aria-controls="pills-order-online" aria-selected="true">Pedido Online</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" id="pills-restaurant-info-tab" data-toggle="pill" href="#pills-restaurant-info" role="tab" aria-controls="pills-restaurant-info" aria-selected="false">Detalhes do restaurante</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" id="pills-book-tab" data-toggle="pill" href="#pills-book" role="tab" aria-controls="pills-book" aria-selected="false">Efectuar Reserva</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" id="pills-reviews-tab" data-toggle="pill" href="#pills-reviews" role="tab" aria-controls="pills-reviews" aria-selected="false">Avaliações & Reviews</a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
    </section>
    <section class="offer-dedicated-body pt-2 pb-2 mt-4 mb-4">
         <div class="container">
            <div class="row">
               <div class="col-md-8">
                  <div class="offer-dedicated-body-left">
                     <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-order-online" role="tabpanel" aria-labelledby="pills-order-online-tab">
                           <div id="#menu" class="bg-white rounded shadow-sm p-4 mb-4 explore-outlets">
                              <h5 class="mb-4">Buscar por refeições</h5>
                              <form class="explore-outlets-search mb-4">
                                 <div class="input-group">
                                    <input type="text" placeholder="Pesquise por refeições..." class="form-control">
                                    <div class="input-group-append">
                                       <button type="button" class="btn btn-link">
                                       <i class="icofont-search"></i>
                                       </button>
                                    </div>
                                 </div>
                              </form>
                           </div>
                           <div class="row">
                              <h5 class="mb-4 mt-1 col-md-12">Refeições</h5>
                              <div class="col-md-4 col-sm-6 mb-4" v-for="(meal, index) in mealList" :key="index">
                                 <div class="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                    <div class="list-card-image">
                                       <div class="star position-absolute"><span class="badge badge-success"><i class="icofont-star"></i> 3.1 (300+)</span></div>
                                       <div class="favourite-heart text-danger position-absolute"><a href="#"><i class="icofont-heart"></i></a></div>
                                       <div class="member-plan position-absolute"><span class="badge badge-dark">{{meal.mealType}}</span></div>
                                       <a href="#">
                                       <img :src="meal.imageUrl" class="img-fluid item-img">
                                       </a>
                                    </div>
                                    <div class="p-3 position-relative">
                                       <div class="list-card-body">
                                          <h6 class="mb-1"><a href="#" class="text-black">{{meal.name}}</a></h6>
                                          <p class="text-gray mb-2">{{meal.description}}</p>
                                          <p class="text-gray time mb-0"><a class="btn btn-link btn-sm pl-0 text-black pr-0" href="#">MZN {{meal.price}} </a> <span class="badge badge-success">NOVO</span> 
                                          <span class="float-right mb-2"> 
                                             <button @click="addToCart(meal)" class="btn btn-outline-secondary btn-sm" href="#"><i class="icofont-shopping-cart"></i>ADICIONAR</button>
                                          </span>
                                          </p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="tab-pane fade" id="pills-restaurant-info" role="tabpanel" aria-labelledby="pills-restaurant-info-tab">
                           <div id="restaurant-info" class="bg-white rounded shadow-sm p-4 mb-4">
                              <div class="address-map float-right ml-5">
                                 <div class="mapouter">
                                    <div class="gmap_canvas"><iframe width="300" height="170" id="gmap_canvas" src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=9&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div>
                                 </div>
                              </div>
                              <h5 class="mb-4">Restaurant Info</h5>
                              <p class="mb-3">Jagjit Nagar, Near Railway Crossing, 
                                 <br> Near Model Town, Ludhiana, PUNJAB
                              </p>
                              <p class="mb-2 text-black"><i class="icofont-phone-circle text-primary mr-2"></i> +91 01234-56789, +91 01234-56789</p>
                              <p class="mb-2 text-black"><i class="icofont-email text-primary mr-2"></i> iamosahan@gmail.com, osahaneat@gmail.com</p>
                              <p class="mb-2 text-black"><i class="icofont-clock-time text-primary mr-2"></i> Today  11am – 5pm, 6pm – 11pm
                                 <span class="badge badge-success"> OPEN NOW </span>
                              </p>
                              <hr class="clearfix">
                              <p class="text-black mb-0">You can also check the 3D view by using our menue map clicking here &nbsp;&nbsp;&nbsp; <a class="text-info font-weight-bold" href="#">Venue Map</a></p>
                              <hr class="clearfix">
                              <h5 class="mt-4 mb-4">More Info</h5>
                              <p class="mb-3">Dal Makhani, Panneer Butter Masala, Kadhai Paneer, Raita, Veg Thali, Laccha Paratha, Butter Naan</p>
                              <div class="border-btn-main mb-4">
                                 <a class="border-btn text-success mr-2" href="#"><i class="icofont-check-circled"></i> Breakfast</a>
                                 <a class="border-btn text-danger mr-2" href="#"><i class="icofont-close-circled"></i> No Alcohol Available</a>
                                 <a class="border-btn text-success mr-2" href="#"><i class="icofont-check-circled"></i> Vegetarian Only</a>
                                 <a class="border-btn text-success mr-2" href="#"><i class="icofont-check-circled"></i> Indoor Seating</a>
                                 <a class="border-btn text-success mr-2" href="#"><i class="icofont-check-circled"></i> Breakfast</a>
                                 <a class="border-btn text-danger mr-2" href="#"><i class="icofont-close-circled"></i> No Alcohol Available</a>
                                 <a class="border-btn text-success mr-2" href="#"><i class="icofont-check-circled"></i> Vegetarian Only</a>
                              </div>
                           </div>
                        </div>
                        <div class="tab-pane fade" id="pills-book" role="tabpanel" aria-labelledby="pills-book-tab">
                           <div id="book-a-table" class="bg-white rounded shadow-sm p-4 mb-5 rating-review-select-page">
                              <h5 class="mb-4">Book A Table</h5>
                              <form>
                                 <div class="row">
                                    <div class="col-sm-6">
                                       <div class="form-group">
                                          <label>Full Name</label>
                                          <input class="form-control" type="text" placeholder="Enter Full Name">
                                       </div>
                                    </div>
                                    <div class="col-sm-6">
                                       <div class="form-group">
                                          <label>Email Address</label>
                                          <input class="form-control" type="text" placeholder="Enter Email address">
                                       </div>
                                    </div>
                                 </div>
                                 <div class="row">
                                    <div class="col-sm-6">
                                       <div class="form-group">
                                          <label>Mobile number</label>
                                          <input class="form-control" type="text" placeholder="Enter Mobile number">
                                       </div>
                                    </div>
                                    <div class="col-sm-6">
                                       <div class="form-group">
                                          <label>Date And Time</label>
                                          <input class="form-control" type="text" placeholder="Enter Date And Time">
                                       </div>
                                    </div>
                                 </div>
                                 <div class="form-group text-right">
                                    <button class="btn btn-primary" type="button"> Submit </button>
                                 </div>
                              </form>
                           </div>
                        </div>   
                     </div>
                  </div>
               </div>
               <div class="col-md-4">
                  <div class="generator-bg rounded shadow-sm mb-4 p-4 osahan-cart-item">

                     <form v-on:submit.prevent="saveRestaurant">
                     
                        <h5 class="mb-1 text-white">O seu pedido</h5>
                        <p class="mb-4 text-white">6 ITEMS</p>
                        <div class="bg-white rounded shadow-sm mb-2">
                           <div class="gold-members p-2 border-bottom" v-for="(cartItem, index) in cart" :key="index">
                              <p class="text-gray mb-0 float-right ml-2">{{cartItem.price}}</p>
                              <span class="count-number float-right">
                              <input class="count-number-input" type="text" value="1" readonly="">
                              </span>
                              <div class="media">
                                 <div class="mr-2"><i class="icofont-ui-press text-success food-item"></i></div>
                                 <div class="media-body">
                                    <p class="mt-1 mb-0 text-black">{{cartItem.name}}</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="mb-2 bg-white rounded p-2 clearfix">
                           <img class="img-fluid float-left" src="../../../public/plugins/osahan/img/wallet-icon.png">
                           <h6 class="font-weight-bold text-right mb-2">Subtotal : <span class="text-danger">{{subtotal}}</span></h6>
                        </div>

                        <p class="mb-2 text-white">Escolha  o local  de Entrega</p>
                        <div class="mb-2 bg-white rounded p-2 clearfix">

                           <div class="form-group">
                               <label >Alcunha (Ex: casa, trabalho, outro...)</label>
                              <div class="input-group mb-3">
                                 <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-clock"></i></span>
                                 </div>
                                 <input v-model="deliveryAddress.nickname" type="text" :class="`form-control ${v$.formData.nickname.$errors.length ? 'is-invalid' : ''}`"   placeholder="nickname"  name="nickname" id="nickname">
                              </div>
                              <div class="input-errors" v-for="error of v$.formData.nickname.$errors" :key="error.$uid">
                              <span class="inval">{{ error.$message }}</span>
                              </div>
                           </div>

                           <div class="form-group">
                               <label >Detalhes do local de entrega</label>
                              <div class="input-group mb-3">
                                 <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-clock"></i></span>
                                 </div>
                                 <input v-model="deliveryAddress.completeAddress" type="text" :class="`form-control ${v$.formData.completeAddress.$errors.length ? 'is-invalid' : ''}`"   placeholder="endereco completo"  name="completeaddress" id="completeaddress">
                              </div>
                              <div class="input-errors" v-for="error of v$.formData.completeAddress.$errors" :key="error.$uid">
                              <span class="inval">{{ error.$message }}</span>
                              </div>
                           </div>

                           <div class="form-group">
                              <label >Province</label>
                              <div class="input-group mb-3">
                                 <select :class="`form-control select2_prov select2bs4 ${v$.formData.province.$errors.length ? 'is-invalid' : ''}`"   name="province" id="province" >
                                    <option  disabled selected>Choose a Province</option>
                                    <option v-for="(province, index) in provinces" :key="index" :value="province.id"> {{province.name.replace(/_/g, ' ')}}
                                    </option>
                                 </select>
                              </div>
                              <div class="input-errors" v-for="error of v$.formData.province.$errors" :key="error.$uid">
                              <span class="inval">{{ error.$message }}</span>
                              </div>
                           </div>

                           <div class="form-group">
                              <label >District</label>
                              <div class="input-group mb-3">
                                 <select  :class="`form-control select2_district select2bs4 ${v$.formData.district.$errors.length ? 'is-invalid' : ''}`"   name="district" id="district" >
                                    <option disabled selected>Choose a District</option>
                                    <option v-for="(district, index) in districts" :key="index" :value="district.id">{{district.name.replace(/_/g, ' ')}}
                                       </option>
                                 </select>
                              </div>
                              <div class="input-errors" v-for="error of v$.formData.district.$errors" :key="error.$uid">
                              <span class="inval">{{ error.$message }}</span>
                              </div>
                           </div>

                           <div class="form-group">
                              <label >Neighborhood</label>
                              <div class="input-group mb-3">
                                 <select :class="`form-control select2_neigh select2bs4 ${v$.formData.neighborhood.$errors.length ? 'is-invalid' : ''}`"   name="neighborhood" id="neighborhood" >
                                    <option disabled selected>Choose a Neighborhood</option>
                                       <option v-for="(neighborhood, index) in neighborhoods" :key="index" :value="neighborhood.id">{{neighborhood.name.replace(/_/g, ' ')}}
                                       </option>
                                 </select>
                              </div>
                              <div class="input-errors" v-for="error of v$.formData.neighborhood.$errors" :key="error.$uid">
                              <span class="inval">{{ error.$message }}</span>
                              </div>
                           </div>
                        </div>

                        <button class="btn btn-success btn-block btn-lg" @click="submitted = true">Enviar Pedido <i class="icofont-long-arrow-right"></i></button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
    </section>
    <section class="section pt-5 pb-5 text-center bg-white">
         <div class="container">
            <div class="row">
               <div class="col-sm-12">
                  <h5 class="m-0">Opera algum estabelecimento de restauração <a href="/contact">Trabalhe conosco</a></h5>
               </div>
            </div>
         </div>
    </section>
</template>
<script>
import osahan_custom_js from  '../../../public/plugins/osahan/js/custom';
import RestaurantService from '@/services/RestaurantService';
import MealService from '../../services/MealService';
import useVuelidate from '@vuelidate/core';
import Province from '../../models/enums/Province';
import District from '../../models/enums/District';
import Neighborhood from '../../models/enums/Neighborhood';
import { required, helpers} from '@vuelidate/validators';
export default {
  setup () {
    return { v$: useVuelidate() }
  },
  name: 'Restaurant',
  components: {},
  props: {},
  data() {
    return {
      restaurant: [],
      mealList: [],
      cart: [],
      mealQuantity:1,
      subtotal:0,
      deliveryAddress: {
        id:this.id,
        province:this.province,
        district:this.district,
        neighborhood:this.neighborhood, 
        completeAddress:this.completeAddress,
        nickname: this.nickname,
      },
      provinces: Province,
      districts: District,
      neighborhoods: Neighborhood, 
    }
  },
   validations() {
    return {
      formData: {
        name: {
           required: helpers.withMessage('required', required)
        },
        province: {
           required: helpers.withMessage('required', required)
        },
        nickname: {
         required: helpers.withMessage('required', required)
        },
        completeAddress: {
         required: helpers.withMessage('required', required)
        },
        district: {
           required: helpers.withMessage('required', required)
        },
        neighborhood: {
           required: helpers.withMessage('required', required)
        },
      }
    };
  },
  mounted() {

   let self = this;
   $(".select2_neigh").change(function () {
      const val = $(this).find("option:selected").val();
      self.deliveryAddress.neighborhood = val;
   });
   $(".select2_prov").change(function () {
      const val = $(this).find("option:selected").val();
      self.deliveryAddress.province = val;
   });
   $(".select2_district").change(function () {
      const val = $(this).find("option:selected").val();
      self.deliveryAddress.district = val;
   });

   MealService.findAllByRestaurant(this.$route.query.r).then((response) => {
      this.mealList = response.data; 
    });

   RestaurantService.findById(this.$route.query.r).then((response) =>{
      this.restaurant = response.data;
   });

    osahan_custom_js();
  },
  beforeDestroy() {},
  methods: {

   addToCart(meal){

      var findProduct = this.cart.find(o => o.id === meal.id);

      if(findProduct){
         this.mealQuantity+=1;
         
         this.subtotal = meal.price*=this.mealQuantity;

         console.log(this.mealQuantity);
         console.log(meal.price);
         console.log(this.cart)
      }else{
         this.cart.push(meal);
         this.subtotal = meal.price*=this.mealQuantity;
         console.log(this.cart)
      }
   }

  }
}
</script>

<style lang="css" scoped></style>


