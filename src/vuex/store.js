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
            state.trash.push(product)
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