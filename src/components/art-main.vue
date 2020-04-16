<template>
  <div class="art-main">
    <art-slider/>

  </div>
</template>

<script>
import artSlider from "./art-slider";
export default {
  name: "art-main",
  components: {
    artSlider
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
.art-slider{
  margin: 20px;
}
</style>