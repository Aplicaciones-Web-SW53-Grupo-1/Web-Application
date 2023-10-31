import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:3000/",
})

class TutorService {
    getById(id) {
        return http.get("tutores/" + id);
    }
    getAll() {
        return http.get('tutores');
    }

    create(data) {
        return http.post("tutores", data);
    }
}

export default TutorService;