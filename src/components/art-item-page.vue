<template>
  <div class="art-item-page">
    <div class="cardToItem"><img v-if="product.image"
      class="art-item-image"
      v-bind:src=" require('../assets/' + product.image) "
      alt="img"
    />
    <ul>
    <li>Название: {{product.name}}</li>
    <li>Цена: {{product.price}} руб.</li>
    <li><button class="art-catalog-item-btn btn" @click="addToTrash">В корзину</button></li>
    </ul>
      <div class="comments-outside">
      <div class="comments-header">
        <div class="comments-stats">
            
            <span><i class="fa fa-comment"></i> Комментарии: {{ comments.length }}</span>
          </div>
        </div>
        <comments 
          :comments_wrapper_classes="['custom-scrollbar', 'comments-wrapper']"
          :comments="comments"
          :current_user="current_user"
          @submit-comment="submitComment"
        ></comments>
    </div>
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
import Comments from '../components/Comments'
import {mapGetters, mapActions} from 'vuex'


export default {
  name: "art-item-page",
  components: {
    Comments
  },

  props: {},
  data() {
    return {
           current_user: {
        user: 'exampler'
      },
      comments: [
        {
          id: 1,
          user: 'Trump',
          text: 'MAKE IT GREAT AGAIN',
        },

      ]
    };
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'TRASH',
     
    ]),
        ...mapGetters({
      user: "user"
    }),
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
    submitComment: function(reply) {
      this.comments.push({
        id: this.comments.length + 1,
        user: this.user.data.displayName,
        text: reply
      });
    }
  },
  mounted() {
    this.GET_PRODUCTS();
  },
      
};
</script>

<style >

.cardToItem{
  border-radius: 50px;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5px 30px;
  flex-wrap: wrap;
}
.cardToItem li{
  padding: 8px;
  margin: 16px;
  list-style-type:none;

}
.art-item-image {
  width: 350px;
}
a {
  text-decoration: none;
}

hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ececec;
  margin: 1em 0;
  padding: 0;
}

.comments-outside {
 
  margin: 0px auto;
  width: 100%;
}

.comments-header {
  background-color: #C8C8C8;
  padding: 10px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  color: #333;
  min-height: 80px;
  font-size: 20px;
}

.comments-header .comments-stats span {
  margin-left: 10px;
}

.post-owner {
  display: flex;
  align-items: center;
}

.post-owner .avatar > img {
  width: 30px;
  height: 30px;
  border-radius: 100%;
}

.post-owner .username {
  margin-left: 5px;
}

.post-owner .username > a {
  color: #333;
}

</style>
