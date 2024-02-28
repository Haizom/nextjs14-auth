"use client";

import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState<any, FormData>(() => console.log("handle logging in"), undefined);

  return (
    <form>
      <input type="text" name="username" required placeholder="username" />
      <input type="password" name="password" required placeholder="password" />
      <button>Login</button>
      {state?.error && <p>{state.error}</p>}
    </form>
  );
};

export default LoginForm;