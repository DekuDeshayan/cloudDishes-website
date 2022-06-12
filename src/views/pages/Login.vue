<template>
  <div class="container-fluid pm">
         <div class="row no-gutter">
            <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
            <div class="col-md-8 col-lg-6">
               <div class="login d-flex align-items-center py-5">
                  <div class="container">
                     <div class="row">
                        <div class="col-md-9 col-lg-8 mx-auto pl-5 pr-5">
                            <div v-if="errorMessage" class="alert alert-danger text-center">
                              {{errorMessage}}
                           </div>
                           <h3 class="login-heading mb-4">Bem-vindo de volta!</h3>
                           <form @submit.prevent="handlelogin">
                              <div class="form-label-group">
                                 <input v-model="formData.username" type="text" :class="`form-control ${v$.formData.username.$errors.length ? 'is-invalid' : ''}`" placeholder="Nome de Utilizador" id="username" name="username"/>
                                 <label for="username">Utilizador</label>
                              </div>
                              <div class="input-errors" v-for="error of v$.formData.username.$errors" :key="error.$uid">
                                 <span class="inval">{{ error.$message }}</span>
                              </div>
                              <div class="form-label-group">
                                 <input v-model="formData.password" type="password" :class="`form-control ${v$.formData.password.$errors.length ? 'is-invalid' : ''}`" placeholder="Informe a sua Senha" id="password" name="password">
                                 <label for="password">Senha</label>
                              </div>
                              <div class="input-errors" v-for="error of v$.formData.password.$errors" :key="error.$uid">
                                 <span class="inval">{{ error.$message }}</span>
                              </div>
                              <div class="custom-control custom-checkbox mb-3">
                                 <input type="checkbox" class="custom-control-input" id="customCheck1">
                                 <label class="custom-control-label" for="customCheck1">Lembrar palavra-passe</label>
                              </div>
                              <button class="btn btn-lg btn-outline-primary btn-block btn-login text-uppercase font-weight-bold mb-2" @click="submitted = true" :disabled="loading">Entrar</button>
                              <div class="text-center pt-3">
                                 Não tens uma conta? <router-link class="font-weight-bold" to="/register">Criar Conta</router-link>
                              </div>
                           </form>
                           <hr class="my-4">
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
  </div>

</template>

<script>
import useVuelidate from '@vuelidate/core';
import {required, helpers} from '@vuelidate/validators';
import vuex from "vuex";
import UserService from "../../services/UserService";
import Role from '../../models/enums/Role';


export default {
   setup () {
    return { v$: useVuelidate() }
  },
  name: 'Login',
  components: {},
  props: {},
  data() {
    return {
       formData : {
        id:this.id,
        first_name:this.first_name,
        surname:this.surname,
        username:this.username,
        email:this.email, 
        gender:this.gender,
        password:this.password,
        role:this.role, 
        token:this.token
      },
      loading : false,
      submitted : false,
      errorMessage : '',
    };
  },
   computed : {
    ...vuex.mapGetters(['currentUser']),
  },
  mounted() {
     if(this.currentUser?.role === Role.CLIENT && this.currentUser?.username) {
      this.$router.push('/profile');
    }
  },
  beforeDestroy() {},
  validations() {
    return {
      formData: {
        username: { 
          required: helpers.withMessage('O Nome de Utilizador é Obrigatório', required),
        },
        password: { 
         required: helpers.withMessage('A senha é Obrigatória', required),
        }
      }
    };
  },
  methods: {
     ...vuex.mapActions(['updateUser']),
     ...vuex.mapActions(['clearUser']),
    dumpNonClientUsers() {
      //clear user fom vuex
      this.clearUser();
      this.$router.push('/login');
      this.errorMessage="Dados inválidos";
    },
     async handlelogin() {
      
      const result = await this.v$.$validate()  
      if (!result) {
       return
      }

      this.loading = true;

      UserService.login(this.formData).then((response) =>{
        //update user in vuex
        this.updateUser(response.data);
         if(this.currentUser?.role !== Role.CLIENT && this.currentUser?.username){
           this.dumpNonClientUsers();
         }else if(this.currentUser?.role === Role.CLIENT && this.currentUser?.username){
           this.$router.push('profile');
         }

      }).catch((err)=>{
        console.log(err);
        this.errorMessage = "Dados Inválidos.";
      }).then(()=>this.loading=false);

    }
  },
}
</script>

<style lang="css" scoped>

.bg-image{ 
background-image: url('../../../public/plugins/osahan/img/login-bg.png');
background-size: cover;
background-position: center;
}

.pm{
  padding-left: 13px;
}

.inval{
width: 100%;
margin-top: .25rem;
font-size: 80%;
color: #dc3545;
}
.input-errors{
  margin-top: -18px;
}
</style>
