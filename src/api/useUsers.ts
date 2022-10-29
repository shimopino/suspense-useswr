import axios, { AxiosRequestConfig } from "axios";

const sleep = (ms: number = 0) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const sleepIntercepter =
  (ms: number) => async (request: AxiosRequestConfig) => {
    console.log(request.url);
    await sleep(ms);
    return request;
  };

export const client = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

client.interceptors.request.use(sleepIntercepter(0));

console.log(import.meta.env.VITE_BACKEND_URL);
console.log(client.defaults.baseURL);
