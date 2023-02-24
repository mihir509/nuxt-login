<template>
  <div class="col-lg-6 px-0 d-flex justify-content-center align-item-center" >
    <div class="login-form signUp" >
        <form @submit.prevent="register"  v-if="!showChild" >
          <div class="formcontainer">
            <div class="img-container">
            <p>Welcome to <img src="/assets/jaim_logo.png" class="img-fluid mx-2 animate__fadeIn animate__animated" /></p>
          </div>
          <div>
            <h1 style="margin-bottom: revert;" class="animate__fadeIn animate__animated">Sign Up</h1>
          </div>
          <div class="row">
          <div class="form-group col-lg-12 animate__fadeIn animate__animated">
            <label for="email">Enter your email address</label>
            <input type="email" id="email" name="email" v-model="registerData.name" required>
             <span v-if="emailerrorMessage" class="error-message">{{emailerrorMessage}}</span>
          </div>
          <div class="form-group col-lg-6 animate__fadeIn animate__animated">
            <label for="username">username</label>
            <input type="text" id="username" name="username" v-model="registerData.username" required>
             <span v-if="passworderrorMessage" class="error-message">{{passworderrorMessage}}</span>
          </div>
          <div class="form-group col-lg-6 animate__fadeIn animate__animated">
            <label for="number">contact number</label>
            <input type="text" id="number" name="number" v-model="registerData.number" required>
             <span v-if="passworderrorMessage" class="error-message">{{passworderrorMessage}}</span>
          </div>
          <div class="form-group col-lg-6 animate__fadeIn animate__animated">
            <label for="password">Enter your password</label>
            <input type="password" id="password" name="password" v-model="registerData.password" required>
             <span v-if="passworderrorMessage" class="error-message">{{passworderrorMessage}}</span>
          </div>
          <div class="form-group col-lg-6 animate__fadeIn animate__animated">
            <label for="form-select">Select industry</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Select Industry</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          </div>
          
          <div @click="register">
            <nuxt-link to="/VerifyEmail">
            <button type="submit" class="submit-btn w-100 animate__fadeIn animate__animated">Sign Up</button></nuxt-link>
          </div>
          <div>
          <p v-if="errorMessage" class="error-message">{{errorMessage}}</p>
          </div>
          <div class="registertext mt-2 animate__fadeIn animate__animated">
            <span>
              Have an Account ?
            <span @click="showChildComponent" class="text-blue mx-2">
              Sign in
              </span>
            </span>
          </div>
          </div>
        </form>
      </div>
      <Login v-if="showChild"    class="login"/>
    </div>
</template>




<script>

import { registerUser } from '../store/api.js'

import LoginComponent from '@/components/Login.vue'
// import '@/static/assets/global.css'


export default {
  name: 'Register',
  components: {
    LoginComponent
  },
    data () {
        return {
            showChild: false,
            successMessage:'',
            errorMessage:'',
            emailerrorMessage:'',
            passworderrorMessage:'',
             registerData: {
                name: '',
                email: '',
                password: '',
                number: '',
            },
        }
    },
    methods:{
      async register() {
        try {
            const response = await registerUser(this.registerData)
            this.successMessage = ' User Register successfully '
        } catch (error) {
            console.error(error)
        }
      },
      async showChildComponent() {
        this.showChild = true
        this.isVisible = !this.isVisible
        }
    }
}
</script> 


<style scoped>

</style>