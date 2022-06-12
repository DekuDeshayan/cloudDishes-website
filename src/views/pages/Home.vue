<template>
  <section class="pt-5 pb-5 homepage-search-block position-relative">
      <div class="banner-overlay"></div>
      <div class="container">
        <div class="row d-flex align-items-center">
            <div class="col-md-8">
              <div class="homepage-search-title">
                  <h1 class="mb-2 font-weight-normal"><span class="font-weight-bold">Encontre os Melhores Restaurantes</span> em Moçambique</h1>
                  <h5 class="mb-5 text-secondary font-weight-normal">Lista dos Top Restaurantes, cafés e bares em Moçambique, baseados nas tendências</h5>
              </div>
              <div class="homepage-search-form">
                  <form class="form-noborder">
                   <div class="mb-2">
                      Buscar restaurantes mais próximos a minha localização actual
                   </div>
                    <div class="form-row">
                        <div class="col-lg-3 col-md-3 col-sm-12 form-group">
                          <div class="location-dropdown">
                              <i class="icofont-location-arrow"></i>
                              <select class="prov-select form-control-lg">
                                <option disabled selected active> Provincia </option>
                                <option v-for="(province, index) in provinces" :key="index" :value="province.id">{{province.name.replace(/_/g, ' ')}}
                                </option>                                
                              </select>
                          </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 form-group">
                          <div class="location-dropdown">
                              <i class="icofont-location-arrow"></i>
                              <select class="dist-select form-control-lg">
                                <option disabled selected active> Distrito </option>
                                <option v-for="(district, index) in districts" :key="index" :value="district.id">{{district.name.replace(/_/g, ' ')}}
                                </option>
                              </select>
                          </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 form-group">
                          <div class="location-dropdown">
                              <i class="icofont-location-arrow"></i>
                              <select class="neigh-select form-control-lg">
                                <option disabled selected active> Bairro </option>
                                <option v-for="(neighborhood, index) in neighborhoods" :key="index" :value="neighborhood.id"> {{neighborhood.name.replace(/_/g, ' ')}}
                                </option>
                              </select>
                          </div>
                        </div>
                        <div class="col-lg-2 col-md-2 col-sm-12 form-group">
                          <button @click="findByGeoLocation()" class="btn btn-primary btn-block btn-lg btn-gradient">Pesquisar</button>
                        </div>
                    </div>
                  </form>
              </div>
              <h6 class="mt-4 text-shadow font-weight-normal">Buscar Restaurante por tipo de Refeição</h6>
              <div class="owl-carousel owl-carousel-category owl-theme">
                  <div class="item">
                    <div class="osahan-category-item">
                        <a href="#">
                          <img class="img-fluid" src="../../../public/plugins/osahan/img/list/1.png" alt="">
                          <h6>American</h6>
                          <p>156</p>
                        </a>
                    </div>
                  </div>
                  <div class="item">
                    <div class="osahan-category-item">
                        <a href="#">
                          <img class="img-fluid" src="../../../public/plugins/osahan/img/list/2.png" alt="">
                          <h6>Pizza</h6>
                          <p>120</p>
                        </a>
                    </div>
                  </div>
                  <div class="item">
                    <div class="osahan-category-item">
                        <a href="#">
                          <img class="img-fluid" src="../../../public/plugins/osahan/img/list/3.png" alt="">
                          <h6>Healthy</h6>
                          <p>130</p>
                        </a>
                    </div>
                  </div>
                  <div class="item">
                    <div class="osahan-category-item">
                        <a href="#">
                          <img class="img-fluid" src="../../../public/plugins/osahan/img/list/4.png" alt="">
                          <h6>Vegetarian</h6>
                          <p>120</p>
                        </a>
                    </div>
                  </div>
                  <div class="item">
                    <div class="osahan-category-item">
                        <a href="#">
                          <img class="img-fluid" src="../../../public/plugins/osahan/img/list/5.png" alt="">
                          <h6>Chinese</h6>
                          <p>111</p>
                        </a>
                    </div>
                  </div>
                  <div class="item">
                    <div class="osahan-category-item">
                        <a href="#">
                          <img class="img-fluid" src="../../../public/plugins/osahan/img/list/6.png" alt="">
                          <h6>Hamburgers</h6>
                          <p>958</p>
                        </a>
                    </div>
                  </div>
                  <div class="item">
                    <div class="osahan-category-item">
                        <a href="#">
                          <img class="img-fluid" src="../../../public/plugins/osahan/img/list/7.png" alt="">
                          <h6>Dessert</h6>
                          <p>56</p>
                        </a>
                    </div>
                  </div>
                  <div class="item">
                    <div class="osahan-category-item">
                        <a href="#">
                          <img class="img-fluid" src="../../../public/plugins/osahan/img/list/8.png" alt="">
                          <h6>Chicken</h6>
                          <p>40</p>
                        </a>
                    </div>
                  </div>
                  <div class="item">
                    <div class="osahan-category-item">
                        <a href="#">
                          <img class="img-fluid" src="../../../public/plugins/osahan/img/list/9.png" alt="">
                          <h6>Indian</h6>
                          <p>156</p>
                        </a>
                    </div>
                  </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="osahan-slider pl-4 pt-3">
                  <div class="owl-carousel homepage-ad owl-theme">
                    <div class="item">
                        <a href="listing.html"><img class="img-fluid rounded" src="../../../public/plugins/osahan/img/slider.png"></a>
                    </div>
                    <div class="item">
                        <a href="listing.html"><img class="img-fluid rounded" src="../../../public/plugins/osahan/img/slider1.png"></a>
                    </div>
                    <div class="item">
                        <a href="listing.html"><img class="img-fluid rounded" src="../../../public/plugins/osahan/img/slider.png"></a>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
  </section>
  <section class="section pt-5 pb-5 products-section">
      <div class="container">
        <div class="section-header text-center">
            <h2>Restaurantes populares</h2>
            <p>Top restaurantes em Mocambique, baseados nas tendências</p>
            <span class="line"></span>
        </div>
        <div class="row">
            <div class="col-md-12">
              <div class="owl-carousel owl-carousel-four owl-theme">
                  <div class="item" v-for="(restList, index) in restaurantList" :key="index">
                    <div class="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm" >
                        <div class="list-card-image">
                          <div class="star position-absolute"><span class="badge badge-success"><i class="icofont-star"></i> 3.2 (300+)</span></div>
                          <div class="favourite-heart text-danger position-absolute"><a href="detail.html"><i class="icofont-heart"></i></a></div>
                          <div class="member-plan position-absolute"><span class="badge badge-dark">{{restList.province.replace(/_/g, ' ')}}</span></div>
                          <router-link :to="{name:'restaurant',query:{r:restList.id}}">
                            <img :src="restList.imageUrl" class="img-fluid item-img">
                          </router-link>
                        </div>
                        <div class="p-3 position-relative">
                          <div class="list-card-body">
                              <h6 class="mb-1">
                                <router-link :to="{name:'restaurant',query:{r:restList.id}}">
                                  {{ restList.name }}
                                </router-link>
                              </h6>
                              <p class="text-gray mb-3"> 
                                {{restList.province.replace(/_/g, ' ')}}
                                • 
                                {{restList.district.replace(/_/g, ' ')}}
                                • 
                                {{restList.neighborhood.replace(/_/g, ' ')}}
                              </p>
                              <p class="text-gray mb-3">  {{ restList.phone }} </p>
                              <p class="text-gray mb-3 time"><span class="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2"><i class="icofont-wall-clock"></i> {{ restList.openTime }} AM - {{ restList.closeTime }} PM</span> <!--<span class="float-right text-black-50"> $250 FOR TWO</span>--></p>
                          </div>
                          <div class="list-card-badge">
                              <span class="badge badge-success">E-MAIL</span> <small>{{ restList.email }}</small>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
  </section>
