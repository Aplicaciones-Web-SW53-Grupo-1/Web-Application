import PrimeVue from "primevue/config"
import "primevue/resources/primevue.min.css"; //core css
import "primevue/resources/themes/lara-light-blue/theme.css";
import 'primeicons/primeicons.css';
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Calendar from "primevue/calendar";
import Card from "primevue/card";
import Dialog from "primevue/dialog";
import router from "@/router";
import { createApp } from 'vue'
import App from './App.vue'
import Dropdown from "primevue/dropdown";
import FileUpload from "primevue/fileupload";
import Rating from "primevue/rating";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

const app = createApp(App);
app.use(PrimeVue);
app.use(router);

app.component("pv-button", Button);
app.component("pv-dialog", Dialog);
app.component("pv-dropdown", Dropdown);
app.component("pv-card", Card);
app.component("pv-input-text", InputText);
app.component("pv-calendar", Calendar);
app.component("pv-fileupload", FileUpload);
app.component("pv-rating", Rating);
app.component("pv-table", DataTable);
app.component("pv-column",Column);

app.mount("#app");
