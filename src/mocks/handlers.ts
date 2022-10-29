import { rest } from "msw";
import { client } from "../api/useUsers";
import { userModel } from "./models/user";

export const handlers = [
  ...userModel.user.toHandlers("rest", client.defaults.baseURL),
];
