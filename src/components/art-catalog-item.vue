<template>
 <div class="art-catalog-item">
     <img 
     class="art-catalog-item-image" 
     v-bind:src=" require('../assets/' + product_data.image) " alt="img">
     <p class="art-catalog-item-name">{{product_data.name}}</p>
     <p class="art-catalog-item-price">{{product_data.price}} руб.</p>
     <button 
     class="art-catalog-item-btn" 
     @click="addToTrash">В корзину</button>
 </div>
</template>

<script>
export default{
    name:'art-catalog-item',
    components:{

    },
    props:{
        product_data: {
            type: Object,
            default() {
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
        addToTrash(){
            this.$emit('addToTrash',this.product_data)

        }


        }
        
    }





</script>

<style>
.art-catalog-item {
    flex-basis: 25%;
    -webkit-box-shadow: 7px 0px 21px -8px rgba(0,0,0,0.75);
    -moz-box-shadow: 7px 0px 21px -8px rgba(0,0,0,0.75);
    box-shadow: 7px 0px 21px -8px rgba(0,0,0,0.75);
    padding: 16px;
    margin-bottom: 16px;


}
.art-catalog-item-image{
    width: 200px;
}



</style>
