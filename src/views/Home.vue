<template>
  <div class="container">
    <div class="columns">
      <div class="column is-one-quarter">
        <LeftPanel/>
      </div>
      <div class="column">
        <CreateRev/>
        <Feed/>
        <Feed/>
        <Feed/>
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
import Feed from "@/components/Feed.vue";
import LeftPanel from "@/components/LeftPanel.vue";
import RightPanel from "@/components/RightPanel.vue";
import CreateRev from "@/components/CreateRev.vue";

@Component({
  components: {
    LeftPanel,
    Feed,
    RightPanel,
    CreateRev
  }
})
export default class Home extends Vue {}
</script>
