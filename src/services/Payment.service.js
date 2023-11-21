import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:5255/api/",
})

class PaymentService {
    getByParam(param){
        return http.get("Payment?" + param);
    }
    getById(id) {
        return http.get("Payment/" + id);
    }
    getAll() {
        return http.get('Payment');
    }

    create(data) {
        return http.post("Payment", data);
    }
}

export default PaymentService;