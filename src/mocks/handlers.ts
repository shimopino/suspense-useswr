import { rest } from "msw";
import { client } from "../api/client";
import { realTimeHandlers } from "./models/realtime";
import { userModel } from "./models/user";

export const handlers = [
  ...userModel.user.toHandlers("rest", client.defaults.baseURL),
  ...realTimeHandlers,
];
