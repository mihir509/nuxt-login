<template>
  <div class="col-lg-6 px-0 d-flex justify-content-center align-item-center" >
    <div class="login-form signUp" >
        <form @submit.prevent="register"  v-if="!showChild">
          <div class="formcontainer">
            <div class="img-container">
            <p>Welcome to <img src="/assets/jaim_logo.png" class="img-fluid mx-2" /></p>
          </div>
          <div>
            <h1 style="margin-bottom: revert;">Sign Up</h1>
          </div>
          <div class="row">
          <div class="form-group col-lg-12">
            <label for="email">Enter your email address</label>
            <input type="email" id="email" name="email" v-model="registerData.name" required>
             <span v-if="emailerrorMessage" class="error-message">{{emailerrorMessage}}</span>
          </div>
          <div class="form-group col-lg-6">
            <label for="username">Enter your username</label>
            <input type="text" id="username" name="username" v-model="registerData.password" required>
             <span v-if="passworderrorMessage" class="error-message">{{passworderrorMessage}}</span>
          </div>
          <div class="form-group col-lg-6">
            <label for="password">Enter your contact number</label>
            <input type="text" id="number" name="number" v-model="registerData.password" required>
             <span v-if="passworderrorMessage" class="error-message">{{passworderrorMessage}}</span>
          </div>
          <div class="form-group col-lg-6">
            <label for="password">Enter your password</label>
            <input type="password" id="password" name="password" v-model="registerData.password" required>
             <span v-if="passworderrorMessage" class="error-message">{{passworderrorMessage}}</span>
          </div>
          <div class="form-group col-lg-6">
            <label for="password">Select your industry</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Select Industry</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
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
            <p @click="showChildComponent" class="text-blue mx-2">
              Sign in
              </p>
            </p>
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
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}

.img-container p{
  font-size:1.4rem;
}
.img-container img{
  width:18%;
}

h1 {
    /* font-family: 'Poppins', sans-serif; */
      font-size:3rem;
      color: #272B3D;
      font-weight:500;
}
form {
/* margin-top: 100px; */
display: flex;
flex-direction: column;
width: 652px;
height: 748px;
/* left: 783px;
top: 72px; */
background: #FFFFFF;
box-shadow: 0px 4px 35px rgba(0, 0, 0, 0.08);
border-radius: 40px;
/* margin-right: 80px;/ */
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
  /* width: 100%; */
}

label {
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

input, .form-select{
 padding: 0.9rem;
    border: 1px solid #0077ff;
    border-radius: 10px;
    font-size: 1rem;
    width: 100%;
    margin-bottom:20px;
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
/* .slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s ease;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(-110px);
  transition:transform 2s ease;
  opacity: 1;
} */

/* .signIN.active form{
  transform:translateX(0px);
  transition:transform 2s ease;
} */
</style>