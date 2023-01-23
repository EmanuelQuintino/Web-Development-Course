import { useState } from 'react'
import { GlobalVariables } from '../../globals';
import { UserData } from '../UserData';
import './style.css'

export function UserForm() {
  const [formData, setFormData] = useState({})

  async function handleSubmit(event) {
    event.preventDefault();

    const { name, email, course, term, question, ability } = event.target

    const userData = {
      name: name.value,
      email: email.value,
      course: course.value,
      term: term.value,
      question: question.value,
      ability: [...ability].map(element => {
          return {[element.value]:element.checked};  
      })
    }

    setFormData(userData)
    GlobalVariables.user = userData

    // const API = 'http://localhost:5173'
    // await fetch(API + "/", {
    //   method: "POST",
    //   body: JSON.stringify(userData),
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // })
    
    alert('Formulário enviado com sucesso!')
  }

  return (
    <div className="formContainer">
      <h2>Inscrição para curso</h2>
      <form action="get" onSubmit={handleSubmit}>
        <section>
          <label htmlFor="inputName">Nome:</label>
          <input type="text" id='inputName' name='name' placeholder='Digite seu nome' />
        </section>

        <section>
          <label htmlFor="inputEmail">E-mail:</label>
          <input type="email" id='inputEmail' name='email' placeholder='Digite seu email' />
        </section>

        <section>
          <label htmlFor="selectCourse">Curso:</label>
          <select name="course" id="selectCourse">
            <option value="react">React</option>
            <option value="node.js">Node.JS</option>
          </select>
        </section>

        <section>
          <div>Matérias que tem aptidão</div>
          <label><input type="checkbox" name='ability' value='html'/>HTML</label>
          <label><input type="checkbox" name='ability' value='css'/>CSS</label>
          <label><input type="checkbox" name='ability' value='javascript'/>JavaScript</label>
        </section>

        <section>
          <div>Aceita os termos de uso?</div>
          <span>
            <input type="radio" id='yes' name='term' value='yes' defaultChecked />
            <label htmlFor="yes">Sim</label>
          </span>
          <span>
            <input type="radio" id='no' name='term' value='no' />
            <label htmlFor="no">Não</label>
          </span>
        </section>

        <section>
          <label htmlFor="question">Por que deseja fazer esse curso?</label>
          <textarea
            name="question"
            id="question"
            cols="30"
            rows="5"
            maxLength={'100'}
            placeholder='Digite suas razões aqui'>
          </textarea>
        </section>

        <button>Enviar</button>
      </form>

      {console.log(formData)}
      {/* {console.log(JSON.stringify(formData))} */}
    </div>
  )
}