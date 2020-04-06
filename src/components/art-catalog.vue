<template>
 <div class="art-catalog">
     <router-link :to="{name: 'Trash', params:{trash_data: TRASH}}">
         <div class="art-catalog-to-trash">
         <img 
         class="art-catalog-trash-img" 
         src='../assets/trash.png' alt="">
         <div class="art-catalog-trash-num" v-if="TRASH.length">{{TRASH.length}}</div>
         </div>
     </router-link>
     
     <h1>Каталог</h1>
     <div class="art-catalog_list">
         <art-catalog-item
          v-for="product in this.$store.state.products" 
          :key="product.article"
          v-bind:product_data="product"
          @addToTrash="addToTrash"
         
         />

     </div>
 </div>
</template>

<script>
import artCatalogItem from './art-catalog-item'
import {mapActions, mapGetters} from 'vuex'

export default{
    name:'art-catalog',
    components:{
        artCatalogItem
   

    },
    props:{

    },
    data() {
        return{
            
            
            
        }
    },
    
    computed:{
        ...mapGetters([
            'PRODUCTS',
            'TRASH'
        ])

    },
    methods:{
        ...mapActions([
            'GET_PRODUCTS',
            'ADD_TO_TRASH'

        ]),
        
        addToTrash(data) {
            this.ADD_TO_TRASH(data)

        }
        
    },
    mounted(){
        this.GET_PRODUCTS()
    }


}


</script>

<style>
.art-catalog_list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

}
.art-catalog-to-trash{
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 16px;

}
.art-catalog-trash-img{
    width: 40px;
}
.art-catalog-trash-num{
    position: absolute;
    color: white;
    background:red;
    width: 20px;
    border-radius: 10px;
    top: 40px;
    right: 10px;
    
}


</style>
