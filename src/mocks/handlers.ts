import { rest } from "msw";
import { userModel } from "./models/user";

export const handlers = [...userModel.user.toHandlers("rest")];
