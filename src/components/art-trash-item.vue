<template>
  <div class="art-trash-item">
    <img
      class="art-trash-item-image"
      v-bind:src=" require('../assets/' + trash_item_data.image) "
      alt="img"
    />
    <div class="art-trash-item-info">
      <p>{{trash_item_data.name}}</p>
      <p>{{trash_item_data.price}} руб.</p>
    </div>
    <div class="art-trash-item-sum">
      <span>
        <button class="art-trash-item-qty" @click="plusItem">+</button>
        {{trash_item_data.qty}} шт.
        <button class="art-trash-item-qty" @click="minusItem">−</button>
      </span>
    </div>
    <button class="btn" @click="deleteItemTrash">Удалить</button>
  </div>
</template>

<script>
export default {
  name: "art-trash-item",
  components: {},
  props: {
    trash_item_data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    plusItem() {
      this.$emit("plus");
    },
    minusItem() {
      this.$emit("minus");
    },

    deleteItemTrash() {
      this.$emit("deleteItemTrash");
    }
  }
};
</script>

<style>
.art-trash-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  margin-bottom: 16px;
  background: white;
  border-radius: 30px;
}
.art-trash-item-image {
  width: 100px;
}
.art-trash-item-qty {
  cursor: pointer;
}
.btn {
  padding: 8px 16px;
  background: lightslategrey;
  color: white;
  border: 0;
  border-radius: 8px;
}
.art-trash-item-qty {
  padding: 1px 5px;
  background: lightslategrey;
  color: white;
  border: 0;
  border-radius: 5px;
  text-size-adjust: 100px;
}
</style>
