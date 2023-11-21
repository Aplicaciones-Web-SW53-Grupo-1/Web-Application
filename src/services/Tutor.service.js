import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:5255/api/",
})

class TutorService {
    getById(id) {
        return http.get("Tutor/" + id);
    }
    getAll() {
        return http.get('Tutor');
    }

    create(data) {
        return http.post("Tutor", data);
    }
}

export default TutorService;