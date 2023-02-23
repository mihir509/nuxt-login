<template>
    <div class="col-lg-6 px-0 d-flex justify-content-center align-item-center">
    <div  class="login-form forgotpage" >
        <form @submit.prevent="GetRecoverylink" v-if="!showChild" class="animate__animated">
          <div class="formcontainer">
          <div class="heading-part">
            <h2 class="form-heading animate__fadeIn animate__animated">Forgot your password ?</h2>
            <p class="form-p animate__fadeIn animate__animated">We need your email to reset your password.</p>
          </div>
          <div class="form-group animate__fadeIn animate__animated">
            <label for="email">Enter your email address</label>
            <input type="email" id="email" name="email" v-model="loginData.email" required>
             <span v-if="emailerrorMessage" class="error-message">{{emailerrorMessage}}</span>
          </div>
          
          <div  @click="GetRecoverylink">
            <button type="submit" class="submit-btn w-100 animate__fadeIn animate__animated">Get Recovery Link</button>
          </div>
          </div>
        </form>
      </div>
      <ResetpasswordComponent v-if="showChild" />
    </div>
</template>


<script>
import ResetpasswordComponent from '@/components/ResetPassword.vue'


export default {
  name: 'GetlinkComponent',
  components:{
    ResetpasswordComponent
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
    async GetRecoverylink() {
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
    this.showChild = true
    },
    // async showChildComponent() {
    //   this.showChild = true
    // },

  }
}
</script>