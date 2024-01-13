import { paths } from "@/services/paths";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

const initState = {
  email: "dummy@email.com",
  password: "*123456*",
};

const useLogin = () => {
  const [state, setState] = useState({ ...initState });
  const router = useRouter();

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(paths.todos);
  };
  return { state, changeHandler, submitHandler };
};

export default useLogin;
