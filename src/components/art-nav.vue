<template>
  <div class="art-nav">
    <router-link :to="{name: 'Catalog'}">
      <li class="nav">Каталог</li>
    </router-link>
    <li class="nav">Войти</li>
  </div>
</template>

<script>
export default {
  name: "art-nav",
  components: {},

  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style>
.art-nav li {
  display: inline;
  padding: 8px;
  margin: 16px;
}
</style>