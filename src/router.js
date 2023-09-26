import {createRouter, createWebHashHistory} from 'vue-router'
import WelcomeView from "@/views/WelcomeView.vue";
import RegisterView from "@/views/RegisterView.vue";
import LoginView from "@/views/LoginView.vue";
import SelectetTutorView from "./views/SelectetTutorView.vue";
import chatView from "@/views/chatView.vue";
import ratingView from "@/views/RatingView.vue";

const routes = [
    { path: "/", component: WelcomeView },
    { path: "/register-student", component: RegisterView},
    { path: "/login-student", component: LoginView}
    { path: "/rating", component:ratingView },
    { path: "/selected", component:SelectetTutorView },
    { path: "/chat", component:chatView },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router