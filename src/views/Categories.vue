<template>
  <div class="Categories">

  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import * as endpoints from '@/endpoints';
import axios,{ AxiosResponse } from 'axios';



@Component
export default class Categories extends Vue {
  @Prop() private response?: AxiosResponse<string>;
  constructor() {
    super();
    
  }
  mounted() {
    this.getCategories();
  }
  getCategories(){
    //axios.get(endpoints.getCategory).then(response => (this.response = response))
      //  .catch(() => console.log("Can’t access response. Blocked by browser?"));
  }
}
</script>