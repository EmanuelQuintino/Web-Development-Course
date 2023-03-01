import { Container } from "./style"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string, number } from "yup";

const schema = object({
  name: string().required("Preencha este campo").max(40, "Tamanho máximo de até 40 caracteres"),
  email: string().email("Preencha um Email válido").required("Preencha este campo").max(40, "Tamanho máximo de até 40 caracteres"),
  phone: string().required("Preencha este campo").max(40, "Tamanho máximo de até 40 caracteres"),
  gender: string().required("Preencha este campo").max(40, "Tamanho máximo de até 40 caracteres"),
  cep: string().required("Preencha este campo").max(40, "Tamanho máximo de até 40 caracteres"),
  number: string().required("Preencha este campo").max(10, "Tamanho máximo de até 10 caracteres"),
  street: string().required("Preencha este campo").max(40, "Tamanho máximo de até 40 caracteres"),
  district: string().required("Preencha este campo").max(40, "Tamanho máximo de até 40 caracteres"),
  city: string().required("Preencha este campo").max(40, "Tamanho máximo de até 40 caracteres"),
  state: string().required("Preencha este campo").max(4, "Tamanho máximo de até 40 caracteres"),
  uf: string().required("Preencha este campo").max(2, "Tamanho máximo de até 2 caracteres"),
}).required();

export function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  
  function onSubmit(data) {
    console.log(data);
  }

  console.log(errors);

  return (
    <Container>
      <h1>Cadastro de Aluno</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" {...register("name")}/>
          <span className="error">{errors.name?.message}</span>
        </section>

        <section>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")}/>
          <span className="error">{errors.email?.message}</span>
        </section>

        <section>
          <label htmlFor="phone">Telefone</label>
          <input type="text" id="phone" {...register("phone")}/>
          <span className="error">{errors.phone?.message}</span>
        </section>

        <section className="radioGender">
          <div>Gênero</div>
          <span>
            <input type="radio" id='male' value='M' {...register("gender")}/>
            <label htmlFor="male"> Masculo</label>
          </span>
          <span>
            <input type="radio" id='female' value='F' {...register("gender")}/>
            <label htmlFor="female"> Femino</label>
          </span>
          <span>
            <input type="radio" id='other' value='Outro' {...register("gender")}/>
            <label htmlFor="other"> Outro</label>
          </span>
          <span className="error">{errors.gender?.message}</span>
        </section>

        <section>
          <label htmlFor="cep">CEP</label>
          <input type="text" id="cep" placeholder="12345-678" {...register("cep")}/>
          <span className="error">{errors.cep?.message}</span>
        </section>
    
        <section>
          <label htmlFor="number">Número</label>
          <input type="text" id="number" placeholder="Ex: 123" {...register("number")}/>
          <span className="error">{errors.number?.message}</span>

        </section>
            
        <section>
          <label htmlFor="street">Logradouro</label>
          <input type="text" id="street" placeholder="Ex: Rua, Avenida, Travessa" {...register("street")}/>
          <span className="error">{errors.street?.message}</span>
        </section>
            
        <section>
          <label htmlFor="district">Bairro</label>
          <input type="text" id="district" {...register("district")}/>
          <span className="error">{errors.district?.message}</span>
        </section>
    
        <section>
          <label htmlFor="city">Cidade</label>
          <input type="text" id="city" {...register("city")}/>
          <span className="error">{errors.city?.message}</span>
        </section>
            
        <section>
          <label htmlFor="state">Estado</label>
          <select id="state" {...register("state")}>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </select>
            <span className="error">{errors.state?.message}</span>
        </section>
          
        <section>
          <label htmlFor="uf">UF</label>
          <input type="text" id="uf" placeholder="Ex: CE" {...register("uf")}/>
          <span className="error">{errors.uf?.message}</span>
        </section>

        <button>Enviar</button>
      </form>
    </Container>
  )
}