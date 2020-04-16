<template>
  <div class="art-main-wrapper">
    <art-header></art-header>
    <router-view></router-view>
  </div>
</template>

<script>
import artHeader from "./art-header";

export default {
  name: "art-main-wrapper",
  components: {
    artHeader
  },

  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style>
.art-main-wrapper {
  margin: 0 auto;
  max-width: 1400px;
}
</style>
