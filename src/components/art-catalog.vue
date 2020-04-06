<template>
 <div class="art-catalog">
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
import {mapActions} from 'vuex'

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



</style>
