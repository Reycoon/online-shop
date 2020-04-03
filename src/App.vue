<template>
  <div id="app">
    <art-main-wrapper>

    </art-main-wrapper>

  </div>
</template>

<script>
import artMainWrapper from './components/art-main-wrapper'


export default {
  name: 'App',
  components: {
    artMainWrapper
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
 
}

</style>
