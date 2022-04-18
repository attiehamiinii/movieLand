import axios from "axios";
import config from "../config";

const api = axios.create ( {
    baseURL : config.api.endpoint,
})

api.interceptors.request.use(request => {
    request.headers = {...request.headers,'Accept-Language': 'en'};
});

export default api;