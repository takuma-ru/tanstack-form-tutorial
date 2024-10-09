import { useForm } from "@tanstack/react-form";

const One = () => {
  const form = useForm({
    defaultValues: {
      name: "",
    },
    onSubmit: (values) => {
      window.alert(JSON.stringify(values.value, null));
    },
  });

  return (
    <main>
      <h3>Captor02 : 超基本的な使い方</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <form.Field
          name="name"
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

export default One;
