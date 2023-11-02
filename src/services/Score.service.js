import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:3000/",
})

class ScoreService {
    getById(id) {
        return http.get("scores?studentId=" + id);
    }
    getAll() {
        return http.get('scores');
    }

    create(data) {
        return http.post("scores", data);
    }
}

export default ScoreService;