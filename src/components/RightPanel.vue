<template>
  <div class="tile">
    <div class="tile is-parent">
      <article class="tile is-child box is-primary">
        <p class="title">Right Section</p>
        <p class="subtitle">Top tile</p>
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
