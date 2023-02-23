import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [listCourses, setListCourses] = useState();
  const API = 'http://localhost:3000/courses'

  async function showUsers() {
    await fetch(API)
      .then((response) => response.json())
      .then((data) => setListCourses(data))
      .catch((error) => console.error(error));  
  }

  async function onSubmit(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const hours = event.target.hours.value;

    const data = {
      name, 
      hours
    }

    await fetch(API, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {"Content-Type": "application/json; charset=UTF-8"}
    })
    .then(() => alert('Curso cadastrado com sucesso!'))
    .catch((error) => alert(`Error: ${error}`));
    
    showUsers();
  }

  useEffect(() => {
    showUsers();
  }); 

  return (
    <div className="App">
      <h1>Cadastrar Curso</h1>
      <form onSubmit={onSubmit}>
        <label>
          Nome:
          <input type="text" name='name'/>
        </label>
        <label>
          Horas:
          <input type="number" name='hours' max={240}/>
        </label>

        <button>Enviar</button>
      </form>

      <h2>Cursos cadatrados</h2>
      
      {listCourses && (
        listCourses.map((course, index) => {
          return <p key={index}>{course.name} - {course.hours}hs</p>
        })
      )}
    </div>
  )
}

export default App