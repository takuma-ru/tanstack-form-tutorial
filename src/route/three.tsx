import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { z } from "zod";

const Three = () => {
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
    onSubmitInvalid: () => {
      window.alert("Invalid");
    },
  });

  return (
    <main>
      <h3>Captor04 : エラーハンドリング</h3>
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
              <>
                <input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  autoComplete="off"
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                <em>
                  {field.state.meta.errors && field.state.meta.errors.join(",")}
                </em>
              </>
            );
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default Three;
