import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

/**
 * zodResolverと連携させる上での注意点
 *
 * # 文字列型以外でのOptionalなパラメータの処理
 * ## 数値型の場合
 * サンプルコードでReact-Hook-Formで非制御として以下のように登録しようとする
 *
 *   <input type="number" {...register("age", { valueAsNumber: true })} >
 *
 * ただしこの場合、初期値にnullなどを設定している任意パラメータの場合、NaNとして解釈される
 * NaNを比較に追加したとしても "Nan === NaN" の結果は常に false になってしまうため、
 * 検証処理は常に失敗してしまう
 *
 *   - https://react-hook-form.com/api/useform/register#valueAsNumber:
 *
 * そこでOptioonalな項目に対しては、以下のようにReact-Hook-Form側で入力値を変換する必要がある
 *
 *   <inout
 *     type="number"
 *     {...register("age", {
 *       setValueAs: (v) => v === "" ? null : parseInt(v, 10)
 *     })}
 *   />
 *
 * この関数は検証処理の前に実行される。そのためここで受け取る値は全て入力要素に入力された
 * 文字列型の入力となる
 *   => 検証が必要
 *
 * ## 参考リンク
 *   - https://github.com/react-hook-form/react-hook-form/discussions/6980
 */

const schema = z
  .object({
    email: z.string().refine((email) => email.length <= 30, "30桁以下"),
    name: z.string().refine((name) => name.length <= 10, "10桁以下"),
    minAge: z.union([z.number(), z.null()]).refine((minAge) => {
      console.log("refine minAge", minAge, typeof minAge);
      return true;
    }),
    maxAge: z.union([z.number(), z.null()]).refine((maxAge) => {
      console.log("refine maxAge", maxAge, typeof maxAge);
      return true;
    }),
  })
  .refine(
    ({ minAge, maxAge }) => {
      if (minAge === null) return true;
      if (maxAge === null) return true;

      console.log("hikaku");
      return minAge <= maxAge;
    },
    { message: "正しく設定", path: ["minAge"] }
  )
  .refine(
    ({ minAge, maxAge }) => {
      if (minAge === null) return true;
      if (maxAge === null) return true;

      console.log("hikaku");
      return minAge <= maxAge;
    },
    { message: "正しく設定", path: ["maxAge"] }
  );

type Schema = z.infer<typeof schema>;

export const UsersSearch = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<Schema>({
    mode: "onChange",
    defaultValues: {
      email: "",
      name: "",
      minAge: null,
      maxAge: null,
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: Schema) => console.log(data);

  console.log({ errors });

  console.log({ inputs: getValues() });

  return (
    <>
      <form onChange={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("email")}
          //   onChange={(e) => console.log("email", typeof e.target.value)}
        />
        {errors.email?.message && <p>{errors.email?.message}</p>}
        <input
          type="text"
          {...register("name")}
          //   onChange={(e) => console.log("name", typeof e.target.value)}
        />
        {errors.name?.message && <p>{errors.name?.message}</p>}
        <input
          type="number"
          {...register("minAge", {
            setValueAs: (v) => {
              console.log("setValueAs minAge", v, typeof v);
              return v === "" || v === null ? null : parseInt(v, 10);
              //   return v;
            },
          })}
          //   onChange={(e) => console.log("minAge", typeof e.target.value)}
        />
        {errors.minAge?.message && <p>{errors.minAge?.message}</p>}
        <input
          type="number"
          {...register("maxAge", {
            setValueAs: (v) => {
              console.log("setValueAs maxAge", v, typeof v);
              return v === "" || v === null ? null : parseInt(v, 10);
              //   return v;
            },
          })}
          //   onChange={(e) => console.log("maxAge", typeof e.target.value)}
        />
        {errors.maxAge?.message && <p>{errors.maxAge?.message}</p>}
      </form>
    </>
  );
};
