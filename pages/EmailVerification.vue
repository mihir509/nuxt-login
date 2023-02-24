<template>

<div class="section">
      <div class="row">
          <div class="col-lg-6 px-0">
              <div class="leftivestorportal">
          
            <div>
            <img src="/assets/jaim_logo.png" />
        </div>
          <div class="mx-auto">
            <img src="/assets/Email_verify.png"  />
          </div>
         
        </div>
        </div>
        <div class="col-lg-6 px-0 d-flex justify-content-center align-item-center">
<div  class="login-form successpage" >
    <form @submit.prevent="Confirm"  v-if="!showChild" class="animate__animated">
      <div class="formcontainer">
      <div class="success-container">
        <h2 class="mb-4 form-heading animate__fadeIn animate__animated">Email Verification</h2>
        <p class="mb-5 animate__fadeIn animate__animated">We Have emailed you just now</p>
        <p class="mb-4 animate__fadeIn animate__animated">We have sent a code at your email ‘ xyz12@gmail.com’. Please type it here and verify that it’s really you.</p>
      </div>
      <div class="otp-input">
     <input type="text" maxlength="1" />
     <input type="text" maxlength="1" />
     <input type="text" maxlength="1" />
     <input type="text" maxlength="1" />
     </div>
      <div>
        <button type="submit" class="submit-btn w-100 animate__fadeIn animate__animated" @click="showchildComponent">Verify</button>
      </div>
      <div class="text-center mt-3"> 
        <nuxt-link to="/VerifyEmail">
          <button type="submit" class="resend-btn animate__fadeIn animate__animated">Resend Code</button>
        </nuxt-link>
      </div>
      </div>
    </form>
  </div>
  <EmailVerifySuccessComponent v-if="showChild" />
</div>
</div>
</div>
   
</template>



<script>

import EmailVerifySuccessComponent from '~/components/EmailVerifySuccess.vue'



export default {
name: 'EmailVerificationComponent',
components:{
 EmailVerifySuccessComponent,
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
async Confirm() {
//   try {
//     const response = await loginUser(this.loginData)
//     if(this.loginData.email === ''){
//       this.emailerrorMessage = 'Please enter your username'
//       return false
//     }else{
//       this.emailerrorMessage = ''
//     }
//     if(this.loginData.password === ''){
//       this.passworderrorMessage = 'please enter your password'
//       return false
//     }else{
//       this.passworderrorMessage = ''
//     }
//     if(response.data.success === false){
//       console.log(response);
//        this.errorMessage = 'Incorrect username or password. Please try again.'
//     }else{
//       this.$toast.success('Login successful!')
//       this.$router.push('dashboard');
//     }
//   } catch (error) {
   
//     console.error(error);
//   }
},
async showchildComponent() {
 this.showChild = true
},
},

}
</script>

<style scoped>
.otp-input {
display: flex;
justify-content: space-between;
align-items: center;
width: 200px;
height: 50px;
font-size: 24px;
font-weight: bold;
letter-spacing: 10px;
}

.otp-input input[type="text"] {
width: 40px;
height: 40px;
border-radius: 50%;
border: none;
outline: none;
background-color: #f2f2f2;
text-align: center;
font-size: inherit;
font-weight: inherit;
letter-spacing: inherit;
}
</style>