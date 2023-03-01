import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory} from 'vue-router'
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Case from "@/pages/Case";
import team from "@/pages/team";
import Blog from "@/pages/Blog";

const routes = [
    {path: "/", component: Home},
    {path: "/services", component: Services},
    {path: "/case", component: Case},
    {path: "/team", component: team},
    {path: "/blog", component: Blog},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App)
    .use(router)
    .mount('#app')
