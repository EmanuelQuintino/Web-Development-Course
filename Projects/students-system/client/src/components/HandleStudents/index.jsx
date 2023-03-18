import { Container } from "./style"
import { useState, useEffect } from "react"
import axios from "axios";
import { Table } from 'react-bootstrap';
import { BsSearch } from "react-icons/bs"
import { BiEdit } from "react-icons/bi"
import Modal from 'react-bootstrap/Modal';
import { FormUpdate } from "../FormUpdate";


export function HandleStudents() {
    const [listStudents, setListStudents] = useState([]);
    const [searchStudent, setSearchStudent] = useState('');
    const [editModalShow, setFormEditShow ] = useState(false);
    const [studentData, setStudentData ] = useState({});

    const filterStudents = listStudents.filter((student) => {
        return (
            String(student.id).toLowerCase().includes(searchStudent.toLowerCase()) ||
            student.name.toLowerCase().includes(searchStudent.toLowerCase()) ||
            student.city.toLowerCase().includes(searchStudent.toLowerCase())
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
        const cep = event.target.cep.value;
        const number = event.target.number.value;
        const street = event.target.street.value;
        const district = event.target.district.value;
        const city = event.target.city.value;
        const state = event.target.state.value;
        const uf = event.target.uf.value;
        
        const dataStudentUpdate = {
            name, 
            email, 
            cpf,
            birth: birth ? birth : studentData.birth,
            phone,
            gender: gender ? gender : studentData.gender,
            cep,
            number,
            street,
            district,
            city, 
            state,
            uf 
        }

        console.log(dataStudentUpdate);

        axios.put(API + ID, dataStudentUpdate)
            .then((res) => {
                alert(res.data)
                modalClose();
            })
            .catch((error) => alert((error.response.data)))
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
                    <Modal show={editModalShow} onHide={modalClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Detalhes do Aluno</Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{padding: '.8rem 2.4rem'}}>
                            <FormUpdate 
                                    modalClose={modalClose} 
                                    studentData={studentData}
                                    fetchStudents={fetchStudents}
                                />
                        </Modal.Body>
                            
                    </Modal>
                </section>
            </article>
        </Container>
    )
}