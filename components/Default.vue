<!-- Please remove this file from your project -->
<template>
<div class="section">
  <div class="row">
<div class="col-lg-6 px-0">
<div class="leftivestorportal">
      
        <div>
        <img src="/assets/jaim_logo.png" />
        <div class="investor">
        <p>Investor Portal</p>
      </div>
    </div>
      <div class="mx-auto">
        <img src="/assets/money-tree-3d-render-concept-with-potted-plant_prev_ui.png"  />
      </div>
     
    </div>
    </div>
    <Login />
  </div>
  </div>
</template>



<script>
import { loginUser } from '../store/api.js'
import Login from '@/components/Login.vue'


export default {
  name: 'Default',
  components:{
    Login
  },
  data() {
    return {
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
           this.errorMessage = 'Incorrect username or password. Please try again.'
        }else{
          this.$toast.success('Login successful!')
          this.$router.push('dashboard');
        }
      } catch (error) {
       
        console.error(error);
      }
    },
     }
}
</script>


<style>

.text-blue{
  color:#0067FF;
}

/* * {
    overflow: hidden;

} */
/* .login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height:100%;
} */
h1 {
    /* font-family: 'Poppins', sans-serif; */
    font-size:xxx-large;
}
/* form {
display: flex;
flex-direction: column;
width: 539px;
height: 748px;
left: 783px;
top: 72px;
background: #FFFFFF;
box-shadow: 0px 4px 35px rgba(0, 0, 0, 0.08);
border-radius: 40px;
} */

/* h2 {
  margin: 0 0 1rem;
  font-size: 2rem;
  font-weight: 400;
} */

/* .form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;
} */

/* label {
  margin-bottom: 0.5rem;
  font-size: 1rem;
} */

/* input[type="email"]{
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
} */
/* 
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
} */
.leftivestorportal{ 
  background-color: #0067FF;
  display:flex;
  padding:80px 150px;
  height:100vh;
  flex-direction:column;
  justify-content:space-between;
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