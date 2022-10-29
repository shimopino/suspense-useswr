import axios from "axios";
import { loggingIntercepter } from "./loggingIntercepter";
import { sleepIntercepter } from "./sleepIntercepter";

const requestIntercepters = [sleepIntercepter()];

export const client = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

client.interceptors.request.use(...requestIntercepters);
