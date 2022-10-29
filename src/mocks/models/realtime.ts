import { rest } from "msw";
import { client } from "../../api/client";

const baseUrl = client.defaults.baseURL;

export const realTimeHandlers = [
  rest.get(`${baseUrl}/realTime`, (req, res, ctx) => {
    const current = new Date();
    return res(
      ctx.status(200),
      ctx.json({
        current,
      })
    );
  }),
];
