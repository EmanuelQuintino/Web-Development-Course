import { Container } from "./style"
import { useState, useEffect } from "react"
import axios from "axios";
import { Table } from 'react-bootstrap';

export function TableStudents() {
    const [listStudents, setListStudents] = useState([]);
    const [searchStudent, setSearchStudent] = useState('');
    
    useEffect(() => {
        const API = "http://localhost:3000/students"
        axios.get(API)
        .then((res) => setListStudents(res.data))
        .catch((error) => console.error(error));
    }, []);
    
    const filterStudents = listStudents.filter((student) => {
        return student.name.toLowerCase().includes(searchStudent.toLowerCase());
    })
    return (
        <Container>
            <article>
                <section>
                    <label htmlFor=""></label>
                    <input 
                        type="text" 
                        placeholder="Nome do aluno" 
                        onChange={(event) => setSearchStudent(event.target.value)}
                        value={searchStudent}
                    />
                </section>

                <section>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Telefone</th>
                                <th>Config</th>
                            </tr>
                        </thead>
                        <tbody>
                            { listStudents &&
                                filterStudents.map((student, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{student.id}</td>
                                            <td>{student.name}</td>
                                            <td>{student.email}</td>
                                            <td>{student.phone}</td>
                                            <td>Details Editar</td>
                                        </tr>
                                    )
                                }) 
                            }
                        </tbody>
                    </Table>  
                </section>
            </article>
        </Container>
    )
}