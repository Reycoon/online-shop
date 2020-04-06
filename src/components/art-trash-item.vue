<template>
 <div class="art-trash-item">
     <img 
     class="art-trash-item-image"
     v-bind:src=" require('../assets/' + trash_item_data.image) " alt="img">
     <div class="art-trash-item-info">
         <p>{{trash_item_data.name}}</p>
         <p>{{trash_item_data.price}} руб.</p>
     </div>
     <div class="art-trash-item-sum">
         
         {{trash_item_data.qty}}
         </div>
     <button @click="deleteItemTrash">Удалить</button>

 </div>
</template>

<script>

export default{
    name:'art-trash-item',
    components:{

    },
    props:{
        trash_item_data:{
            type: Object,
            default(){
                return {}
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
        deleteItemTrash(){
            this.$emit('deleteItemTrash')
        }
        
    },

    mounted() {
        this.$set(this.trash_item_data, 'qty', 1)

    }


}


</script>

<style>
.art-trash-item{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    border: black solid;
    padding: 16px;
    margin-bottom: 16px;
    border-width: 1px;
}
.art-trash-item-image{
    width: 100px;
}




</style>
