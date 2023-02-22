<template>
  <div class="col">
    <div class="login-form">
        <form @submit.prevent="register"  v-if="!showChild">
          <div class="formcontainer">
          <div>
            <p>Welcome to                <img src="/assets/jaim_logo.png" style="width:62px;" /></p>
          </div>
          <div>
            <h1 style="margin-bottom: revert;">Sign Up</h1>
          </div>
          <div class="form-group">
            <label for="email">Enter your email address</label>
            <input type="email" id="email" name="email" v-model="registerData.name" required>
             <span v-if="emailerrorMessage" class="error-message">{{emailerrorMessage}}</span>
          </div>
          <div class="form-group">
            <label for="password">Enter your password</label>
            <input type="password" id="password" name="password" v-model="registerData.password" required>
             <span v-if="passworderrorMessage" class="error-message">{{passworderrorMessage}}</span>
          </div>
          <div class="form-group">
            <label for="password">Enter your username</label>
            <input type="text" id="username" name="username" v-model="registerData.password" required>
             <span v-if="passworderrorMessage" class="error-message">{{passworderrorMessage}}</span>
          </div>
          <div>
            <p class="forgothere">Forgot Password ?</p>
          </div>
          <div class="form-group" @click="register">
            <button type="submit">Sign Up</button>
          </div>
          <div>
          <p v-if="errorMessage" class="error-message">{{errorMessage}}</p>
          </div>
          <div class="registertext">
            <p>
              Have an Account ?
            <p @click="showChildComponent" style="color: #0061d5;">
              Sign in
              </p>
            </p>
          </div>
          </div>
        </form>
      </div>
      <Login v-if="showChild" />
    </div>
</template>




<script>

import { registerUser } from '../store/api.js'

import LoginComponent from '@/components/Login.vue'


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
        }
    }
}
</script> 


<style scoped>
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
.section{
  overflow:hidden;
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
input[type="text"] {
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