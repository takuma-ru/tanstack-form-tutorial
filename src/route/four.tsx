import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { z } from "zod";

const Four = () => {
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
      <h3>Captor05 : Submitボタンを制御する</h3>
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
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <button type="submit" disabled={!canSubmit}>
              {isSubmitting ? "..." : "Submit"}
            </button>
          )}
        />
      </form>
    </main>
  );
};

export default Four;
