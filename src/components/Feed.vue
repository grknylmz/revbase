<template>
  <div>
    <div class="tile">
      <div class="tile">
        <div class="tile is-parent">
          <article class="tile is-child box is-primary">
            <p class="title">Vertical</p>
            <p class="subtitle">Top tile</p>
          </article>
        </div>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child is-is-primary box">
          <p class="title">Wide tile</p>
          <p class="subtitle">Aligned with the right tile</p>
          <div class="content">
            <!-- Content -->
          </div>
        </article>
      </div>
    </div>
    <div class="tile">
      <div class="tile is-parent">
        <article class="tile is-child box is-primary">
          <div class="content">
            <p class="title">Tall tile</p>
            <p class="subtitle">With even more content</p>
            <div class="content">Content</div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Feed extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
