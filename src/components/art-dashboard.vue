<template>
  <div class="art-dashboard">
    <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-body">
           
            <div v-if="user" class="alert alert-success" role="alert">Здравствуйте, {{user.data.displayName}}</div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";




export default {
  name: "Dashboard",
  components: {
    
  
    
  },

  props: {},
  data() {
    return {
     
    };
  },
   computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },
  methods: {}
};
</script>

<style>
</style>
