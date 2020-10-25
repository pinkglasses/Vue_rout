import Vue from 'vue'
import Router from 'vue-router'
import home from "../components/home";
import User from "../components/User";
import UserDetail from "../components/UserDetail";

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',  redirect: "/home"},
    {path: '/home', component: home},
    {path: '/user',  component: User},
    {path: '/detail/:id',  component: UserDetail},
  ]
})
