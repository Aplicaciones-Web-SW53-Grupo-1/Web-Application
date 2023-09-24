import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:3000/",
})

class StudentService {
    getById(id) {
        return http.get("students/" + id);
    }
    getAll() {
        return http.get('students');
    }

    create(data) {
        return http.post("students", data);
    }
}

export default StudentService;