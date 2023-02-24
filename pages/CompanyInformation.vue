<template>
   <div class="px-0 mt-5 d-flex justify-content-center align-item-center" >
    <div class="companyinfo-form" >
        <form @submit.prevent="Companyinfo">
          <div class="formcontainer">
          <div>
            <h1 style="margin-bottom: revert;" class="animate__fadeIn animate__animated">Company Information</h1>
            <p>please Fill in your basic company or project details so that we know who you are.</p>
          </div>
          <div class="row">
            <div class="form-group col-lg-6 animate__fadeIn animate__animated">
            <label for="name">Company Name</label>
            <input type="text" id="company_name" name="company_name" v-model="registerData.company_name" required>
             <span v-if="passworderrorMessage" class="error-message">{{passworderrorMessage}}</span>
          </div>
          <div class="form-group col-lg-6 animate__fadeIn animate__animated">
            <label for="website">Website</label>
            <input type="text" id="website" name="website" v-model="registerData.website" required>
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
          <div class="form-group col-lg-6 animate__fadeIn animate__animated">
            <label for="form-select">Sub industry</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Select Industry</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="form-group col-lg-6 animate__fadeIn animate__animated">
            <label for="foundation_year">Foundation Year</label>
            <input type="text" id="foundation_year" name="foundation_year" v-model="registerData.foundation_year" required>
             <span v-if="passworderrorMessage" class="error-message">{{passworderrorMessage}}</span>
          </div>
          <div class="form-group col-lg-6 animate__fadeIn animate__animated">
            <label for="password">Listed/Non-listed</label>
            <input type="text" id="listed" name="listed" v-model="registerData.listed" required>
             <span v-if="passworderrorMessage" class="error-message">{{passworderrorMessage}}</span>
          </div>
          
          </div>
          <div class="form-group col-lg-6 animate__fadeIn animate__animated">
            <label for="username">Adddress Company</label>
            <input type="text" id="address" name="address" v-model="registerData.address" required>
             <span v-if="passworderrorMessage" class="error-message">{{passworderrorMessage}}</span>
          </div>
          <div @click="Companyinfo">
            <nuxt-link to="/VerifyEmail">
            <button type="submit" @click="Companyinfo" class="submit-btn animate__fadeIn animate__animated">save and Next</button></nuxt-link>
          </div>
          <div @click="Companyinfo">
            <nuxt-link to="/">
            <button type="submit" class="submit-draft animate__fadeIn animate__animated">save as Draft</button></nuxt-link>
          </div>
          <div>
          <p v-if="errorMessage" class="error-message">{{errorMessage}}</p>
          </div>
          </div>
        </form>
      </div>
    </div>
</template>

<script>

import { logoutUser } from '../store/api.js'


export default {
    name:'CompanyInformationPage',
    data (){
        return {
            errorMessage:'',
            passworderrorMessage:'',
            emailerrorMessage:'',
            registerData: {
                company_name: '',
                website: '',
                foundation_year:'',
                listed:''
            }
        }
    },
    methods: {
      async Companyinfo() {
        //
      }
}
}
</script>

<style scoped>
.companyinfo-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.companyinfo-form form {
  display: flex;
  flex-direction: column;
  max-width: 652px;
  max-height: 748px;
  min-width: 1500px;
  min-height: 864px;
  height: auto;
  width: auto;
  justify-content: center;
  background: #FFFFFF;
  box-shadow: 0px 4px 35px rgba(0, 0, 0, 0.08);
  border-radius: 40px;

}

.companyinfo-form h1 {
  margin: 0 0 1rem; 
  text-align: center;
}
.companyinfo-form p {
  margin: 0 0 1rem;
  text-align: center;
}

.companyinfo-form .form-group {
  display: flex;
  flex-direction: column;
}

.companyinfo-form label {
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.companyinfo-form input,
.companyinfo-form .form-select {
  padding: 0.9rem !important;
  border: 1px solid !important;
  border-radius: 10px !important;
  font-size: 1rem !important;
  width: 100%;
  margin-bottom: 20px;
}
.companyinfo-form .submit-btn {
  padding: 0.8rem;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  margin-top: 20px;
  background: #0067FF;
  box-shadow: 0px 4px 19px rgba(30, 99, 233, 0.3);
  border-radius: 10px;
  float: right;
  margin-right: 20px;
}


.companyinfo-form .submit-draft {
  padding: 0.8rem;
  border: none;
  color: #0067FF;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  margin-top: 20px;
  box-shadow: 0px 4px 19px rgba(30, 99, 233, 0.3);
  border-radius: 10px;
  float: right;
  background:  #fff;
  margin-right: 20px;
  border: 1px solid #0077ff !important;

}
.companyinfo-form .submit-btn:hover {
  background-color: #0061d5;
}
</style>