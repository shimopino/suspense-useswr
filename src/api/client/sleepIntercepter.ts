import { AxiosRequestConfig } from "axios";

const waitingTime = import.meta.env.VITE_API_DELAY_MS;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const sleepIntercepter =
  (ms: number = waitingTime) =>
  async (request: AxiosRequestConfig) => {
    console.log(request.url);
    await sleep(ms);
    return request;
  };
