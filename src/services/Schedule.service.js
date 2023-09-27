import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:3000/",
})

class ScheduleService {
    getById(id) {
        return http.get("schedules/" + id);
    }
    getAll() {
        return http.get('schedules');
    }

    create(data) {
        return http.post("schedules", data);
    }
}

export default ScheduleService;