</template>

<script>
import osahan_custom_js from  '../../../public/plugins/osahan/js/custom';
import { nextTick } from '@vue/runtime-core';
import Province from '../../models/enums/Province';
import District from '../../models/enums/District';
import Neighborhood from '../../models/enums/Neighborhood';
import RestaurantService from "../../services/RestaurantService";

export default {
  name: 'Home',
  components: {},
  props: {},
  data() {
    return {
      restaurantList : [],
      provinces: Province,
      districts: District,
      neighborhoods: Neighborhood,
      geoData:{
        neigh:'',
        province:'',
        district:''
      },
    }
  },
  mounted(){
    var vm = this;

    $(".dist-select").change(function () {
      vm.geoData.district = $(this).find("option:selected").val()
    });

    $(".prov-select").change(function () {
      vm.geoData.province = $(this).find("option:selected").val()
    });

    $(".neigh-select").change(function () {
      vm.geoData.neigh = $(this).find("option:selected").val()
    });

    RestaurantService.findall().then((response) => {
      this.restaurantList = response.data; 
      nextTick(function(){
        var fourobjowlcarousel = $(".owl-carousel-four");
        if (fourobjowlcarousel.length > 0) {
          fourobjowlcarousel.owlCarousel({
                responsive: {
                0:{
                    items:1,
                },
                600:{
                    items:2,
                },
                1000: {
                  items: 3,
                },
                1200: {
                  items: 3,
                },
              },

                lazyLoad: true,
                pagination: false,
                loop: true,
                dots: false,
                autoPlay: 2000,
                nav: true,
                stopOnHover: true,
                navText: ["<i class='icofont-thin-left'></i>", "<i class='icofont-thin-right'></i>"]
            });
        }
      }.bind(vm));
    });
    osahan_custom_js();
  },
  beforeDestroy() {},
  methods: {
    findByGeoLocation(){
      this.$router.push({path: '/restaurants', query : { province: this.geoData.province, district: this.geoData.district, neigh: this.geoData.neigh}});
    }
  }
}
</script>

<style lang="css" scoped></style>
