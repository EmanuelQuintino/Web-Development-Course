import { SubmitHandler, useForm } from "react-hook-form";
import "./App.css";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

export function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
              {...register("name", { required: "Campo obrigatório!" })}
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
                required: "Campo obrigatório!",
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
            Password:
            <input
              type="password"
              placeholder="mínimo de 7 dígitos"
              {...register("password", {
                required: "Campo obrigatório!",
                minLength: {
                  value: 7,
                  message: "A senha deve ter no mínimo 7 dígitos!",
                },
                pattern: {
                  value: /^(?=.*[a-zA-Z])(?=.*\d).+/i,
                  message: "A senha deve ser alfanumérica",
                },
              })}
            />
          </label>
          <span className="errors">{errors?.password?.message}</span>
        </section>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
