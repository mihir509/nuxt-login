<template>
    <div class="col-lg-6 col-md-12 col-12 px-0 d-flex justify-content-center align-item-center">
    <div  class="login-form signIN" >
        <form @submit.prevent="login" v-if="!showChild" class="animate__animated">
          <div class="formcontainer">
          <div class="img-container animate__fadeIn animate__animated">
            <p>Welcome to <img src="/assets/jaim_logo.png" class="img-fluid mx-2" /></p>
          </div>
          <div>
            <h1 style="margin-bottom: revert;" class="animate__fadeIn animate__animated">Sign In</h1>
          </div>
          <div class="form-group animate__fadeIn animate__animated">
            <label for="email">Enter your email address</label>
            <input type="email" id="email" name="email" v-model="loginData.email" required>
             <span v-if="emailerrorMessage" class="error-message">{{emailerrorMessage}}</span>
          </div>
          <div class="form-group animate__fadeIn animate__animated">
            <label for="password">Enter your password</label>
            <input type="password" id="password" name="password" v-model="loginData.password" required>
             <span v-if="passworderrorMessage" class="error-message">{{passworderrorMessage}}</span>
          </div>
          <div>
            <nuxt-link to="/ForgotPassword">
              <p class="forgothere text-blue animate__fadeIn animate__animated">Forgot Password ?</p>
            </nuxt-link>
           
          </div>
          <div @click="login">
            <button type="submit" class="submit-btn w-100 animate__fadeIn animate__animated">Sign in</button>
          </div>
          <div>
          <p v-if="errorMessage" class="error-message">{{errorMessage}}</p>
          </div>
          <div class="registertext mt-2 animate__fadeIn animate__animated">
            <span>
              Have an Account ?
              <span @click="showChildComponent" class="mx-2 text-blue">
              Sign up
              </span>
            </span>
          </div>
          </div>
        </form>
      </div>
      <Register v-if="showChild" class="register"  />
    </div>
</template>

<script>

import Register from '@/components/Register.vue'
import { loginUser } from '../store/api.js'
import 'animate.css';
// import '@/static/assets/global.css'


export default {
  name: 'LoginComponent',
  components:{
    Register
  },
  data() {
    return {
      // showSecondChild: false,
      showChild: false,
      errorMessage:'',
      emailerrorMessage:'',
      passworderrorMessage:'',
      loginData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async login() {
      try {
        const response = await loginUser(this.loginData)
        if(this.loginData.email === ''){
          this.emailerrorMessage = 'Please enter your username'
          return false
        }else{
          this.emailerrorMessage = ''
        }
        if(this.loginData.password === ''){
          this.passworderrorMessage = 'please enter your password'
          return false
        }else{
          this.passworderrorMessage = ''
        }
        if(response.data.success === false){
          console.log(response);
           this.errorMessage = 'Incorrect username or password. Please try again.'
        }else{
          this.$toast.success('Login successful!')
          this.$router.push('CompanyInformation');
        }
      } catch (error) {
       
        console.error(error);
      }
    },
    async showChildComponent() {
      this.showChild = true
    },

  }
}
</script>


<style>


</style>