<template>
  <div>
    <input
      v-model="taskInput"
      @keyup.enter="createTask(this.taskInput)"
      placeholder="請問要做什麼呢?"
      class="h4 p-2 m-auto"
    />
  </div>
</template>

<script>
export default {
  name: "TaskInput",
  data() {
    return {
      taskInput: "",
    };
  },
  methods: {
    createTask(value) {
      this.$store.commit("addToList", value);
      this.taskInput = "";
    },
  },
  computed: {},
};
</script>
