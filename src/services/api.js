import axios from "axios";

const api = axios.create({
  baseURL: "https://contactspace.onrender.com",
  timeout: 10000,
  
});
export default api;