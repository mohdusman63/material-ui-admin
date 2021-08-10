import axios from "axios";
let BACKEND_SERVER_URL="https://jsonplaceholder.typicode.com"

const api = axios.create({
    baseURL: BACKEND_SERVER_URL
});

api.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            window.location.href = "/logout";
            return error.response.data;
        } else if (error.response && error.response.status === 400) {
            return error.response.data;
        } else {
            if (error.response && error.response.data) {
                return error.response.data;
            } else {
                return {
                    data: { statusCode: 404, message: "Sorry! Something went wrong" },
                };
            }
        }
    }
);

export default api;
