import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:3000/",
})

class ReviewService {
    getById(id) {
        return http.get("reviews/" + id);
    }

    getByTutorId(id){
        return http.get("reviews?=tutorId=" + id)
    }
    getAll() {
        return http.get('reviews');
    }

    create(data) {
        return http.post("reviews", data);
    }
}

export default ReviewService;