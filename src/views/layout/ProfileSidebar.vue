<template>
    <div class="col-md-3">
        <div class="osahan-account-page-left shadow-sm bg-white h-100">
            <div class="border-bottom p-4">
              <div class="osahan-user text-center">
                  <div class="osahan-user-media">
                    <img class="mb-3 rounded-pill shadow-sm mt-1" src="../../../public/plugins/osahan/img/user/4.png" alt="gurdeep singh osahan">
                    <div class="osahan-user-media-body">
                        <h6 class="mb-2">{{currentUser.first_name +' '+ currentUser.surname}}</h6>
                        <p class="mb-1">{{currentUser.username}}</p>
                        <p>{{currentUser.email}}</p>
                        <p class="mb-0 text-black font-weight-bold"><a class="text-primary mr-3" data-toggle="modal" data-target="#edit-profile-modal" href="#"><i class="icofont-ui-edit"></i> EDIT</a></p>
                    </div>
                  </div>
              </div>
            </div>
            <ul class="nav nav-tabs flex-column border-0 pt-4 pl-4 pb-4" id="myTab" role="tablist">
              <li class="nav-item">
                  <a class="nav-link active" id="orders-tab" data-toggle="tab" href="#orders" role="tab" aria-controls="orders" aria-selected="true"><i class="icofont-food-cart"></i> Orders</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" id="addresses-tab" data-toggle="tab" href="#addresses" role="tab" aria-controls="addresses" aria-selected="false"><i class="icofont-location-pin"></i> Addresses</a>
              </li>
            </ul>
        </div>
    </div>
</template>

<script>
import vuex from 'vuex';

export default {
  name: 'ProfileSidebar',
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
  methods: {}
}
</script>

<style lang="css" scoped></style>
