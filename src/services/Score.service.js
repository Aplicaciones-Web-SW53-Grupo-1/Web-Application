import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:3000/",
})

class ScoreService {
    getById(id) {
        return http.get("appointments/" + id);
    }
    getAll() {
        return http.get('appointments');
    }

    create(data) {
        return http.post("appointments", data);
    }
}

export default ScoreService;