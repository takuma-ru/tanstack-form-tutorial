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
      window.alert(values.value);
    },
  });

  return (
    <main>
      <h1>Captor.01 : 超基本的な使い方</h1>
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
