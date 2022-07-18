import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import { v1 } from "uuid";

export default createStore({
  plugins: [createPersistedState()],
  state: {
    // 設定
    condition: ["待處理", "進行中", "完成"],

    // 任務
    tasks: [],
  },
  getters: {},
  mutations: {
    addToList(state, value) {
      state.tasks.push({
        id: v1(),
        name: value,
        state: "待處理",
        editing: false,
      });
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
  },
  actions: {},
  modules: {},
});
