<template>
  <div class="Categories">Categories Page</div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import * as endpoints from "@/endpoints";
import axios, { AxiosResponse } from "axios";

@Component
export default class Categories extends Vue {
  //@Prop() private response?: AxiosResponse<string>;
  constructor() {
    super();
  }
  mounted() {}
  getCategories() {}
}
</script>