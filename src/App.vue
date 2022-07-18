<template>
  <div class="text-center">
    <h1 class="mt-5">待辦清單</h1>
    <TaskInput class="mt-5"></TaskInput>
    <nav class="my-5 container d-flex justify-content-around">
      <router-link to="/" class="h5 text-dark">全部</router-link>
      <router-link to="/todo" class="h5 text-danger">待處理</router-link>
      <router-link to="/in-progress" class="h5 text-warning"
        >進行中</router-link
      >
      <router-link to="/done" class="h5 text-success">完成</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import TaskInput from "../src/components/TaskInput.vue";
export default {
  components: {
    TaskInput,
  },
};
</script>
