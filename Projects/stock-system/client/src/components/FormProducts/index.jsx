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
          <Form.Label>Nome</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="*Nome do produto" 
            {...register("name", { required: true })}
          />
          {errors.name && <span className='error'>Campo obrigatório</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="desciption">
          <Form.Label>Descrição</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="*Descreva detalhes do produto"
            {...register("description", { required: true })} 
          />
          {errors.description && <span className='error'>Campo obrigatório</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Preço</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="*R$ 3.50"
            {...register("price", { required: true })}
          />
          {errors.price && <span className='error'>Campo obrigatório</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="expiresIn">
          <Form.Label>Data de vencimento</Form.Label>
          <Form.Control 
            type="date" 
            {...register("expiresIn", { required: true })}
          />
          {errors.expiresIn && <span className='error'>Campo obrigatório</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="linkImage">
          <Form.Label>Imagem</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="*Link da imagem" 
            {...register("linkImage", { required: true })}
          />
          {errors.linkImage && <span className='error'>Campo obrigatório</span>}
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