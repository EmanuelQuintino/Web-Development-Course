import { Container } from "./styled";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";


export function FormEdit({ isActive }) {
    const [editModalShow, setFormEditShow ] = useState(isActive);
    console.log(editModalShow);

    function handleModalEdit() {
        setFormEditShow(!isActive);
    }

    return (
        <Container>
            <Modal show={editModalShow} onHide={() => handleModalEdit()}>
                <Modal.Header closeButton>
                <Modal.Title>Detalhes do Aluno</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        autoFocus
                    />
                    </Form.Group>
                    <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                    >
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleModalEdit}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleModalEdit}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}