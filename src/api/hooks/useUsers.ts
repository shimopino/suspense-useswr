import useSWR from "swr";
import { userModel } from "../../mocks/models/user";
import { client } from "../client";

type UsersResponse = {
  id: number;
  name: string;
  email: string;
  age: number;
};

export const getUsers = async (path: string) => {
  const response = await client.get<UsersResponse[]>(path);

  return response.data;
};

export const useUsers = () => {
  const { data, mutate, ...rest } = useSWR("/users", (path) => getUsers(path), {
    suspense: true,
  });

  return { users: data, mutate, ...rest };
};
