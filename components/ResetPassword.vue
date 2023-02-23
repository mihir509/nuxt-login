<template>
    <div class="col-lg-6 px-0 d-flex justify-content-center align-item-center">
    <div  class="login-form signIN" >
        <form @submit.prevent="Confirm"  v-if="!showChild" class="animate__animated">
          <div class="formcontainer">
          <div class="heading-part">
            <h2 class="form-heading animate__fadeIn animate__animated">Reset your password here.</h2>
            <p class="form-p animate__fadeIn animate__animated">Please enter a new password.</p>
          </div>
          <div class="form-group mb-2 animate__fadeIn animate__animated">
            <label for="email">Enter your email address</label>
            <input type="email" id="email" name="email" v-model="loginData.email" required>
             <span v-if="emailerrorMessage" class="error-message">{{emailerrorMessage}}</span>
          </div>
          <div class="form-group animate__fadeIn animate__animated">
            <label for="password">Enter your password</label>
            <input type="password" id="password" name="password" v-model="loginData.password" required>
             <span v-if="passworderrorMessage" class="error-message">{{passworderrorMessage}}</span>
          </div>
          <div >
            <nuxt-link to="/SuccessSent">
            <button type="submit" class="submit-btn w-100 animate__fadeIn animate__animated" @click="Confirm">Confirm</button></nuxt-link>
          </div>
          </div>
        </form>
      </div>
      <!-- <SucessSentComponent v-if="showChild"  /> -->
    </div>
</template>


<script>
// import SucessSentComponent from '@/components/SucessSent.vue'


export default {
  name: 'ResetpasswordComponent',
  components:{
    
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

  }
}
</script>