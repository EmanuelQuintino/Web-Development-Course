import { SubmitHandler, useForm } from "react-hook-form";
import "./App.css";

type Inputs = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

export function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (data.name === "Emanuel") {
      setError("name", {
        type: "manual",
        message: "Nome Emanuel não pode",
      });
      return;
    }
    console.log(data);
  };

  function passwordValidate() {
    if (watch("password") !== watch("passwordConfirm")) {
      return "Senhas não conferem";
    }
    return true;
  }

  return (
    <div className="container">
      <h1>Class 08 Forms</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <label>
            Nome:
            <input
              type="text"
              placeholder="digite seu nome"
              autoFocus
              {...register("name", { required: "Campo obrigatório" })}
            />
          </label>
          <span className="errors">{errors?.name?.message}</span>
        </section>

        <section>
          <label>
            Email:
            <input
              type="text"
              placeholder="exemplo@email.com"
              {...register("email", {
                required: "Campo obrigatório",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Endereço de e-mail inválido",
                },
              })}
            />
          </label>
          <span className="errors">{errors?.email?.message}</span>
        </section>

        <section>
          <label>
            Senha:
            <input
              type="text"
              placeholder="mínimo de 7 dígitos"
              {...register("password", {
                required: "Campo obrigatório",
                minLength: {
                  value: 7,
                  message: "A senha deve ter no mínimo 7 dígitos",
                },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|:"<>?,./\\[\]-]).+$/,
                  message:
                    "A senha deve ter número, letra maiúscula e caractere especial",
                },
              })}
            />
          </label>
          <span className="errors">{errors?.password?.message}</span>
        </section>

        <section>
          <label>
            Confirmar Senha:
            <input
              type="password"
              placeholder="digite a senha novamente"
              {...register("passwordConfirm", {
                required: "Campo obrigatório",
                validate: passwordValidate,
              })}
            />
          </label>
          <span className="errors">{errors?.passwordConfirm?.message}</span>
        </section>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
