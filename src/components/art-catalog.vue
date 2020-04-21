<template>
  <div class="art-catalog">
    <div class="filter">
      <art-select :options="options" @select="optionSelect" :selected="selected" />

      <div class="range-slider">
        <input
          type="range"
          min="0"
          max="1000"
          step="50"
          v-model.number="minPrice"
          @change="setRangeSlider"
        />
        <input
          type="range"
          min="0"
          max="1000"
          step="50"
          v-model.number="maxPrice"
          @change="setRangeSlider"
        />
        <span class="slider-price">{{minPrice}} руб.</span>
        <span class="slider-price">{{maxPrice}} руб.</span>
      </div>
    </div>
    <router-link :to="{name: 'Trash', params:{trash_data: TRASH}}">
      <div class="art-catalog-to-trash">
        <img class="art-catalog-trash-img" src="../assets/trash.png" alt />
        <span class="art-catalog-trash-num" v-if="TRASH.length">{{TRASH.length}}</span>
      </div>
    </router-link>

    <div class="art-catalog_list">
      <art-catalog-item
        v-for="product in filterPoduct"
        :key="product.article"
        v-bind:product_data="product"
        @addToTrash="addToTrash"
        @productClick="productClick"
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
        { name: "Все", value: "all" },
        { name: "Мужские", value: "m" },
        { name: "Женские", value: "f" },
        { name: "Канцелярия", value: "o" },
        { name: "Аксессуары", value: "a" }
      ],
      selected: "Каталог",
      sortProd: [],
      minPrice: 0,
      maxPrice: 1000
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
    setRangeSlider() {
      if (this.minPrice > this.maxPrice) {
        let temp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = temp;
      }
      this.optionSelect();
    },
    optionSelect(option) {
      let vm = this;
      this.sortProd = [...this.PRODUCTS];
      this.sortProd = this.sortProd.filter(function(item) {
        return item.price >= vm.minPrice && item.price <= vm.maxPrice;
      });

      if (option) {
        this.selected = option.name;
        this.sortProd = this.sortProd.filter(function(e) {
          return e.option === option.name;
        });
      }
    },
    productClick(article){
      this.$router.push({name: 'Item', query: {'Item': article}})

    }
  },
  mounted() {
    this.GET_PRODUCTS();
  }
};
</script>

<style>

.filter {
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-around;
  align-items: center;
}
.art-catalog_list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.art-catalog-to-trash {
  position: fixed;
  left: 0;
  bottom: 300px;
  padding: 3px;
  background: wheat;
  border-radius: 0px 10px 10px 0px;
  text-align: center;
}
.art-catalog-trash-img {
  width: 40px;
}
.art-catalog-trash-num {
  color: white;
  background: red;
  padding: 2px 5px;
  font-size: 14px;
  border-radius: 100%;
  position: absolute;
  bottom: 2px;
  right: 0;
}

.slider-price {
  position: relative;
  top: 20px;
  margin: 40px;
  font-size: 14px;
  margin-top: 8px;
  
}
.range-slider {
  width: 300px;
}

.range-slider svg,
.range-slider input[type="range"] {
  position: absolute;
  max-width: 20%;
}

input[type="range"]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  top: 2px;
  margin-top: -7px;
}
input[type="range"] {
  -webkit-appearance: none;
  width: 300px;
  margin: 5.3px 0;
}
input[type="range"]:focus {
  outline: none;
}
input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 0px 0px 2.5px rgba(1, 0, 0, 0.8), 0px 0px 0px rgba(27, 0, 0, 0.8);
  background: #ffffff;
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}
input[type="range"]::-webkit-slider-thumb {
  box-shadow: 0px 0px 1.3px #000000, 0px 0px 0px #0d0d0d;
  border: 1.3px solid #000000;
  height: 19px;
  width: 14px;
  border-radius: 50px;
  background: #778899;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -5.5px;
}
input[type="range"]:focus::-webkit-slider-runnable-track {
  background: #ffffff;
}
input[type="range"]::-moz-range-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 0px 0px 2.5px rgba(1, 0, 0, 0.8), 0px 0px 0px rgba(27, 0, 0, 0.8);
  background: #ffffff;
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}
input[type="range"]::-moz-range-thumb {
  box-shadow: 0px 0px 1.3px #000000, 0px 0px 0px #0d0d0d;
  border: 1.3px solid #000000;
  height: 19px;
  width: 14px;
  border-radius: 50px;
  background: #778899;
  cursor: pointer;
}
input[type="range"]::-ms-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type="range"]::-ms-fill-lower {
  background: #f2f2f2;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 0px 0px 2.5px rgba(1, 0, 0, 0.8), 0px 0px 0px rgba(27, 0, 0, 0.8);
}
input[type="range"]::-ms-fill-upper {
  background: #ffffff;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 0px 0px 2.5px rgba(1, 0, 0, 0.8), 0px 0px 0px rgba(27, 0, 0, 0.8);
}
input[type="range"]::-ms-thumb {
  box-shadow: 0px 0px 1.3px #000000, 0px 0px 0px #0d0d0d;
  border: 1.3px solid #000000;
  height: 19px;
  width: 14px;
  border-radius: 50px;
  background: #778899;
  cursor: pointer;
  height: 8.4px;
}
input[type="range"]:focus::-ms-fill-lower {
  background: #ffffff;
}
input[type="range"]:focus::-ms-fill-upper {
  background: #ffffff;
}
</style>
