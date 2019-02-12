<template>
  <nav id="navbar" class="navbar has-shadow is-spaced">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href>
          <router-link to="/">
            <img class="image is-160x60" src="../assets/REVBASE.png">
          </router-link>
        </a>
      </div>

      <div id="navMenuIndex" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item bd-navbar-item-documentation has-text-weight-semibold">
            <router-link to="/">
              <span class="has-text-danger">Home</span>
            </router-link>
          </a>
          <a class="navbar-item bd-navbar-item-documentation has-text-weight-semibold">
            <router-link to="/trending">
              <span class="has-text-danger">Trending</span>
            </router-link>
          </a>
          
          <a class="navbar-item bd-navbar-item-videos has-text-weight-semibold">
            <router-link to="/categories">
              <span class="has-text-danger">Categories</span>
            </router-link>
          </a>
          
          <a class="navbar-item bd-navbar-item-videos has-text-weight-semibold">
            <b-input v-model="name"></b-input>
          </a>
          <a class="navbar-item bd-navbar-item-videos has-text-weight-semibold control">
            <button class="button">Search</button>
          </a>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped is-grouped-multiline">
              <p class="control">
                <a class="button has-text-danger" @click="signup">
                  <strong>Sign up</strong>
                </a>
              </p>
              <p class="control">
                <a class="button is-light has-text-danger" @click="login">Log in</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  private name: String = "";
  login() {
    this.$dialog.alert("Login");
  }
  signup() {
    this.$dialog.alert("Sign Up");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
