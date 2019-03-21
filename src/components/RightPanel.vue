<template>
  <div class="tile">
    <div class="tile is-parent">
      <article class="tile is-child box is-primary">
        <p class="title has-text-right">Followed Tags</p>
        <p class="subtitle">Top tile</p>
        <div class="content has-text-left">
          <p>#iphone</p>
          <p>#vacation</p>
        </div>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class RightPanel extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
