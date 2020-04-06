import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'




Vue.use(Vuex);

let store = new Vuex.Store ({
    state:{
        products: [],
        trash: []
    },
    mutations:{
        SET_PRODUCTS:(state, products) => {
            state.products = products;
        },
        SET_TRASH:(state, product) => {
            if(state){
                let beProduct = false;
                state.trash.map(function (item) {
                    if(item.article === product.article) {
                        beProduct =  true;
                        item.qty++

                    }
                })
                if(!beProduct){
                    state.trash.push(product)
                }

            }
            else{
                state.trash.push(product)
            }
            
        },
        DELETE_ITEM:(state, index) => {
            state.trash.splice(index, 1)
        }
    },
    actions:{
        GET_PRODUCTS({commit}){
            return axios('http://localhost:3000/products',{ 
                method: "GET"
            })
            .then((products) => {
                commit('SET_PRODUCTS', products.data);
                return products;
            })
            .catch((error) => {
                console.log(error);
                return error;

            })

        },
        ADD_TO_TRASH({commit}, product){
            commit('SET_TRASH', product);
        },
        DELETE_ITEM_TRASH({commit}, index){
            commit('DELETE_ITEM', index)

        }
    },
    getters:{
        PRODUCTS(state){
            return state.products;
        },

        TRASH(state){
            return state.trash;
        }
        
    }

});

export default store;