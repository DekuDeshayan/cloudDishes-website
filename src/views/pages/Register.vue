<template>
  <div class="container-fluid">
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
                      <h3 class="login-heading mb-4">Criar nova Conta</h3>
                      <form @submit.prevent="handleRegister">
                        <div class="form-label-group">
                            <input v-model="formData.first_name" type="text" :class="`form-control ${v$.formData.first_name.$errors.length ? 'is-invalid' : ''}`" placeholder="Primeiro Nome" id="first_name" name="first_name"/>
                            <label for="first_name">Primeiro Nome</label>
                        </div>
                          <div class="input-errors" v-for="error of v$.formData.first_name.$errors" :key="error.$uid">
                            <span class="inval">{{ error.$message }}</span>
                        </div>
                        <div class="form-label-group">
                            <input v-model="formData.surname" type="text" :class="`form-control ${v$.formData.surname.$errors.length ? 'is-invalid' : ''}`" placeholder="Apelido" id="surname" name="surname"/>
                            <label for="surname">Apelido</label>
                        </div>
                          <div class="input-errors" v-for="error of v$.formData.surname.$errors" :key="error.$uid">
                            <span class="inval">{{ error.$message }}</span>
                        </div>
                        <div class="form-label-group">
                            <input v-model="formData.email" type="text" :class="`form-control ${v$.formData.email.$errors.length ? 'is-invalid' : ''}`" placeholder="Informe o seu  Email" id="email" name="email"/>
                            <label for="email">Email</label>
                        </div>
                          <div class="input-errors" v-for="error of v$.formData.email.$errors" :key="error.$uid">
                            <span class="inval">{{ error.$message }}</span>
                        </div>
                        <div class="form-label-group">
                            <input v-model="formData.username" type="text" :class="`form-control ${v$.formData.username.$errors.length ? 'is-invalid' : ''}`" placeholder="Nome de Utilizador" id="username" name="username"/>
                            <label for="username">Nome de Utilizador</label>
                        </div>
                        <div class="input-errors" v-for="error of v$.formData.username.$errors" :key="error.$uid">
                            <span class="inval">{{ error.$message }}</span>
                        </div>
                        <label>Genero</label>
                        <div class="form-label-group">
                            <select v-model="formData.gender" type="text" :class="`custom-select ${v$.formData.gender.$errors.length ? 'is-invalid' : ''}`"  id="gender" name="gender">
                              <option selected disabled> Escolha o Genero</option>
                              <option value="F">Feminino</option>
                              <option value="M">Masculino</option>
                            </select>
                        </div>
                        <div class="input-errors" v-for="error of v$.formData.gender.$errors" :key="error.$uid">
                            <span class="inval">{{ error.$message }}</span>
                        </div>
                        <div class="form-label-group">
                            <input v-model="formData.password" type="password" :class="`form-control ${v$.formData.password.$errors.length ? 'is-invalid' : ''}`" placeholder="Informe a sua Senha" id="password" name="password">
                            <label for="password">Senha</label>
                        </div>
                        <div class="input-errors" v-for="error of v$.formData.password.$errors" :key="error.$uid">
                            <span class="inval">{{ error.$message }}</span>
                        </div>
                        <div class="form-label-group">
                            <input v-model="passwdconfirm" type="text" :class="`form-control ${v$.formData.password.$errors.length ? 'is-invalid' : ''}`"   placeholder="Confirmar a senha"  name="passwdconfirm" id="passwdconfirm">
                            <label for="password">Confirmar senha</label>
                        </div>
                        <div class="input-errors mb-3" v-for="error of v$.passwdconfirm.$errors" :key="error.$uid">
                            <span class="inval">{{ error.$message }}</span>
                        </div>                        
                        <button class="btn btn-lg btn-outline-primary btn-block btn-login text-uppercase font-weight-bold mb-2" @click="submitted = true" :disabled="loading">Criar Conta</button>
                        <div class="text-center pt-3">
                          Já tem uma conta? <router-link class="font-weight-bold" to="/login">Fazer login</router-link>
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
import {required, helpers, email, minLength, alpha, alphaNum,sameAs} from '@vuelidate/validators';
import vuex from "vuex";
import CustomerService from "../../services/CustomerService";
import Role from '../../models/enums/Role';

// import osahan_custom_js from  '../../../public/plugins/osahan/js/custom';

export default {
   setup () {
    return { v$: useVuelidate() }
  },
  name: 'Register',
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
    // osahan_custom_js();
     if(this.currentUser?.role === Role.CLIENT && this.currentUser?.username) {
      this.$router.push('/profile');
    }
  },
  beforeDestroy() {},
  validations() {
    return {
      formData: {
       first_name: {
           required: helpers.withMessage('Campo de Nome obrigatório', required),
           minLength: helpers.withMessage('O nome deve conter no mínimo 3 caracteres', minLength(3)),
           alpha
        },
        surname: { 
          required: helpers.withMessage('O campo do apelido é obrigatório', required),
          minLength: helpers.withMessage('O apelido deve conter no mínimo 3 caracteres', minLength(3)),
          alpha
        },
        username: { 
          required: helpers.withMessage('Nome de utilizador é obrigatório', required),
          minLength: helpers.withMessage('O nome do utilizador deve conter no mínimo 3 caracteres', minLength(3)),
          alphaNum
         },
        email: {
          email
        },
        gender: { 
          required: helpers.withMessage('Campo de Gênero obrigatório', required)
        },
        password: { 
        required: helpers.withMessage('Senha obrigatória', required),
        minLength: helpers.withMessage('A senha deve conter no mínimo 8 caracteres', minLength(8)),
        alphaNum
        },
      },
        passwdconfirm: {
          sameAs:  helpers.withMessage('Este campo deve ser igual ao campo da Senha.', sameAs(this.formData.password)),
        }
    };
  },
  methods: {
     async handleRegister() {
      
      const result = await this.v$.$validate()  
      if (!result) {
       return
      }

      this.loading = true;

      CustomerService.register(this.formData).then((response) =>{
        //after user register we must redirect the user to the login page...
        this.$router.push('/login');
        console.log(response.data)

      }).catch((err)=>{

        console.log(err);
        //409 httpconflict status of username from springBoot, when trying to register an existing one
        if(err?.response?.status === 409){
          this.errorMessage = 'Username already exists';
        }else{
          this.errorMessage = 'Unexpected error ocurred';
        }

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
