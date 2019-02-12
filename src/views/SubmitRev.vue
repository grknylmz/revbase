<template>
  <div class="container">
    <RevSubmitDialog/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RevSubmitDialog from "@/components/RevSubmitDialog.vue";

@Component({
  components: {
    RevSubmitDialog
  }
})
export default class Home extends Vue {}
</script>
