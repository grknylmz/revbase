<template>
  <div>
    <div v-for="subject in subjectArray" :key="subject._id">
      <div class="tile is-parent">
        <article class="tile is-child box is-primary">
          <div class="content">
            <p class="title has-text-left">{{ subject.subject }}</p>
            <p class="subtitle has-text-left">{{ subject.review }}</p>
            <div class="content has-text-right has-text-weight-semibold">{{ subject.user }}</div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { SubjectApiService } from "@/services/SubjectApiService.service";

@Component
export default class Feed extends Vue {
  private apiService: SubjectApiService;
  private subjectArray: Array<any> = [];
  private third: boolean = false;
  private idx: number = 0;

  constructor() {
    super();
    this.apiService = new SubjectApiService();
  }
  private increaseIndex() {
    this.idx++;
    if (this.idx % 3 === 0) {
      this.third = true;
    } else {
      this.third = false;
    }
  }
  mounted() {
    this.apiService.getSubjects().then((subjects: any) => {
      debugger;
      this.subjectArray = subjects;
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
