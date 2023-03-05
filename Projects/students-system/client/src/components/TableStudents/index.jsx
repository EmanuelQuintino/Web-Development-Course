import { Container } from "./style"
import { useState, useEffect } from "react"
import axios from "axios";
import { Table } from 'react-bootstrap';
import { BsSearch } from "react-icons/bs"
import { BiEdit } from "react-icons/bi"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export function TableStudents() {
    const [listStudents, setListStudents] = useState([]);
    const [searchStudent, setSearchStudent] = useState('');
    const [editModalShow, setFormEditShow ] = useState(true);

    const filterStudents = listStudents.filter((student) => {
        return (
            String(student.id).toLowerCase().includes(searchStudent.toLowerCase()) ||
            student.name.toLowerCase().includes(searchStudent.toLowerCase()) ||
            student.cpf.toLowerCase().includes(searchStudent.toLowerCase()) ||
            student.email.toLowerCase().includes(searchStudent.toLowerCase())
        );
    })
    
    const API = "http://localhost:3000/students/"
    
    function listEstudents() {
        axios.get(API)
        .then((res) => setListStudents(res.data))
        .catch((error) => alert((error.response.data)));
    }

    function deleteEstudent(ID) {
        axios.delete(API + ID)
        .then((res) => alert(res.data))
        .catch((error) => console.error(error))
        .finally(() => listEstudents());
    }

    useEffect(() => {
        listEstudents();
    }, []);

    function handleModalEdit() {
        setFormEditShow(!editModalShow);
    }

    function updateStudent(event) {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const cpf = event.target.cpf.value;
        
        const dataStudent = {
            name, 
            email, 
            cpf
        }

        console.log(dataStudent);

        axios.put(API + "ID", dataStudent)
            .then((res) => alert(res.data))
            .catch((error) => alert((error.response.data)));
    }
    
    return (
        <Container>
            <article>
                <section className="titleSearch">
                    <h1>Alunos</h1>
                    <div className="inputSection">
                        <input
                            id="inputSearchStudent" 
                            type="text"
                            placeholder=" " 
                            onChange={(event) => setSearchStudent(event.target.value)}
                        />
                        <label htmlFor="inputSearchStudent" className="labelInputSearch">Buscar aluno</label>
                        <BsSearch className="searchIcon"/>
                    </div>
                </section>

                <section className="tableStudents">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Cidade</th>
                                <th>Telefone</th>
                                <th>Detalhes</th>
                            </tr>
                        </thead>
                        <tbody>
                            { listStudents &&
                                filterStudents.map((student, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{student.id}</td>
                                            <td>{student.name}</td>
                                            <td>{student.city}</td>
                                            <td>{student.phone}</td>
                                            {/* <td onClick={() => deleteEstudent(student.id)}> */}
                                            <td onClick={handleModalEdit}>
                                                <BiEdit className="editIcon"/>
                                            </td>
                                        </tr>
                                    )
                                }) 
                            }
                        </tbody>
                    </Table>  
                </section>

                <section>
                    <Modal show={editModalShow} onHide={handleModalEdit}>
                        <Modal.Header closeButton>
                            <Modal.Title>Detalhes do Aluno</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={updateStudent}>
                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="nome do aluno"
                                        autoFocus
                                        name="name"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="nome@exemplo.com"
                                        name="email"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="cpf">
                                    <Form.Label>CPF</Form.Label>
                                    <Form.Control 
                                        type="text"
                                        placeholder="123.123.123-12"
                                        name="cpf"
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit" onClick={handleModalEdit}>
                                    Salvar
                                </Button>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleModalEdit}>
                                Fechar
                            </Button>
                            <Button variant="primary" type="submit" onClick={handleModalEdit}>
                                Salvar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </section>
            </article>
        </Container>
    )
}