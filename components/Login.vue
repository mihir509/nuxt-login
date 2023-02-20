<!-- Please remove this file from your project -->
<template>
 <div class="login-form">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" v-model="loginData.email" required>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" v-model="loginData.password" required>
      </div>
      <div class="form-group" @click="login">
        <button type="submit">Login</button>
      </div>
      <div>
      <p v-if="errorMessage" class="error-message">{{errorMessage}}</p>
      </div>
      <div class="forgothere">
        <p>Forgot Password?</p>
      </div>
      <div class="registertext">
        <p>
         <nuxt-link to="/register">
          Register Here?
          </nuxt-link>
        </p>
      </div>
    </form>
  </div>
</template>



<script>

import { loginUser } from '../.nuxt/api.js'


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
        if(response){
          this.$router.push('dashboard');
        }
      } catch (error) {
      this.errorMessage = 'Incorrect username or password. Please try again.'

        console.error(error)
      }
    }
  }
}
</script>


<style>
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7f7f7;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
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

input[type="email"],
input[type="password"] {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;
}

button[type="submit"] {
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  background-color: #0077ff;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

button[type="submit"]:hover {
  background-color: #0061d5;
}
.registertext {
  color: #0061d5;
  cursor: pointer;
}
.forgothere{
  color: #0061d5;
  cursor: pointer;
}
.error-message {
  color: #f00;
  font-weight: bold;
}
</style>