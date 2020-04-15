<template>
  <div class="art-catalog">
    <router-link :to="{name: 'Trash', params:{trash_data: TRASH}}">
      <div class="art-catalog-to-trash">
        <img class="art-catalog-trash-img" src="../assets/trash.png" alt />
        <span class="art-catalog-trash-num" v-if="TRASH.length">{{TRASH.length}}</span>
      </div>
    </router-link>
    <p v-if="this.sortProd.length">
      <span class="art-trash-item-qty" @click="delProduct">×</span>
      {{selected}}
    </p>
    <art-select :options="options" @select="optionSelect" :selected="selected" />

    <div class="art-catalog_list">
      <art-catalog-item
        v-for="product in filterPoduct"
        :key="product.article"
        v-bind:product_data="product"
        @addToTrash="addToTrash"
      />
    </div>
  </div>
</template>

<script>
import artCatalogItem from "./art-catalog-item";
import artSelect from "./art-select";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "art-catalog",
  components: {
    artCatalogItem,
    artSelect
  },
  props: {},
  data() {
    return {
      options: [
        { name: "Мужские", value: "m" },
        { name: "Женские", value: "f" },
        { name: "Канцелярия", value: "o" },
        { name: "Аксессуары", value: "a" }
      ],
      selected: "Каталог",
      sortProd: []
    };
  },

  computed: {
    ...mapGetters(["PRODUCTS", "TRASH"]),
    filterPoduct() {
      if (this.sortProd.length) {
        return this.sortProd;
      } else {
        return this.PRODUCTS;
      }
    }
  },
  methods: {
    ...mapActions(["GET_PRODUCTS", "ADD_TO_TRASH"]),

    addToTrash(data) {
      this.ADD_TO_TRASH(data);
    },
    optionSelect(option) {
      this.sortProd = [];
      let vm = this;
      this.PRODUCTS.map(function(item) {
        if (item.option === option.name) {
          vm.sortProd.push(item);
        }
      });
      this.selected = option.name;
    },
    delProduct() {
      return (this.sortProd = []);
    }
  },
  mounted() {
    this.GET_PRODUCTS();
  }
};
</script>

<style>
.art-catalog_list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.art-catalog-to-trash {
  position: relative;
  padding: 16px;
}
.art-catalog-trash-img {
  position: absolute;
  width: 40px;
}
.art-catalog-trash-num {
  position: absolute;
  color: white;
  background: red;
  width: 20px;
  border-radius: 10px;

}
</style>
