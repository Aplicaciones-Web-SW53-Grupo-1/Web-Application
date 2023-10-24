import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:3000/",
})

class TutorService {
    getById(id) {
        return http.get("tutors/" + id);
    }
    getAll() {
        return http.get('tutors');
    }

    create(data) {
        return http.post("tutors", data);
    }
}

export default TutorService;