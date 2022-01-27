<template>
  <div class="contents">
    <h1 class="page-header">Create Post</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">title:</label>
          <input id="title" type="text" v-model="title" />
        </div>
        <div>
          <label for="contents">contents:</label>
          <textarea id="contents" type="text" rows="5" v-model="contents" />
          <p v-if="!isContentsVaild" class="validation-text warning">
            200자 이내로 작성하세요.
          </p>
        </div>
        <div>
          <button type="submit" class="btn">등록</button>
        </div>
      </form>
      <p class="log">
        {{ logMessgae }}
      </p>
    </div>
  </div>
</template>

<script>
import { createPost } from '@/api/posts';

export default {
  data() {
    return {
      title: '',
      contents: '',
      logMessgae: '',
    };
  },
  computed: {
    isContentsVaild() {
      return this.contents.length <= 200;
    },
  },
  methods: {
    async submitForm() {
      try {
        const response = await createPost({
          title: this.title,
          contents: this.contents,
        });
        console.log(response);
      } catch (error) {
        this.logMessgae = error.response.data.message;
      }
    },
  },
};
</script>

<style socped>
.form-wrapper .form {
  width: 100%;
}
.btn {
  color: white;
}
</style>
