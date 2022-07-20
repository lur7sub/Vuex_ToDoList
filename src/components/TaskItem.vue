<template>
  <li>
    <div class="container mx-5 d-flex justify-content-around">
      <div class="col-md-4">
        <!-- Task State -->
        <span
          :class="{
            'text-danger': task.state === '待處理',
            'text-warning': task.state === '進行中',
            'text-success': task.state === '完成',
          }"
          @click="changeState(index)"
          >{{ task.state }}</span
        >
      </div>
      <div class="col-md-4">
        <!-- Task Name -->
        <span v-if="editMode" @dblclick="openMode">{{ task.name }}</span>
        <input
          v-else
          v-model="newName"
          @keyup.enter="editSubmit(newName, index)"
          @keyup.esc="closeMode"
        />
      </div>
      <div class="col-md-4">
        <!-- Delete Btn -->
        <button @click="deleteTask(index)" class="btn btn-danger">X</button>
      </div>
    </div>
    <hr />
  </li>
</template>

<script>
export default {
  name: "TaskItem",
  props: ["task", "index"],
  data() {
    return {
      editMode: true,
      newName: this.task.name,
    };
  },

  methods: {
    deleteTask(index) {
      this.$store.commit("deleteFromTasks", index);
    },
    changeState(index) {
      this.$store.commit("changeState", index);
    },
    openMode() {
      this.editMode = !this.editMode;
    },
    closeMode() {
      this.editMode = !this.editMode;
      this.newName = this.task.name;
    },
    editSubmit(newName, index) {
      this.$store.commit("taskNameUpdate", { newName, index });
      this.editMode = !this.editMode;
    },
  },
};
</script>
