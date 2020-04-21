<template>
  <div class="art-trash">
    <router-link :to="{name: 'Catalog'}"></router-link>
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
      <button class="art-buy" v-if="trash_data.length && user.loggedIn" @click="buy">Купить</button>
    </div>
  </div>
</template>

<script>
import artTrashItem from "./art-trash-item";
import { mapActions, mapGetters } from "vuex";

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
    ...mapGetters({
      user: "user"
    }),
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
    ...mapActions([
      "DELETE_ITEM_TRASH",
      "PLUS_ITEM",
      "MINUS_ITEM",
      "BUY_ITEM_TRASH"
    ]),
    plus(index) {
      this.PLUS_ITEM(index);
    },
    minus(index) {
      this.MINUS_ITEM(index);
    },
    deleteItemTrash(index) {
      this.DELETE_ITEM_TRASH(index);
    },
    buy() {
      alert("Спасибо за покупку!");
      this.BUY_ITEM_TRASH();
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
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #ffffff;
  background: lightslategrey;
  padding: 8px 24px;
}
button.art-buy {
  font-size: 20px;
  border-radius: 20px;
  padding: 8px 16px;
  background: transparent;
  color: #ffffff;
}
</style>
