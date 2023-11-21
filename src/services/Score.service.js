import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:5255/api/",
})

class ScoreService {
    getById(id) {
        return http.get("Score/" + id);
    }
    getAll() {
        return http.get('Score');
    }

    create(data) {
        return http.post("Score", data);
    }
}

export default ScoreService;