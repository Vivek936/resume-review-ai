import axios from "axios";

const API = axios.create({
  baseURL: "https://resume-review-ai.onrender.com/api"
});

export default API;
