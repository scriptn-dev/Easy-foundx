import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/criar-campanha",
    name: "create-compaign",
    component: () => import("../views/CreateCompaign.vue"),
  },
  {
    path: "/minha-conta",
    name: "profile",
    redirect: { name: "list-compaigns" },

    component: () => import("../views/Profile.vue"),
    children: [
      {
        path: "/",
        name: "list-compaigns",
        component: () => import("../components/user/ListCompaigns.vue"),
      },
      {
        path: "/criar-campanha",
        name: "create-compaign-profile",
        component: () => import("../components/user/CreateCompaign.vue"),
      },
      {
        path: "/meu-perfil",
        name: "my-profile",
        component: () => import("../components/user/AccountDetails.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "session",
    redirect: { name: "login" },

    component: () => import("../views/Session.vue"),
    children: [
      {
        path: "/",
        name: "login",
        component: () => import("../components/user/Login.vue"),
      },
      {
        path: "/cadaste-se",
        name: "register",
        component: () => import("../components/user/Register.vue"),
      },
      {
        path: "/recuperar-conta",
        name: "forgot-pass",
        component: () => import("../components/user/ForgotPass.vue"),
      },
    ],
  },
  {
    path: "/campanhas",
    name: "compaigns",
    redirect: { name: "compaigns-list" },
    component: () => import("../views/Compaigns.vue"),
    children: [
      {
        path: "/",
        name: "compaigns-list",
        component: () => import("../components/compaigns/CompaignsList.vue"),
      },
      {
        path: "campanha-detalhes/",
        name: "campaign-details",
        props: (route) => ({ query: route.query.id }),

        component: () => import("../components/compaigns/CompaignDetails.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
