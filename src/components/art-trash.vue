<template>
  <div class="art-trash">
    <router-link :to="{name: 'Catalog'}">
      <div class="art-catalog-to-trash">
        <p>Каталог</p>
      </div>
    </router-link>
    <h2>Корзина</h2>
    <h4 v-if="!trash_data.length">Корзина пустая</h4>
    <art-trash-item
      v-for="(item, index) in trash_data"
      :key="item.article"
      v-bind:trash_item_data="item"
      @deleteItemTrash="deleteItemTrash(index)"
      @plus="plus(index)"
      @minus="minus(index)"
    />
    <div class="art-trash-total-price">
      <p>Общая стоимость: {{trashTotalPrice}} руб.</p>
    </div>
  </div>
</template>

<script>
import artTrashItem from "./art-trash-item";
import { mapActions } from "vuex";

export default {
  name: "art-trash",
  components: {
    artTrashItem
  },
  props: {
    trash_data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    trashTotalPrice() {
      let result = [];

      if (this.trash_data.length) {
        for (let itm of this.trash_data) {
          result.push(itm.price * itm.qty);
        }

        result = result.reduce(function(sum, el) {
          return sum + el;
        });
        return result;
      } else {
        return 0;
      }
    }
  },
  methods: {
    ...mapActions(["DELETE_ITEM_TRASH", "PLUS_ITEM", "MINUS_ITEM"]),
    plus(index) {
      this.PLUS_ITEM(index);
    },
    minus(index) {
      this.MINUS_ITEM(index);
    },
    deleteItemTrash(index) {
      this.DELETE_ITEM_TRASH(index);
    }
  }
};
</script>

<style>
.art-trash {
  margin-bottom: 100px;
}

.art-trash-total-price {
  position: fixed;
  bottom: 0px;
  right: 0;
  left: 0;
  color: #ffffff;
  background: lightslategrey;
  padding: 8px 24px;
}
</style>
