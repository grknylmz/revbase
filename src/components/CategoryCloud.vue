<template>
  <div class="columns is-mobile is-multiline is-centered">
    <div class="columns">
      <v-item v-for="cat in categories" :key="cat.id">
        <a class="column has-text-danger">{{ cat.category }}</a>
      </v-item>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import * as endpoints from "@/endpoints";
import axios, { AxiosResponse } from "axios";

@Component
export default class CategoryCloud extends Vue {
  private categories: string[] = [];

  mounted() {
    this.getCategories();
  }
  getCategories() {
    axios
      .get(endpoints.getCategory)
      .then(response => (this.categories = response.data))
      .catch(() => console.log("Can’t access response. Blocked by browser?"));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
