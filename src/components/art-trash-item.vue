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
    

     </div>
     <button>Удалить</button>

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
        
    }


}


</script>

<style>
.art-trash-item{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
}
.art-trash-item-image{
    width: 100px;
}




</style>
