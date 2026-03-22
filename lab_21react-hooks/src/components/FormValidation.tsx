import { useActionState } from "react";

type FormState = {
  error: string;
  success: string;
};

function FormValidation() {
  const submitAction = async (
    prevState: FormState,
    formData: FormData
  ): Promise<FormState> => {
    const name = formData.get("name") as string;

    if (!name) {
      return { error: "Name is required", success: "" };
    }

    return { error: "", success: "Form Submitted Successfully" };
  };

  const [state, action] = useActionState<FormState, FormData>(
    submitAction,
    {
      error: "",
      success: ""
    }
  );

  return (
    <form action={action}>
      <input type="text" name="name" placeholder="Enter name" />
      <br />

      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
      {state.success && <p style={{ color: "green" }}>{state.success}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default FormValidation;