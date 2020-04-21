<template>
  <div class="art-nav">
    <router-link :to="{name: 'Catalog'}">
      <li class="nav">Каталог</li>
    </router-link>
    <div v-if="user.loggedIn">
      <li class="nav-item">
        <a class="nav-link" @click.prevent="signOut">Sign out</a>
      </li>
      <li class="nav-item">Здравствуйте, {{user.data.displayName}}</li>
    </div>
    <div v-else>
      <li class="nav-item">
        <router-link to="login" class="nav-link">Войти</router-link>
      </li>
      <li class="nav-item">
        <router-link to="register" class="nav-link">Регистрация</router-link>
      </li>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import * as firebase from "firebase";
console.log(firebase.auth); // Undefined
console.log(firebase.default.auth);

export default {
  name: "art-nav",
  components: {},

  props: {},
  data() {
    return {};
  },
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "Main"
          });
        });
    }
  }
};
</script>

<style>
.art-nav {
  display: flex;
}

.art-nav li {
  display: inline;
  padding: 8px;
  margin: 16px;
}
</style>