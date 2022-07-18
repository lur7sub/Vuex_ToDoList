<template>
  <li>
    <div class="container mx-5 d-flex justify-content-around">
      <!-- Task State -->
      <span @click="changeState(index)">{{ task.state }}</span>
      <!-- Task Name -->
      <span>{{ task.name }}</span>
      <!-- <input /> -->
      <!-- Delete Btn -->
      <button @click="deleteTask(index)" class="btn btn-danger">X</button>
    </div>
    <hr />
  </li>
</template>

<script>
export default {
  name: "TaskItem",
  props: ["task", "index"],
  methods: {
    deleteTask(index) {
      this.$store.commit("deleteFromTasks", index);
    },
    changeState(index) {
      this.$store.commit("changeState", index);
    },
  },
};
</script>
