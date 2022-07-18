import { createRouter, createWebHistory } from "vue-router";
import AllView from "../views/AllView.vue";
import ToDoView from "../views/ToDoView.vue";
import InProgressView from "../views/InProgressView.vue";
import DoneView from "../views/DoneView.vue";

const routes = [
  {
    path: "/",
    name: "all",
    component: AllView,
  },
  {
    path: "/todo",
    name: "todo",
    component: ToDoView,
  },
  {
    path: "/in-progress",
    name: "in proress",
    component: InProgressView,
  },
  {
    path: "/done",
    name: "done",
    component: DoneView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
