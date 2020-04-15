<template>
  <div class="art-select">
    <p class="art-select-title" @click="optionsVisible = !optionsVisible">{{selected}}</p>
    <div class="art-options" v-if="optionsVisible">
      <p
        v-for="option in options"
        :key="option.value"
        @click="selectOptions(option)"
      >{{option.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "art-select",
  props: {
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    selected: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      optionsVisible: false
    };
  },

  methods: {
    selectOptions(option) {
      this.$emit("select", option);
      this.optionsVisible = false;
    },
    hideSelect() {
      this.optionsVisible = false;
    }
  },
  mounted() {
    document.addEventListener("click", this.hideSelect.bind(this), true);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.hideSelect.bind(this));
  }
};
</script>

<style>
.art-select {
  position: relative;
  width: 200px;
  cursor: pointer;
  background: white;
}
.art-select p {
  margin: 0px;
}
.art-options {
  border: solid 1px black;
  position: absolute;
  top: 24px;
  right: 0px;
  width: 99%;
  margin-bottom: 50px;
  background: white;
}
.art-select-title {
  border: solid 1px black;
}
.art-options p:hover {
  background: gainsboro;
}
</style>