import { Container } from './style';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";

export function FormProducts() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const API = "http://localhost:3000/products";
  
  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Produto</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Nome do produto" 
            {...register("product", { 
              required: "Campo obrigatório",
              pattern: {value: /[A-Za-z]/, message: "Somente texto é permitido"}, 
              maxLength: {value: 60, message: "Número máximo de caracteres é 60"}
            })}
          />
          {errors.name && <span className='error'>{errors.name.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="desciption">
          <Form.Label>Descrição</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Descreva detalhes do produto"
            {...register("description", { 
              required: "Campo obrigatório", 
              maxLength: {value: 60, message: "Número máximo de caracteres é 60"}
            })} 
          />
          {errors.description && <span className='error'>{errors.description.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Preço</Form.Label>
          <Form.Control 
            type="number"
            step={0.1}
            min = {0}
            placeholder="R$ 3.50"
            inputMode='numeric'
            autoComplete='cc-number'
            {...register("price", { 
              required: "Campo obrigatório",
              pattern: {value: /[0-9]/, message: "Somente números é permitido"}, 
              maxLength: {value: 60, message: "Número máximo de caracteres é 60"}
            })}
          />
          {errors.price && <span className='error'>{errors.price.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="expiresIn">
          <Form.Label>Data de vencimento</Form.Label>
          <Form.Control 
            type="date" 
            {...register("expiresIn", { 
              required: "Campo obrigatório",
              pattern: {value: /\d{4}[/-]\d{2}[/-]\d{2}/, message: "Insira uma data válida"}, 
              maxLength: {value: 10, message: "Número máximo de caracteres é 10"}
            })}
          />
          {errors.expiresIn && <span className='error'>{errors.expiresIn.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="linkImage">
          <Form.Label>Imagem</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Link da imagem" 
            {...register("linkImage", { 
              required: "Campo obrigatório", 
              maxLength: {value: 255, message: "Número máximo de caracteres é 255"}
            })}
          />
          {errors.linkImage && <span className='error'>{errors.linkImage.message}</span>}
        </Form.Group>

        <Button variant="primary" type="submit" style={{
          marginTop: "1.6rem",
          width: "100%",
          padding: ".4rem",
          fontSize: "1.4rem" 
        }}>
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
}