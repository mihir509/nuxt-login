<!-- Please remove this file from your project -->
<template>
<div class="section">
  <div class="row">
<div class="col">
<div class="leftivestorportal">
      <div>
        <img src="/assets/jaim_logo.png" />
        <div class="investor">
        <p>Investor Portal</p>
      </div>
      <div>
        <img src="/assets/money-tree-3d-render-concept-with-potted-plant_prev_ui.png" style="
      margin-left: 80px;
      margin-top: 50px;" />
      </div>
      </div>
    </div>
    </div>
    <div class="col">
    <div class="login-form">
        <form @submit.prevent="login">
          <div class="formcontainer">
          <div>
            <p>Welcome to                <img src="/assets/jaim_logo.png" style="width:62px;" /></p>
          </div>
          <div>
            <h1 style="margin-bottom: revert;">Sign In</h1>
          </div>
          <div class="form-group">
            <label for="email">Enter your email address</label>
            <input type="email" id="email" name="email" v-model="loginData.email" required>
          </div>
          <div class="form-group">
            <label for="password">Enter your password</label>
            <input type="password" id="password" name="password" v-model="loginData.password" required>
          </div>
          <div>
            <p class="forgothere">Forgot Password ?</p>
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
            <nuxt-link to="/register" style="color: #0061d5;">
              Sign up
              </nuxt-link>
            </p>
          </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  </div>
</template>



<script>

import { loginUser } from '../store/api.js'


export default {
  name: 'LoginPage',
  data() {
    return {
      errorMessage:'',
      loginData: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
  
    async login() {
      try {
        const response = await loginUser(this.loginData)
        // console.log();
        // if(email === this.loginData)
        if(response.data.success === false){
           this.errorMessage = 'Incorrect username or password. Please try again.'
        }else{
          this.$router.push('dashboard');
        }
      } catch (error) {
       
        console.error(error);
      }
    }
  }
}
</script>


<style>
*, *::before, *::after {
    box-sizing: none;
}
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1 {
    font-family: 'Poppins', sans-serif;
    font-size:xxx-large;
}
form {
margin-top: 100px;
display: flex;
flex-direction: column;
width: 539px;
height: 748px;
left: 783px;
top: 72px;
background: #FFFFFF;
box-shadow: 0px 4px 35px rgba(0, 0, 0, 0.08);
border-radius: 40px;
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
  border-radius: 5px;
  background-color: #0077ff;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  margin-top:20px;
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
  padding:50px;
}

</style>