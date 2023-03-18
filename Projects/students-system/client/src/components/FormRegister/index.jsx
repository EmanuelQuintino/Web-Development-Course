import { Container } from "./style"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from "yup";
import InputMask from 'react-input-mask';
import { useState, useEffect } from "react";
import { API } from "../../config/api";

const schema = object({
  name: string().required("Preencha este campo").max(40, "Tamanho máximo de até 40 caracteres"),
  email: string().email("Preencha um Email válido").required("Preencha este campo").max(40, "Tamanho máximo de até 40 caracteres"),
  cpf: string().required("Preencha este campo").max(14, "Tamanho máximo de até 14 caracteres"),
  birth: string().required("Preencha este campo").max(10, "Tamanho máximo de até 10 caracteres"),
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

export function FormRegister() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });
    
    function onSubmit(data) {
        console.log(data);
        API.post("/students", data)
          .then((res) => alert(res.data))
          .catch((error) => alert(error.response.data));
        // reset();
    }

    // const [CEPData, setcCEPtData] = useState();
    
    // async function callCEP(event) {
    //   const CEP = event.target.value;
    //   fetch(`https://cdn.apicep.com/file/apicep/${CEP}.json`)
    //   fetch(`https://viacep.com.br/ws/${CEP}/json/`)
    //     .then((request) => request.json())
    //     .then((data) => setcCEPtData(data));
    // }

    // console.log(CEPData);

    return (
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <section>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" {...register("name")} placeholder="Digite o nome do aluno" autoFocus/>
            <span className="error">{errors.name?.message}</span>
          </section>

          <section>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Digite o email do aluno" {...register("email")}/>
            <span className="error">{errors.email?.message}</span>
          </section>

          <section>
            <label htmlFor="cpf">CPF</label>
            <InputMask 
              mask={"999.999.999-99"} 
              placeholder="000.000.000-00"
              type="text" 
              id="cpf" 
              {...register("cpf")}
            />
            <span className="error">{errors.phone?.message}</span>
          </section>

          <section>
            <label htmlFor="birth">Nascimento</label>
            <input type="date" id="birth" {...register("birth")}/>
            <span className="error">{errors.phone?.message}</span>
          </section>

          <section>
            <label htmlFor="phone">Telefone</label>
            <InputMask
              mask={"(99) 99999-9999"}
              placeholder="(00) 00000-0000" 
              type="tel" 
              id="phone" 
              {...register("phone")}
            />
            <span className="error">{errors.phone?.message}</span>
          </section>

          <section className="radioGender">
            <div>Gênero</div>
            <span>
              <input type="radio" id='male' value='M' {...register("gender")}/>
              <label htmlFor="male">Masculo</label>
            </span>
            <span>
              <input type="radio" id='female' value='F' {...register("gender")}/>
              <label htmlFor="female">Femino</label>
            </span>
            <span>
              <input type="radio" id='other' value='Outro' {...register("gender")}/>
              <label htmlFor="other">Outro</label>
            </span>
            <span className="error">{errors.gender?.message}</span>
          </section>

          <section>
            <label htmlFor="cep">CEP</label>
            <InputMask
              mask={"99999-999"} 
              type="text" 
              id="cep" 
              placeholder="12345-678" 
              {...register("cep")} 
              // onBlur={callCEP}
            />
            <span className="error">{errors.cep?.message}</span>
          </section>
      
          <section>
            <label htmlFor="number">Número</label>
            <input type="text" id="number" placeholder="123A" {...register("number")}/>
            <span className="error">{errors.number?.message}</span>

          </section>
              
          <section>
            <label htmlFor="street">Logradouro</label>
            
            <input 
              type="text" 
              id="street" 
              placeholder="Ex: Rua, Avenida, Travessa" 
              {...register("street")}
              // value={CEPData ? CEPData.logradouro : ""}
            />
            
            <span className="error">{errors.street?.message}</span>
          </section>
              
          <section>
            <label htmlFor="district">Bairro</label>
            
            <input 
              type="text" 
              id="district" 
              {...register("district")}
              // value={CEPData ? CEPData.bairro : ""}
              />
            
            <span className="error">{errors.district?.message}</span>
          </section>
      
          <section>
            <label htmlFor="city">Cidade</label>

            <input 
              type="text" 
              id="city" 
              {...register("city")}
              // value={CEPData ? CEPData.localidade : ""}
            />
            
            <span className="error">{errors.city?.message}</span>
          </section>
              
          <section>
            <label htmlFor="state">Estado</label>
            <select 
              id="state" 
              {...register("state")} 
              // value={CEPData ? CEPData.uf : ""}
            >
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
            <input 
              type="text" 
              id="uf" 
              placeholder="Ex: CE" 
              {...register("uf")}
              // value={CEPData ? CEPData.uf : ""}
            />
            <span className="error">{errors.uf?.message}</span>
          </section>

          <button>Cadastrar</button>
        </form>
      </Container>
    )
}