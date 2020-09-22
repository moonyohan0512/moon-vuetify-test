import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: () => import("./views/Dashboard.vue"),
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("./views/Projects.vue"),
    },
    {
      path: "/team",
      name: "team",
      component: () => import("./views/Team.vue"),
    },
  ],
});
