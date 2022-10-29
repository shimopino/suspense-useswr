import axios from "axios";

export const client = axios.create({
  baseURL: import.meta.env.BACKEND_URL,
});
