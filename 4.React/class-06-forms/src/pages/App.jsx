import { useState } from 'react'
import './App.css'

export function App() {
  const [formData, setFormData] = useState({})

  function handleSubmit(event) {
    event.preventDefault();

    const {name, email} = event.target
    setFormData({
      name: name.value,
      email: email.value
    })
  }

  return (
    <div className="App">
      <form action="get" onSubmit={handleSubmit}>
        <section>
          <label htmlFor="inputName">
            Nome:
          </label>
          <input type="text" id='inputName' name='name' placeholder='Digite seu nome' />
        </section>

        <section>
          <label htmlFor="inputAge">
            E-mail:
          </label>
          <input type="email" id='inputAge' name='email' placeholder='Digite seu email' />
        </section>

        <button>Enviar</button>
      </form>

      {console.log(formData)}

      <p>
        {formData.email}
      </p>
    </div>
  )
}