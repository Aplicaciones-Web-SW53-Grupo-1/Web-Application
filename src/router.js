import {createRouter, createWebHashHistory} from 'vue-router'
import WelcomeView from "@/views/WelcomeView.vue";
import RegisterView from "@/views/RegisterView.vue";
import LoginView from "@/views/LoginView.vue";
import PaymentView from "@/views/PaymentView.vue";


const routes = [
    { path: "/", component: WelcomeView },
    { path: "/register-student", component: RegisterView},
    { path: "/login-student", component: LoginView},

    { path: "/payment", component: PaymentView}
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router