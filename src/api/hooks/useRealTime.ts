import useSWR from "swr";
import { client } from "../client";

type RealTimeResponse = {
  current: string;
};

const getRealTime = async (path: string) => {
  const response = await client.get<RealTimeResponse>(path);

  return response.data;
};

export const useRealTime = () => {
  const { data, mutate, ...rest } = useSWR(
    "/realTime",
    (path) => getRealTime(path),
    {
      refreshInterval: 1000,
    }
  );

  return {
    current: data?.current,
    mutate,
    ...rest,
  };
};
