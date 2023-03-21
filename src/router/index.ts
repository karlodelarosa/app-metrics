import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue")
  },
  {
    path: "/system-setting",
    name: "Settings",
    component: () => import("../views/SystemSetting.vue")
  },
  {
    path: "/account-profile",
    name: "AccountProfile",
    component: () => import("../views/AccountProfile.vue")
  },
  {
    path: "/teams",
    name: "Team",
    component: () => import("../views/Teams.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
