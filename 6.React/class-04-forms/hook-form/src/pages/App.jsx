import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from "yup";
import './App.css'

const schema = object({
  name: string().required('Campo obrigatório!'),
  email: string().required('Campo obrigatório!'),
  term: string().oneOf(['yes'], 'Por favor, ler e aceitar os termos de uso para cadastrar!')
}).required();

export function App() {
  const { register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(schema)});
  console.log(errors);
  
  async function onSubmit(data) {
    console.log(data);

    const API = 'http://localhost:3000'
    await fetch(API + "/studants", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
    }
  })

    alert('Cadastro feito com sucesso!')
  };
  
  return (
    <form className='container' onSubmit={handleSubmit(onSubmit)}>
      <h1>Hook Form</h1>

      <section>
        <label htmlFor="inputName">Nome*:</label>
        <input type="text" id='inputName' placeholder='Digite seu nome' {...register("name")}/>
        <span className="error">{errors.name?.message}</span>
      </section>

      <section>
        <label htmlFor="inputEmail">E-mail*:</label>
        <input type="email" id='inputEmail' placeholder='Digite seu email' {...register("email")}/>
        <span className="error">{errors.email?.message}</span>
      </section>

      <section>
        <label htmlFor="selectCourse">Curso:</label>
        <select id="selectCourse" {...register("course")}>
          <option value="react">React</option>
          <option value="node.js">Node.JS</option>
        </select>
      </section>

      <section>
        <div>Matérias que tem aptidão:</div>
        <label><input type="checkbox" value='html' {...register("ability")}/>HTML</label>
        <label><input type="checkbox" value='css' {...register("ability")}/>CSS</label>
        <label><input type="checkbox" value='javascript'{...register("ability")}/>JavaScript</label>
      </section>

      <section>
        <div>Aceita os termos de uso?</div>
        <span>
          <input type="radio" id='yes' value='yes' defaultChecked {...register("term")}/>
          <label htmlFor="yes">Sim</label>
        </span>
        <span>
          <input type="radio" id='no' value='no' {...register("term")}/>
          <label htmlFor="no">Não</label>
        </span>
        <span className="error">{errors.term?.message}</span>
      </section>

      <section>
        <label htmlFor="question">Por que deseja fazer esse curso?</label>
        <textarea
          id="question"
          cols="30"
          rows="4"
          maxLength={'100'}
          placeholder='Digite suas razões aqui'
          {...register("question")}>
        </textarea>
      </section>

      <button type="submit">Enviar</button>
    </form>
  )
}