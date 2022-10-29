import useSWR from "swr";
import { userModel } from "../../mocks/models/user";

type SearchUsersBody = {
  minId?: number;
  maxId?: number;
  email?: string;
  name?: string;
  minAge?: number;
  maxAge?: number;
};

type UsersResponse = {
  id: number;
  name: string;
  email: string;
  age: number;
  birthDate: string;
};

export const searchUsers = (body: SearchUsersBody) => {
  const usersPromise = new Promise((resolve) => {
    const { email, name, minAge, maxAge } = body;

    const query = {
      ...(email ? { email: { contains: email } } : {}),
      ...(name ? { name: { contains: name } } : {}),
      ...(minAge || maxAge
        ? {
            age: {
              ...(minAge ? { gte: minAge } : {}),
              ...(maxAge ? { lte: maxAge } : {}),
            },
          }
        : {}),
    };

    const users = userModel.user.findMany({
      where: {
        ...query,
      },
    });
    return resolve(users);
  }).then((res) => res as UsersResponse[]);

  return usersPromise;
};

export const useUsersSaerch = (body: SearchUsersBody) => {
  const path = "/users";
  const serializedBody = JSON.stringify(body);

  const { data, mutate } = useSWR(
    [path, serializedBody],
    (path, params) => searchUsers(body),
    { suspense: true }
  );

  return {
    users: data,
  };
};
