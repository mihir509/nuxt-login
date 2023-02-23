<template>
    <div class="section">
      <div class="row">
          <div class="col-lg-6 px-0">
              <div class="leftivestorportal">
          
            <div>
            <img src="/assets/jaim_logo.png" />
        </div>
          <div class="mx-auto">
            <img src="/assets/computer-security-with-login-password-padlock_prev_ui.png"  />
          </div>
         
        </div>
        </div>
        <GetlinkComponent  />
      </div>
      </div>
    </template>
<script>
  
import GetlinkComponent from '@/components/Getlink.vue'

export default {
    name:'ForgotPage',
    components: {
      GetlinkComponent
    },
    data () {
      return {
        //showChild: true,
      }
    },
    methods : {
    //
    }
}
</script>