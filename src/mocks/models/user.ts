import { factory, primaryKey } from "@mswjs/data";
import { faker } from "@faker-js/faker";
import { format } from "date-fns";

const initialUserCount = 5;

export const userModel = factory({
  user: {
    id: primaryKey(Number),
    name: String,
    email: String,
    age: Number,
    birthDate: String,
  },
});

[...new Array(initialUserCount)].forEach((_, index) => {
  const dateBirthDate = faker.date.birthdate({
    mode: "year",
    min: 1980,
    max: 2020,
  });
  const stringBirthDate = format(dateBirthDate, "yyyy-MM-dd");

  userModel.user.create({
    id: index + 1,
    name: faker.internet.userName(),
    email: faker.internet.email(),
    age: faker.datatype.number({ min: 10, max: 60 }),
    birthDate: stringBirthDate,
  });
});
