<template>
  <div class="tile">
    <div class="tile is-parent">
      <article class="tile is-child box is-primary">
        <p class="title">Left Section</p>
        <p class="subtitle">Tile</p>
        <div class="content has-text-left">
          <p>- Content</p>
          <p>- Content</p>
          <p>- Content</p>
          <p>- Content</p>
          <p>- Content</p>
          <p>- Content</p>
          <p>- Content</p>
          <p>- Content</p>
          <p>- Content</p>
          <p>- Content</p>
          <p>- Content</p>
          <p>- Content</p>
        </div>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class LeftPanel extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
