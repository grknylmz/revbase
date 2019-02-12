<template>
  <div class="container">
    <section class="section">
      <CategoryCloud/>
    </section>
    <div class="columns">
      <div class="column is-one-quarter">
        <LeftPanel/>
      </div>
      <div class="column">
        <Feed/>
      </div>
      <div class="column is-one-quarter">
        <RightPanel/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CategoryCloud from "@/components/CategoryCloud.vue";
import Feed from "@/components/Feed.vue";
import LeftPanel from "@/components/LeftPanel.vue";
import RightPanel from "@/components/RightPanel.vue";

@Component({
  components: {
    CategoryCloud,
    LeftPanel,
    Feed,
    RightPanel
  }
})
export default class Home extends Vue {}
</script>
