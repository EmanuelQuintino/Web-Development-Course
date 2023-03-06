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
    const [editModalShow, setFormEditShow ] = useState(false);
    const [studentData, setStudentData ] = useState({
        id: "", 
        name: "", 
        email: "",
        cpf: "",
        birth: "",
        phone: "",
        gender: "",
        cep: "",
        number: "",
        street: "",
        district: "",
        city: "", 
        state: "",
        uf: "" 
    });

    const filterStudents = listStudents.filter((student) => {
        return (
            String(student.id).toLowerCase().includes(searchStudent.toLowerCase()) ||
            student.name.toLowerCase().includes(searchStudent.toLowerCase()) ||
            student.cpf.toLowerCase().includes(searchStudent.toLowerCase()) ||
            student.email.toLowerCase().includes(searchStudent.toLowerCase())
        );
    })
    
    const API = "http://localhost:3000/students/"
    
    function fetchStudents() {
        axios.get(API)
        .then((res) => setListStudents(res.data))
        .catch((error) => alert(error.response.data));
    }

    function deleteStudent(ID) {
        const isDelete = confirm("Deseja excluir o aluno?");
        if (isDelete) {
            axios.delete(API + ID)
            .then((res) => alert(res.data))
            .catch((error) => alert(error.response.data))
            .finally(() => {
                fetchStudents();
                modalClose();
            });
        }

    }

    useEffect(() => {
        fetchStudents();
    }, []);

    function modalOpen(ID) {
        setFormEditShow(true);
        const student = listStudents.filter((student) => String(student.id).includes(ID));
        const { id, name, email, cpf, birth, phone, gender, cep, number, street, district, city, state, uf } = student[0];
        
        let birthSplit = birth;
        if (String(birth).includes('T')) {
            birthSplit = String(birth).split('T')[0];
        }

        setStudentData({ id, name, email, cpf, birth: birthSplit, phone, gender, cep, number, street, district, city, state, uf });    
    }

    function modalClose() {
        setFormEditShow(false);
    }

    function handleChangeInputs(event) {
        const { name, value } = event.target;
        setStudentData({
            ...studentData,
            [name]: value
        });
    }

    function handleSubmitUpdateStudent(event) {
        event.preventDefault();
        const ID = event.target.id.value;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const cpf = event.target.cpf.value;
        const birth = event.target.birth.value;
        const phone = event.target.phone.value;
        const gender = event.target.gender.value;
        // const cep = event.target.cep.value;
        // const number = event.target.number.value;
        // const street = event.target.street.value;
        // const district = event.target.district.value;
        // const city = event.target.city.value;
        // const state = event.target.state.value;
        // const uf = event.target.uf.value;
        
        const dataStudentUpdate = {
            name, 
            email, 
            cpf,
            birth: birth ? birth : studentData.birth,
            phone,
            gender: gender ? gender : studentData.gender,
            cep: "63580-000",
            number: "123",
            street: "José Fafundo",
            district: "Planalto",
            city: "Jucás", 
            state: "Ceará",
            uf: "CE" 
        }

        console.log(dataStudentUpdate);

        axios.put(API + ID, dataStudentUpdate)
            .then((res) => alert(res.data))
            .catch((error) => console.error((error.response.data.error)))
            .finally(() => fetchStudents());
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
                                            {/* <td onClick={() => deleteStudent(student.id)}> */}
                                            <td onClick={() => modalOpen(student.id)}>
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
                    <Modal show={editModalShow} onHide={modalClose} className="modalUpdateStudents">
                        <Modal.Header closeButton>
                            <Modal.Title>Detalhes do Aluno</Modal.Title>
                        </Modal.Header>
                        <Form onSubmit={handleSubmitUpdateStudent}>
                            <Modal.Body>
                                <Form.Group className="mb-3" controlId="id">
                                    <Form.Label>ID</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="ID do Aluno"
                                        name="id"
                                        value={studentData.id}
                                        disabled
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Nome do aluno"
                                        autoFocus
                                        name="name"
                                        value={studentData.name}
                                        onChange={handleChangeInputs}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="nome@exemplo.com"
                                        name="email"
                                        value={studentData.email}
                                        onChange={handleChangeInputs}
                                        />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="cpf">
                                    <Form.Label>CPF</Form.Label>
                                    <Form.Control 
                                        type="text"
                                        placeholder="123.123.123-12"
                                        name="cpf"
                                        value={studentData.cpf}
                                        onChange={handleChangeInputs}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="birth">
                                    <Form.Label>Nascimento</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="birth"
                                        value={studentData.birth}
                                        onChange={handleChangeInputs}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="phone">
                                    <Form.Label>Celular</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="(00) 00000-0000 "
                                        name="phone"
                                        value={studentData.phone}
                                        onChange={handleChangeInputs}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="gender">
                                    <Form.Label>Gênero</Form.Label>
                                    {['radio'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3" id="radio">
                                            <Form.Check
                                                inline
                                                label="M"
                                                value={"M"}
                                                name="gender"
                                                type={type}
                                                id={`inline-${type}-1`}
                                                onChange={handleChangeInputs}
                                            />
                                            <Form.Check
                                                inline
                                                label="F"
                                                value={"F"}
                                                name="gender"
                                                type={type}
                                                id={`inline-${type}-2`}
                                                onChange={handleChangeInputs}
                                            />
                                            <Form.Check
                                                inline
                                                label="Outro"
                                                value={"Outro"}
                                                name="gender"
                                                type={type}
                                                id={`inline-${type}-3`}
                                                onChange={handleChangeInputs}
                                            />
                                        </div>
                                    ))}
                                </Form.Group>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="danger" onClick={() => deleteStudent(studentData.id)}>
                                    Deletar
                                </Button>
                                <Button variant="primary" type="submit" onClick={modalClose}>
                                    Atualizar
                                </Button>
                            </Modal.Footer>
                        </Form>
                    </Modal>
                </section>
            </article>
        </Container>
    )
}