import axios from "axios";
import { sleepIntercepter } from "./sleepIntercepter";

export const client = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

client.interceptors.request.use(sleepIntercepter());
