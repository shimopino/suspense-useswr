import { AxiosRequestConfig } from "axios";

export const loggingIntercepter = (request: AxiosRequestConfig) => {
  console.log(request);
  return request;
};
