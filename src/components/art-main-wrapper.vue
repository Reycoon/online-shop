<template>
 <div class="art-main-wrapper">
    <art-catalog/>
    <art-trash 
    v-if="TRASH.length"
    v-bind:trash_data="TRASH"
    />
 </div>
</template>

<script>
import artCatalog from './art-catalog'
import artTrash from './art-trash'
import {mapGetters} from 'vuex'

export default{
    name:'art-main-wrapper',
    components:{
        artCatalog,
        artTrash
    },
    props:{

    },
    data() {
        return{


        }
    },
    computed:{
        ...mapGetters([
            'TRASH',

        ])

    },
    methods:{

    }


}


</script>

<style>
.art-main-wrapper {
    margin: 0 auto;
    max-width: 1200px;
}


</style>