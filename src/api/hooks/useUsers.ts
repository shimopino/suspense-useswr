import useSWR from "swr";
import { client } from "../client";

type UsersResponse = {
  id: number;
  name: string;
  email: string;
  age: number;
};

type UseSWRConfig = {
  suspense: boolean;
};

export const getUsers = async (path: string) => {
  const response = await client.get<UsersResponse[]>(path);

  return response.data;
};

export const useUsers = (config?: UseSWRConfig) => {
  const { data, mutate } = useSWR("/users", (path) => getUsers(path), {
    suspense: true,
    ...config,
  });

  return { users: data, mutate };
};
