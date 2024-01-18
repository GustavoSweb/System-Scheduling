import axios from "axios";
const api = await axios.create({ baseURL: "http://localhost:8081" });
export default api;

