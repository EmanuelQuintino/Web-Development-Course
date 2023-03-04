import { Container } from "./style"
import { useState, useEffect } from "react"
import axios from "axios";

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
                    { listStudents &&
                        filterStudents.map((student, index) => <p key={index}>{student.name}</p>) 
                    }
                </section>
            </article>
        </Container>
    )
}