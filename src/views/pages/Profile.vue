<template>
  <section class="section pt-4 pb-4 osahan-account-page">
    <div class="container">
      <div class="row">
        <ProfileSidebar/>
        <div class="col-md-9">
          <div class="osahan-account-page-right shadow-sm bg-white p-4 h-100">
            <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade show active" id="orders" role="tabpanel" aria-labelledby="orders-tab">
                <h4 class="font-weight-bold mt-0 mb-4">Os Meus Pedidos</h4>
                <div class="bg-white card mb-4 order-list shadow-sm" v-for="(orders, index) in orderList" :key="index">
                  <div class="gold-members p-4">
                      <a href="#">
                        <div class="media">
                          <img class="mr-4" src="../../../public/plugins/osahan/img/cart.jpg" alt="Generic placeholder image">
                          <div class="media-body">
                              <span class="float-right text-info">Pedido feito em {{new Date(orders.orderTime).toUTCString()}} <i class="icofont-check-circled text-success"></i></span>
                              <h6 class="mb-2">
                            <a href="detail.html" class="text-black">
                            </a></h6>
                            <p class="text-gray mb-1"><i class="icofont-location-arrow"></i> {{orders.orderdeliveryaddress.completeAddress}}
                            </p>
                            <p class="text-gray mb-3"><i class="icofont-list"></i> ORDER #{{orders.id}} <i class="icofont-clock-time ml-2"></i> {{new Date(orders.orderTime).toDateString()}}</p>
                            <p class="text-dark" v-for="(descr,ind) in orders.meal" :key="ind">{{descr.description}} : {{descr.price}} MZN
                            </p>
                            <hr>
                            <div class="float-right">
                            <a class="btn btn-sm btn-outline-primary" href="#">STATUS</a>
                            <a class="btn btn-sm btn-primary" href="#"><i class="icofont-clock-time ml-2"></i> {{orders.request.requestStatus}}</a>
                            </div>
                            <p class="mb-0 text-black text-primary pt-2"><span class="text-black font-weight-bold"> Subtotal:</span>  {{orders.subtotal}} MZN
                            </p>
                          </div>
                        </div>
                      </a>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="addresses" role="tabpanel" aria-labelledby="addresses-tab">
                <h4 class="font-weight-bold mt-0 mb-4">Manage Addresses</h4>
                <div class="row pb-2">
                  <div class="col-md-6">
                      <div class="bg-white card addresses-item mb-4 border border-primary shadow">
                        <div class="gold-members p-4">
                            <div class="media">
                              <div class="mr-3"><i class="icofont-ui-home icofont-3x"></i></div>
                              <div class="media-body">
                                  <h6 class="mb-1 text-secondary">Home</h6>
                                  <p class="text-black">Osahan House, Jawaddi Kalan, Ludhiana, Punjab 141002, India
                                  </p>
                                  <p class="mb-0 text-black font-weight-bold"><a class="text-primary mr-3" data-toggle="modal" data-target="#add-address-modal"  href="#"><i class="icofont-ui-edit"></i> EDIT</a> <a class="text-danger" data-toggle="modal" data-target="#delete-address-modal" href="#"><i class="icofont-ui-delete"></i> DELETE</a></p>
                              </div>
                            </div>
                        </div>
                      </div>
                  </div>
                  <div class="col-md-6">
                      <div class="bg-white card addresses-item mb-4 shadow-sm">
                        <div class="gold-members p-4">
                            <div class="media">
                              <div class="mr-3"><i class="icofont-briefcase icofont-3x"></i></div>
                              <div class="media-body">
                                  <h6 class="mb-1">Work</h6>
                                  <p>NCC, Model Town Rd, Pritm Nagar, Model Town, Ludhiana, Punjab 141002, India
                                  </p>
                                  <p class="mb-0 text-black font-weight-bold"><a class="text-primary mr-3" data-toggle="modal" data-target="#add-address-modal" href="#"><i class="icofont-ui-edit"></i> EDIT</a> <a class="text-danger" data-toggle="modal" data-target="#delete-address-modal" href="#"><i class="icofont-ui-delete"></i> DELETE</a></p>
                              </div>
                            </div>
                        </div>
                      </div>
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
import ProfileSidebar from '../layout/ProfileSidebar.vue';
import OrderService from '@/services/OrderService';
export default {
  name: 'Profile',
  components: {ProfileSidebar},
  props: {},
  data() {
    return {
      orderList:[]
    }
  },
  mounted() {

    OrderService.findAllOrdersOfUser().then((response)=>{
      this.orderList = response.data;
      console.log(this.orderList);
    });

  },
  beforeDestroy() {},
  methods: {}
}
</script>

<style lang="css" scoped></style>
