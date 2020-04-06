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
     @deleteItemTrash='deleteItemTrash(index)'
     /> 
         
     
 </div>
</template>

<script>

import artTrashItem from './art-trash-item'
import {mapActions} from 'vuex'

export default{
    name:'art-trash',
    components:{
        artTrashItem

    },
    props:{
        trash_data: {
            type:Array,
            default(){
                return []
            }

        }

    },
    data() {
        return{
            
        }
    },
    computed:{

    },
    methods:{
        ...mapActions([
            'DELETE_ITEM_TRASH'

        ]),
        deleteItemTrash(index) {
            this.DELETE_ITEM_TRASH(index)

        }
        
    }


}


</script>

<style>



</style>
