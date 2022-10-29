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
      // デフォルトでは無効（=0）が設定されている
      // 数値が設定されていれば、ミリ秒単位でポーリングする
      // refreshInterval: 1000,
    }
  );

  return {
    current: data?.current,
    mutate,
    ...rest,
  };
};
