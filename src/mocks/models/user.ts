import { factory, primaryKey } from "@mswjs/data";
import { faker } from "@faker-js/faker";

const initialUserCount = 20;

export const userModel = factory({
  user: {
    id: primaryKey(Number),
    name: String,
    email: String,
    age: Number,
  },
});

[...new Array(initialUserCount)].forEach((_, index) => {
  userModel.user.create({
    id: index + 1,
    name: faker.internet.userName(),
    email: faker.internet.email(),
    age: faker.datatype.number({ min: 10, max: 60 }),
  });
});
