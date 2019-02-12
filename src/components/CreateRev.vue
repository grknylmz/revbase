<template>
  <div class="tile">
    <div class="tile is-parent">
      <article class="tile is-child is-primary is-bordered">
        <router-link to="/submitRev">
          <a class="button is-danger is-medium">Submit a review!</a>
        </router-link>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CreateRev extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
