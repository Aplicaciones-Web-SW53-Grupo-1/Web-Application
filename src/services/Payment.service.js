import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:3000/",
})

class PaymentService {
    getByParam(param){
        return http.get("payments?" + param);
    }
    getById(id) {
        return http.get("payments/" + id);
    }
    getAll() {
        return http.get('payments');
    }

    create(data) {
        return http.post("payments", data);
    }
}

export default PaymentService;