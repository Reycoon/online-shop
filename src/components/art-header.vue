<template>
  <div class="art-header">
    <router-link :to="{name: 'Main'}">
      <img src="../assets/logo2.png" alt="logo" />
    </router-link>
    <ul>
      <art-nav />
    </ul>
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
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: black;
  margin-bottom: 50px;


}


.art-header img {
  width: 200px;
  padding:0 10px;

}
</style>
