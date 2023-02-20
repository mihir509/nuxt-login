<template>
<div class="register-form">
    <h2>Register</h2>
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" v-model="registerData.name" required>
        <!-- <span v-if="name === ''" class="error">{{ rules.name.message }}</span> -->
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" v-model="registerData.email" required>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" v-model="registerData.password" required>
      </div>
      <!-- <div class="form-group">
        <label for="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password" name="confirm-password" v-model="confirmPassword" required>
      </div> -->
      <div class="form-group">
        <button type="submit" @click="register">Register</button>
      </div>
       <div>
      <p v-if="successMessage" class="success-message">{{successMessage}}</p>
      </div>
      <div class="logitext">
        <p>
            <nuxt-link to="/">
                Login?
            </nuxt-link>
        </p>
      </div>
    </form>
  </div>
</template>




<script>

import { registerUser } from '../.nuxt/api.js'

export default {
    data () {
        return {
            // confirmPassword:'',
            successMessage:'',
             registerData: {
                name: '',
                email: '',
                password: ''
            },
            // rules: {
            //     name:[{required:true , message:'Name is Required'}],
            //     email:[{required:true, message:'Email is Required'}],
            //     password:[{required:true , message:'Password is Required'}]
            // }
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
    }
}
</script> 


<style scoped>
.register-form {
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

input[type="text"],
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
.logitext{
    color: #0061d5;
    cursor: pointer;
}
.success-message {
  color: green;
  font-weight: bold;
}
</style>