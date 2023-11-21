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
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale: 'en',
    messages:{
        es: {
            'Chat': 'Mensaje',
            'Test': 'Prueba',
            'Date': 'Fecha',
            'Status': 'Estado',
            'Score': 'Calificación',
            'Birthday': 'Cumpleaños',
            'Phone: +51 ': 'Celular: +51',
            'See more': 'Ver más',
            'Schedule': 'Haz tu horario',
            'Avaliable schedules': 'Estos son los horarios disponibles para este tutor',
            'GoPayment': 'Ir a pagar',
            'Payment': 'Hacer el pago',
            'PaymentDetails': 'Detalles del pago',
            'CardHolder': 'Dueño de la tarjeta',
            'CardNumber': 'Número de la tarjeta',
            'ExpDate': 'Fecha de expiración',
            'CVV': 'CVV',
            'Amount': 'Monto total',
            'SaveCC': 'Guardar tarjeta de crédito para futuros pagos',
            'Confirm': 'Confirmar'
        },
        en: {
            'Chat': 'Chat',
            'Test': 'Test',
            'Date': 'Date',
            'Status': 'Status',
            'Score': 'Score',
            'Birthday': 'Birthday',
            'Phone: +51 ':'Phone: +51 ',
            'See more': 'See more',
            'Schedule':'Make your schedule',
            'Avaliable schedules': 'These are all available for this tutor',
            'GoPayment': 'Go to payment',
            'Payment': 'Make the payment',
            'PaymentDetails': 'Payment Details',
            'CardHolder': 'Card holder',
            'CardNumber': 'Card Number',
            'ExpDate': 'Expiration Date',
            'CVV': 'CVV',
            'Amount': 'Total amount',
            'SaveCC': 'Save card details for future purchases',
            'Confirm': 'Confirm'
        }
    }
})


const app = createApp(App);
app.use(i18n);
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
