<template>
  <div id="app">
    <art-header></art-header>
    <art-main-wrapper></art-main-wrapper>
  </div>
</template>

<script>
import artHeader from "./components/art-header";
import artMainWrapper from "./components/art-main-wrapper";

export default {
  name: "App",
  components: {
    artMainWrapper,
    artHeader
  }
};
</script>

<style>
body {
  background: whitesmoke;
}
#app {
  font-family: Helvetica;
  font-weight: 500;
  font-size: 20px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
</style>
