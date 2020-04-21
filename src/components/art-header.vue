<template>
  <div class="art-header">
    <div class="head">
    <router-link :to="{name: 'Main'}">
      <img src="../assets/logo2.png" alt="logo" />
    </router-link>
    <ul>
      <art-nav />
    </ul>
    </div>
  </div>
</template>

<script>
import artNav from "./art-nav";

export default {
  name: "art-header",
  components: {
    artNav
  },

  props: {},
  data() {
    return {
      searchVaule: ""
    };
  },
  computed: {},
  methods: {}
};
</script>

<style>
.art-header {
  
 
  background: black;
  
  margin-bottom: 50px;


}
.head {
   display: flex;
   flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 50px;

}


.head img {
  width: 200px;
  padding:0 10px;

}
</style>
