import { Container } from "./style";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export function FormLogin() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group md="4" controlId="emailLogin">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Digite seu email"
            />
            <Form.Control.Feedback type="invalid">
              Campo obrigatório
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group md="6" controlId="passwordLogin">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Informe a senha" required />
            <Form.Control.Feedback type="invalid">
              Campo obrigatório
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type="submit">Logar</Button>
      </Form>
    </Container>
  );
}