import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function FormProducts() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="text" placeholder="Nome do produto" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="desciption">
        <Form.Label>Descrição</Form.Label>
        <Form.Control type="text" placeholder="Descreva detalhes do produto" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="desciption">
        <Form.Label>Preço</Form.Label>
        <Form.Control type="text" placeholder="Preço R$" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="desciption">
        <Form.Label>Vencimento</Form.Label>
        <Form.Control type="date"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="desciption">
        <Form.Label>Imagem</Form.Label>
        <Form.Control type="text" placeholder="Link da imagem" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Cadastrar
      </Button>
    </Form>
  );
}