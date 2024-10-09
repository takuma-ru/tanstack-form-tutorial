import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { z } from "zod";

const Two = () => {
  const form = useForm({
    defaultValues: {
      name: "",
    },
    validatorAdapter: zodValidator(),
    validators: {
      onChange: z.object({
        name: z.string().min(1),
      }),
    },
    onSubmit: (values) => {
      window.alert(JSON.stringify(values.value, null));
    },
  });

  return (
    <main>
      <h3>Captor03 : Zodを使ってバリデーションを設定する方法</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <form.Field
          name="name"
          validators={{
            onChange: z.string().min(3),
          }}
          children={(field) => {
            return (
              <input
                id={field.name}
                name={field.name}
                value={field.state.value}
                autoComplete="off"
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            );
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default Two;
