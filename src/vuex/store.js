import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";


import firebase from '../firebase'



Vue.use(Vuex);
Vue.use(firebase);

let store = new Vuex.Store({
    state: {
        searchValue: '',
        products: [],
        trash: [],
        user: {
            loggedIn: false,
            data: null
        }
    },
    mutations: {
        SET_PRODUCTS: (state, products) => {
            state.products = products;
        },
        SET_TRASH: (state, product) => {
            if (state) {
                let beProduct = false;
                state.trash.map(function (item) {
                    if (item.article === product.article) {
                        beProduct = true;
                        item.qty++

                    }
                })
                beProduct ||
                    state.trash.push({ ...product, qty: 1 })
            }

        },
        DELETE_ITEM: (state, index) => {
            state.trash.splice(index, 1)
        },
        PLUS: (state, index) => {
            state.trash[index].qty++
        },
        MINUS: (state, index) => {
            if (state.trash[index].qty > 1) {
                state.trash[index].qty--
            }

        },
        BUY_ITEM: (state) => {
            state.trash.splice(0, state.trash.length)
        },
        SET_LOGGED_IN(state, value) {
            state.user.loggedIn = value;
        },
        SET_USER(state, data) {
            state.user.data = data;
        }
    },
    actions: {
        GET_PRODUCTS({ commit }) {

            return firebase.database.ref('products').on('value', products => {
                commit('SET_PRODUCTS', products.val());
                return products;
            })


        },
        ADD_TO_TRASH({ commit }, product) {
            commit('SET_TRASH', product);
        },
        DELETE_ITEM_TRASH({ commit }, index) {
            commit('DELETE_ITEM', index)

        },
        BUY_ITEM_TRASH({ commit }) {
            commit('BUY_ITEM')

        },
        PLUS_ITEM({ commit }, index) {
            commit('PLUS', index)

        },
        MINUS_ITEM({ commit }, index) {
            commit('MINUS', index)
        },
        fetchUser({ commit }, user) {
            commit("SET_LOGGED_IN", user !== null);

            if (user) {
                commit("SET_USER", {
                    displayName: user.displayName,
                    email: user.email
                });
            } else {
                commit("SET_USER", null);
            }
        }
    },


    getters: {

        PRODUCTS(state) {
            return state.products;
        },

        TRASH(state) {
            return state.trash;
        },
        user(state) {
            return state.user
        }

    },
    plugins: [createPersistedState()],

});

export default store;
