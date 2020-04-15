<template>
  <div id="app">
    <art-main-wrapper></art-main-wrapper>
  </div>
</template>

<script>
import artMainWrapper from "./components/art-main-wrapper";

export default {
  name: "App",
  components: {
    artMainWrapper
  }
};
</script>

<style>
body {
  background: whitesmoke;
  margin: 0;
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
