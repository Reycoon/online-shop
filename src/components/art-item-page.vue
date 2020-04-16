<template>
  <div class="art-item-page">
    <div class="cardToItem"><img v-if="product.image"
      class="art-item-image"
      v-bind:src=" require('../assets/' + product.image) "
      alt="img"
    />
    <ul>
    <li>Название: {{product.name}}</li>
    <li>Цена: {{product.price}}</li>
    <li><button class="art-catalog-item-btn btn" @click="addToTrash">В корзину</button></li>
    </ul>
    </div>
       <router-link :to="{name: 'Trash', params:{trash_data: TRASH}}">
      <div class="art-catalog-to-trash">
        <img class="art-catalog-trash-img" src="../assets/trash.png" alt />
        <span class="art-catalog-trash-num" v-if="TRASH.length">{{TRASH.length}}</span>
      </div>
    </router-link>
  </div>
  
</template>

<script>

import {mapGetters, mapActions} from 'vuex'

export default {
  name: "art-item-page",
  components: {
    
  },

  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'TRASH'
    ]),
    product(){
      let result = {};
      let vm = this;
      this.PRODUCTS.map(function(item){
        if(item.article === vm.$route.query.Item){
          result = item;
        }
      })
      return result;

    }
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS',
      'ADD_TO_TRASH'
    ]),
    addToTrash() {
      this.ADD_TO_TRASH(this.product);
    },
  },
  mounted() {
    this.GET_PRODUCTS();
  }
};
</script>

<style>

.cardToItem{
  border-radius: 50px;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5px 30px;
}
.cardToItem li{
  padding: 8px;
  margin: 16px;
  list-style-type:none;

}
.art-item-image {
  width: 350px;
}

</style>
