import {createRouter, createWebHashHistory} from 'vue-router'
import WelcomeView from "@/views/WelcomeView.vue";
import RegisterView from "@/views/RegisterView.vue";
import LoginView from "@/views/LoginView.vue";
import SelectedTutorView from "./views/SelectetTutorView.vue";
import chatView from "@/views/chatView.vue";
import ratingView from "@/views/RatingView.vue";
import ScoreView from "@/views/ScoreView.vue";
import CalendarView from "@/views/CalendarView.vue";
import TutorList from "@/views/TutorListView.vue";
import UserHomeView from "@/views/UserHomeView.vue";
import UserEditView from "@/views/UserEditView.vue";
import UserProfileView from "@/views/UserProfileView.vue";
import ChooseScheduleView from "@/views/ChooseScheduleView.vue";
import PaymentView from "@/views/PaymentView.vue";
import LoginTutorView from "@/views/LoginTutorView.vue";
import RegisterTutorView from "@/views/RegisterTutorView.vue";
import TutorChat from "@/components/TutorChat.vue";
import StudentListView from "@/views/StudentListView.vue";
import ReviewView from "@/views/ReviewView.vue";
import SelectedStudentView from "@/views/SelectedStudentView.vue";
import tutorEditView from "@/views/TutorEditView.vue";
import tutorProfileView from "@/views/TutorProfileView.vue";
import TutorCalendarView from "@/views/TutorCalendarView.vue";
import TutorHomeView from "@/views/TutorHomeView.vue"


const routes = [
    { path: "/", component: WelcomeView },
    { path: "/register-student", component: RegisterView},
    { path: "/login-student", component: LoginView},
    { path: "/rating", component:ratingView },
    { path: "/selected", component:SelectedTutorView },
    { path: "/chat", component:chatView },
    { path: "/calendar", component: CalendarView},
    { path: "/scoreview/:id", component: ScoreView},
    { path: "/tutorlist", component: TutorList},
    { path: "/user-home", component: UserHomeView},
    { path: "/user-edit", component: UserEditView},
    { path: "/user-profile", component: UserProfileView},
    { path: "/choose-schedule/:id", component: ChooseScheduleView},
    { path: "/payment", component: PaymentView},
    { path: "/login-tutor", component: LoginTutorView},
    { path: "/register-tutor", component: RegisterTutorView},
    { path: "/tutor-chat", component: TutorChat},
    { path: "/studentlist", component: StudentListView},
    { path: "/reviews", component: ReviewView},
    { path: "/selected-student", component: SelectedStudentView},
    { path: "/tutor-edit", component: tutorEditView},
    { path: "/tutor-prof", component: tutorProfileView},
    { path: "/tutor-calendar", component: TutorCalendarView},
    { path: "/tutor-home", component: TutorHomeView}

];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router