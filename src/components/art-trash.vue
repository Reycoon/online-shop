<template>
 <div class="art-trash">
     <h2>Корзина</h2>
     <art-trash-item
     v-for="item in trash_data"
     :key="item.article"
     v-bind:trash_item_data="item"
     /> 
         
     
 </div>
</template>

<script>

import artTrashItem from './art-trash-item'

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
        
    }


}


</script>

<style>



</style>
