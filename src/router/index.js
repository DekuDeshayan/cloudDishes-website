import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/pages/Home.vue';
import About from '../views/pages/About.vue';
import NotFound from '../views/errors/404.vue';
import Unauthorized from '../views/errors/Unauthorized.vue';
import Profile from '../views/pages/Profile.vue';
import Login from '../views/pages/Login.vue';
import Register from '../views/pages/Register.vue';
import Role from "../models/enums/Role";
import Store from "../store/index";
import RestaurantListing from "../views/pages/RestaurantsListing.vue";
import Restaurant from "../views/pages/Restaurant.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta : {roles : [Role.CLIENT]},
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/restaurants",
    name: "restaurants",
    component: RestaurantListing,
  },
  {
    path: "/restaurant",
    name: "restaurant",
    component: Restaurant,
  },
  {
    path: "/404",
    name : "notfound",
    component: NotFound,
  },
  {
    path: "/register",
    name : "register",
    component: Register,
  },
  {
    name : "about",
    path: "/about",
    component: About,
  },
  {
    name : "401",
    path: "/401",
    component: Unauthorized,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const {roles} = to.meta;
  const currentUser = Store.getters['currentUser'];

  if(roles?.length){
    if (!currentUser){
      return next({path: '/login'});
    }

    if(!roles.includes(currentUser.role)){
      return next({path : '/401'})
    }
  }
  
  next();
});



export default router;
