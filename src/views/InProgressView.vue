<template>
  <ul
    v-for="(task, index) in $store.state.tasks.filter(
      (task) => task.state === '進行中'
    )"
    :key="index"
  >
    <TaskItem :task="task" :index="index"></TaskItem>
  </ul>
</template>

<script>
import TaskItem from "../components/TaskItem.vue";
export default {
  components: {
    TaskItem,
  },
};
</script>
