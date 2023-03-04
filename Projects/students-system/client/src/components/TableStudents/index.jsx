import { Container } from "./style"
import { useState, useEffect } from "react"
import axios from "axios";

export function TableStudents() {
    const [listStudents, setListStudents] = useState();
    const [searchStudent, setSearchStudent] = useState();

    async function fetchStudents() {
        const API = "http://localhost:3000/students"
        axios.get(API)
            .then((res) => setListStudents(res.data))
            .catch((error) => console.error(error));
    }
    
    useEffect(() => {
        fetchStudents()
    }, []);    

    return (
        <Container>
            <article>
                <section>
                    <label htmlFor=""></label>
                    <input 
                        type="text" 
                        placeholder="Nome do aluno" 
                        onChange={(event) => setSearchStudent(event.target.value)}
                    />

                    <p>{searchStudent}</p>

                </section>

                <section>
                    {listStudents && 
                        listStudents.map((student, index) => {
                          return <p key={index}>{student.name}</p>
                        })
                    }
                </section>
            </article>
        </Container>
    )
}