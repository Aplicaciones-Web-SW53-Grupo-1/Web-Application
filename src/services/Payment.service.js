import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:3000/",
})

class PaymentService {
    getByParam(param){
        return http.get("creditCards?" + param);
    }
    getById(id) {
        return http.get("creditCards/" + id);
    }
    getAll() {
        return http.get('creditCards');
    }

    create(data) {
        return http.post("creditCards", data);
    }
}

export default PaymentService;