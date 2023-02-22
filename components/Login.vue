<template>
    <div class="col-lg-6 px-0 d-flex justify-content-center align-item-center">
    <div  class="login-form signIN" >
        <form @submit.prevent="login" v-if="!showChild" class="animate__animated">
          <div class="formcontainer">
          <div class="img-container">
            <p>Welcome to <img src="/assets/jaim_logo.png" class="img-fluid mx-2" /></p>
          </div>
          <div>
            <h1 style="margin-bottom: revert;">Sign In</h1>
          </div>
          <div class="form-group">
            <label for="email">Enter your email address</label>
            <input type="email" id="email" name="email" v-model="loginData.email" required>
             <span v-if="emailerrorMessage" class="error-message">{{emailerrorMessage}}</span>
          </div>
          <div class="form-group">
            <label for="password">Enter your password</label>
            <input type="password" id="password" name="password" v-model="loginData.password" required>
             <span v-if="passworderrorMessage" class="error-message">{{passworderrorMessage}}</span>
          </div>
          <div>
            <p class="forgothere text-blue">Forgot Password ?</p>
          </div>
          <div class="form-group" @click="login">
            <button type="submit">Sign in</button>
          </div>
          <div>
          <p v-if="errorMessage" class="error-message">{{errorMessage}}</p>
          </div>
          <div class="registertext">
            <p>
              Have an Account ?
            <p @click="showChildComponent" class="mx-2 text-blue">
              Sign up
              </p>
            </p>
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


export default {
  name: 'LoginComponent',
  components:{
    Register
  },
  data() {
    return {
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
          this.$router.push('dashboard');
        }
      } catch (error) {
       
        console.error(error);
      }
    },
    async showChildComponent() {
      this.showChild = true
    }
  }
}
</script>


<style>

/* * {
    overflow: hidden;

} */
.img-container p{
  font-size:1.4rem;
}
.img-container img{
  width:18%;
}
.section{
  overflow:hidden;
}
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height:100%; */
}
h1 {
    /* font-family: 'Poppins', sans-serif; */
      font-size:3rem;
      color: #272B3D;
      font-weight:500;
}
form {

display: flex;
flex-direction: column;
width: 652px;
height: 748px;
justify-content:center;
background: #FFFFFF;
box-shadow: 0px 4px 35px rgba(0, 0, 0, 0.08);
border-radius: 40px;
/* transform:translateX(-100px);
transition:all 2s ease; */

}

h2 {
  margin: 0 0 1rem;
  font-size: 2rem;
  font-weight: 400;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;
}

label {
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

input[type="email"]{
 padding: 0.9rem;
    border: 1px solid #0077ff;
    border-radius: 10px;
    font-size: 1rem;
    width: 100%;
    margin-bottom:20px;
}
input[type="password"] {
    padding: 0.9rem;
    border: 1px solid #0077ff;
    border-radius: 10px;
    font-size: 1rem;
    width: 100%;
}

button[type="submit"] {
  padding: 0.8rem;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  margin-top:20px;
  background: #0067FF;
  box-shadow: 0px 4px 19px rgba(30, 99, 233, 0.3);
  border-radius: 10px;
}

button[type="submit"]:hover {
  background-color: #0061d5;
}
.registertext {
  cursor: pointer;
  align-items: center;
  justify-content: center;
  display: flex;
}
.forgothere{
  color: #0061d5;
  cursor: pointer;
  float: right;
  margin-top:auto;

}
.error-message {
  color: #f00;
  font-weight: bold;
}
.leftivestorportal{ 
  background-color: #0067FF;
  display:flex;
  padding:100px;
  height:100vh;
}
.investor{
  color:white;
  font-weight:bold;
  font-size: xxx-large;
  font-family: 'Poppins', sans-serif;
  margin-top:30px;
}
.formcontainer{
  padding:90px;
}
/* .singUp.active form{
  transform:translateX(100px);
  transition:transform 2s ease;
} */
</style>