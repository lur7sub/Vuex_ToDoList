import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  plugins: [createPersistedState()],
  state: {
    // 設定
    condition: ["待處理", "進行中", "完成"],
    // 任務
    tasks: [],
  },
  getters: {
    doneFilter(state) {
      return state.tasks.filter((task) => task.state === "完成");
    },
    inProgressFilter(state) {
      return state.tasks.filter((task) => task.state === "進行中");
    },
    toDoFilter(state) {
      return state.tasks.filter((task) => task.state === "待處理");
    },
    allFilter(state) {
      return state.tasks;
    },
  },
  mutations: {
    addToList(state, value) {
      let trimValue = value.trim();
      if (trimValue !== "") {
        state.tasks.push({
          name: trimValue,
          state: "待處理",
        });
      }
    },
    deleteFromTasks(state, index) {
      state.tasks.splice(index, 1);
    },
    changeState: (state, index) => {
      let currentI = state.condition.indexOf(state.tasks[index].state);
      // currentI規則
      if (currentI < 2) {
        ++currentI;
      } else {
        currentI = 0;
      }
      // 改變
      state.tasks[index].state = state.condition[currentI];
    },
    taskNameUpdate: (state, { newName, index }) => {
      state.tasks[index].name = newName;
    },
  },
  actions: {},
  modules: {},
});
