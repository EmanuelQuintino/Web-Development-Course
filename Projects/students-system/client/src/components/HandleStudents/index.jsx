import { Container } from "./style"
import { useState, useEffect } from "react"
import { Table } from 'react-bootstrap';
import { BsSearch } from "react-icons/bs"
import { BiEdit } from "react-icons/bi"
import Modal from 'react-bootstrap/Modal';
import { FormUpdate } from "../FormUpdate";
import {API} from"../../config/api";
import { ImSpinner2 } from 'react-icons/im'

export function HandleStudents() {
    const [listStudents, setListStudents] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [studentData, setStudentData] = useState({});
    const [searchStudent, setSearchStudent] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const filterStudents = listStudents.filter((student) => {
        return (
            String(student.id).toLowerCase().includes(searchStudent.toLowerCase()) ||
            student.name.toLowerCase().includes(searchStudent.toLowerCase()) ||
            student.city.toLowerCase().includes(searchStudent.toLowerCase())
        );
    })
    
    
    function fetchStudents() {
        setIsLoading(true);
        API.get("/students")
            .then((res) => setListStudents(res.data))
            .catch((error) => alert(error.response.data))
            .finally(setIsLoading(false));
    }

    useEffect(() => {
        fetchStudents();
    }, []);

    function modalOpen(studentID) {
        setShowModal(true);
        const student = listStudents.findIndex(student => student.id === studentID);
        setStudentData(listStudents[student]);  
    }

    function modalClose() {
        setShowModal(false);
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
                            { isLoading ? <ImSpinner2 className="spinner"/> :
                                listStudents &&
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
                    <Modal show={showModal} onHide={modalClose}>
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