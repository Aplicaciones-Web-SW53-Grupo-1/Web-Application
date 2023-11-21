import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:5255/api/",
})

class StudentService {
    getById(id) {
        return http.get("Student/" + id);
    }
    getAll() {
        return http.get('Student');
    }

    create(data) {
        return http.post("Student", data);
    }
}

export default StudentService;