<template>
  <!-- Modal -->
  <div class="modal fade" id="edit-profile-modal" tabindex="-1" role="dialog" aria-labelledby="edit-profile" aria-hidden="true">
      <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="edit-profile">Edit profile</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                        <label>Phone number
                        </label>
                        <input type="text" value="+91 85680-79956" class="form-control" placeholder="Enter Phone number">
                    </div>
                    <div class="form-group col-md-12">
                        <label>Email id
                        </label>
                        <input type="text" value="iamosahan@gmail.com" class="form-control" placeholder="Enter Email id
                          ">
                    </div>
                    <div class="form-group col-md-12 mb-0">
                        <label>Password
                        </label>
                        <input type="password" value="**********" class="form-control" placeholder="Enter password
                          ">
                    </div>
                  </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn d-flex w-50 text-center justify-content-center btn-outline-primary" data-dismiss="modal">CANCEL
              </button><button type="button" class="btn d-flex w-50 text-center justify-content-center btn-primary">UPDATE</button>
            </div>
        </div>
      </div>
  </div>
  <!-- Modal -->
  <div class="modal fade" id="add-address-modal" tabindex="-1" role="dialog" aria-labelledby="add-address" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="add-address">Add Delivery Address</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                        <label for="inputPassword4">Delivery Area</label>
                        <div class="input-group">
                          <input type="text" class="form-control" placeholder="Delivery Area">
                          <div class="input-group-append">
                              <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="icofont-ui-pointer"></i></button>
                          </div>
                        </div>
                    </div>
                    <div class="form-group col-md-12">
                        <label for="inputPassword4">Complete Address
                        </label>
                        <input type="text" class="form-control" placeholder="Complete Address e.g. house number, street name, landmark">
                    </div>
                    <div class="form-group col-md-12">
                        <label for="inputPassword4">Delivery Instructions
                        </label>
                        <input type="text" class="form-control" placeholder="Delivery Instructions e.g. Opposite Gold Souk Mall">
                    </div>
                    <div class="form-group mb-0 col-md-12">
                        <label for="inputPassword4">Nickname
                        </label>
                        <div class="btn-group btn-group-toggle d-flex justify-content-center" data-toggle="buttons">
                          <label class="btn btn-info active">
                          <input type="radio" name="options" id="option1" autocomplete="off" checked> Home
                          </label>
                          <label class="btn btn-info">
                          <input type="radio" name="options" id="option2" autocomplete="off"> Work
                          </label>
                          <label class="btn btn-info">
                          <input type="radio" name="options" id="option3" autocomplete="off"> Other
                          </label>
                        </div>
                    </div>
                  </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn d-flex w-50 text-center justify-content-center btn-outline-primary" data-dismiss="modal">CANCEL
              </button><button type="button" class="btn d-flex w-50 text-center justify-content-center btn-primary">SUBMIT</button>
            </div>
        </div>
      </div>
  </div>
  <!-- Modal -->
  <div class="modal fade" id="delete-address-modal" tabindex="-1" role="dialog" aria-labelledby="delete-address" aria-hidden="true">
      <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="delete-address">Delete</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p class="mb-0 text-black">Are you sure you want to delete this xxxxx?</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn d-flex w-50 text-center justify-content-center btn-outline-primary" data-dismiss="modal">CANCEL
              </button><button type="button" class="btn d-flex w-50 text-center justify-content-center btn-primary">DELETE</button>
            </div>
        </div>
      </div>
  </div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light osahan-nav shadow-sm">
      <div class="container">
        <a class="navbar-brand" href="/"><img alt="logo" src="../../../public/plugins/osahan/img/nnlog.png"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item" active-class="active">
                  <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
              </li>
 
              <!-- <li class="nav-item">
                  <a class="nav-link" href="offers.html"><i class="icofont-sale-discount"></i> Offers <span class="badge badge-danger">New</span></a>
              </li> -->
              <li class="nav-item dropdown" active-class="active">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Restaurantes
                  </a>
                  <div class="dropdown-menu dropdown-menu-right shadow-sm border-0">
                    <a class="dropdown-item" href="/restaurants">Listagem</a>
                    <!-- <a class="dropdown-item" href="detail.html">Detail + Cart</a>
                    <a class="dropdown-item" href="checkout.html">Checkout</a> -->
                  </div>
              </li>
              <!-- <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Pages
                  </a>
                  <div class="dropdown-menu dropdown-menu-right shadow-sm border-0">
                    <a class="dropdown-item" href="track-order.html">Track Order</a>
                    <a class="dropdown-item" href="invoice.html">Invoice</a>
                    <a class="dropdown-item" href="login.html">Login</a>
                    <a class="dropdown-item" href="register.html">Register</a>
                    <a class="dropdown-item" href="404.html">404</a>
                    <a class="dropdown-item" href="extra.html">Extra :)</a>
                  </div>
              </li> -->
              <li class="nav-item" active-class="active" v-if="!currentUser">
                  <a class="nav-link" href="/login">Entrar </a>
              </li>
              <li class="nav-item" active-class="active" v-if="!currentUser">
                  <a class="nav-link" href="/register">Criar conta </a>
              </li>
              <li class="nav-item dropdown" active-class="active">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img alt="Generic placeholder image" src="../../../public/plugins/osahan/img/user/4.png" class="nav-osahan-pic rounded-pill"> Minha Conta
                  </a>
                  <div class="dropdown-menu dropdown-menu-right shadow-sm border-0">
                    <a class="dropdown-item" href="/profile"><i class="icofont-user-alt-7"></i> Perfil</a>
                    <a class="dropdown-item" href="/profile#orders"><i class="icofont-truck-loaded"></i> Encomendas</a>
                    <a class="dropdown-item" href="/profile#reservations"><i class="icofont-fork-and-knife"></i> Reservas</a>
                  </div>
              </li>
              <!-- <li class="nav-item dropdown dropdown-cart" active-class="active">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fas fa-shopping-basket"></i> Cart
                  <span class="badge badge-success">5</span>
                  </a>
                  <div class="dropdown-menu dropdown-cart-top p-0 dropdown-menu-right shadow-sm border-0">
                    <div class="dropdown-cart-top-header p-4">
                        <img class="img-fluid mr-3" alt="osahan" src="../../../public/plugins/osahan/img/cart.jpg">
                        <h6 class="mb-0">Gus's World Famous Chicken</h6>
                        <p class="text-secondary mb-0">310 S Front St, Memphis, USA</p>
                        <small><a class="text-primary font-weight-bold" href="#">View Full Menu</a></small>
                    </div>
                    <div class="dropdown-cart-top-body border-top p-4">
                        <p class="mb-2"><i class="icofont-ui-press text-danger food-item"></i> Chicken Tikka Sub 12" (30 cm) x 1   <span class="float-right text-secondary">$314</span></p>
                        <p class="mb-2"><i class="icofont-ui-press text-success food-item"></i> Corn & Peas Salad x 1   <span class="float-right text-secondary">$209</span></p>
                        <p class="mb-2"><i class="icofont-ui-press text-success food-item"></i> Veg Seekh Sub 6" (15 cm) x 1  <span class="float-right text-secondary">$133</span></p>
                        <p class="mb-2"><i class="icofont-ui-press text-danger food-item"></i> Chicken Tikka Sub 12" (30 cm) x 1   <span class="float-right text-secondary">$314</span></p>
                        <p class="mb-2"><i class="icofont-ui-press text-danger food-item"></i> Corn & Peas Salad x 1   <span class="float-right text-secondary">$209</span></p>
                    </div>
                    <div class="dropdown-cart-top-footer border-top p-4">
                        <p class="mb-0 font-weight-bold text-secondary">Sub Total <span class="float-right text-dark">$499</span></p>
                        <small class="text-info">Extra charges may apply</small>  
                    </div>
                    <div class="dropdown-cart-top-footer border-top p-2">
                        <a class="btn btn-success btn-block btn-lg" href="checkout.html"> Checkout</a>
                    </div>
                  </div>
              </li> -->
              <li class="nav-item dropdown" active-class="active" v-if="currentUser">
                  <a href="#" class="nav-link" @click="logOut">
                    Sair
                  </a>
              </li>
            </ul>
        </div>
      </div>
  </nav>
</template>

<script>
import vuex from 'vuex';

export default {
  name: 'Header',
  components: {},
  props: {},
  data() {
    return {}
  },
   computed: {
     ...vuex.mapGetters(['currentUser']),
  },
  mounted() {},
  beforeDestroy() {},
  methods: {
     ...vuex.mapActions(['clearUser']),
    logOut() {
      //clear user fom vuex
      this.clearUser();
      this.$a('/login');
    },
  },
}
</script>

<style lang="css" scoped></style>
