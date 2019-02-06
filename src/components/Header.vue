<template>
  <nav id="navbar" class="navbar has-shadow is-spaced">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href>
          <router-link to="/">
            <img class="image is-160x60" src="../assets/REVBASE.png">
          </router-link>
        </a>
        
        <a class="navbar-item is-hidden-desktop" href="https://twitter.com/" target="_blank">
          <span class="icon" style="color: #55acee;">
            <i class="fab fa-lg fa-twitter"></i>
          </span>
        </a>

        <div id="navbarBurger" class="navbar-burger burger" data-target="navMenuIndex">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navMenuIndex" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item bd-navbar-item-documentation has-text-weight-semibold">
            <span class="icon has-text-primary">
              <i class="fas fa-book"></i>
            </span>
            <router-link to="/trending">
              <span>Trending</span>
            </router-link>
          </a>
          
          <a class="navbar-item bd-navbar-item-videos has-text-weight-semibold">
            <span class="icon has-text-success">
              <i class="fas fa-play-circle"></i>
            </span>
            <router-link to="/categories">
              <span>Categories</span>
            </router-link>
          </a>
        </div>

        <div class="navbar-end">
          <a
            class="navbar-item is-hidden-touch is-hidden-desktop-only"
            href="https://github.com/jgthms/bulma"
            target="_blank"
          >
            <span class="icon" style="color: #333;">
              <i class="fab fa-lg fa-github-alt"></i>
            </span>
          </a>
          
          <a
            class="navbar-item is-hidden-touch is-hidden-desktop-only"
            href="https://twitter.com/jgthms"
            target="_blank"
          >
            <span class="icon" style="color: #55acee;">
              <i class="fab fa-lg fa-twitter"></i>
            </span>
          </a>

          <div class="navbar-item">
            <div class="field is-grouped is-grouped-multiline">
              <p class="control">
                <router-link to="/signup">
                  <a class="button is-primary">
                    <strong>Sign up</strong>
                  </a>
                </router-link>
              </p>
              <p class="control">
                <router-link to="/login">
                  <a class="button is-light">Log in</a>
                </router-link>
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
export default class Header extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
