import Vue from "vue";
import VueRouter from 'vue-router'

import Login from "./components/views/Login.vue";
import Dashboard from "./components/views/Dashboard.vue";
import accountView from "./components/views/accountView.vue";
import Register from "./components/views/Register.vue";
import principal from "./components/views/principal.vue";


Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Login",
        component : Login
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard
    },
    {
        path: "/cuenta",
        name: "cuenta",
        component: accountView
    },
    
    {
        path: "/registro",
        name: "Register",
        component: Register
    },
    {
        path: "/principal",
        name: "principal",
        component: principal
    },
    
];

const router = new VueRouter({
    mode: "history",
    routes
});
  
export default router;