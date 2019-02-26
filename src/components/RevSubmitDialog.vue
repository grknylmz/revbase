<template>
  <div class="columns is-centered">
    <div class="column is-one-fifth"></div>
    <div class="column">
      <section class="box">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Subject</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input
                  v-model="subject"
                  class="input is-danger"
                  type="text"
                  placeholder="Choose the Subject"
                >
              </div>
              <p class="help is-danger">This field is required</p>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Review</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <textarea v-model="review" class="textarea"></textarea>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label">
            <!-- Left empty for spacing -->
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <button v-on:click="postReview" class="button is-primary is-danger">Send</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="column is-one-fifth"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import Subject from "@/models/subjectModel";

@Component
export default class RevSubmitDialog extends Vue {
  private requestBody: string = "";
  private review: string = "";
  private subject: string = "";

  postReview() {
    const subjectHandler = new Subject(this.subject, "dummyUser", this.review);
    subjectHandler.postCreateReview();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
