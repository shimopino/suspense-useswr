import { useForm } from "react-hook-form";
import { z } from "zod";

const shema = z.object({
  email: z.string(),
  name: z.string(),
  minAge: z.union([z.number(), z.null()]),
  maxAge: z.union([z.number(), z.null()]),
});

type Schema = z.infer<typeof shema>;

export const UsersSearch = () => {
  const {} = useForm<Schema>({
    defaultValues: {
      email: "",
      name: "",
      minAge: null,
      maxAge: null,
    },
  });

  return (
    <form>
      <input type="text" placeholder="email" />
      <input type="text" placeholder="name" />
      <input type="number" placeholder="minAge" />
      <input type="number" placeholder="maxAge" />
    </form>
  );
};
