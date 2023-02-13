import './App.css'
import { useState, useEffect } from 'react'

export function App() {
  const [name, setName] = useState('Emanuel');
  const [auxName, setAuxName] = useState('');
  const [count, setCount] = useState(0);
  const [dataUser, setDataUser] = useState('');
  // console.log(name);
  // let count = 0

  function changeCount() {
    // setCount(count + 1)
    // setCount(count + 1)
    
    // Previous Value
    // setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)
  }

  function changeName(event) {
    event.preventDefault();
    setAuxName(name)
  }

  useEffect(() => {
    if (auxName) {
      fetch(`https://api.github.com/users/${auxName}`)
        .then(response => response.json())
        .then(data => setDataUser(data))
        .catch(error => console.log(error))
    }
  }, [auxName])

  return (
    <div className='container'>
      <h1>Class Hooks</h1>
      <section>
        <p>Nome: {name}</p>
        <p>Nome: {auxName}</p>
        <p>Count: {count}</p>
      
        <button onClick={() => {
          setCount(count - 1)
          // console.log(count);
        }}>&lt;Rem</button>
      
        <button onClick={changeCount}>Add&gt;</button>
      </section>

      <form action="">
        <input type="text" onChange={event => setName(event.target.value)} />
        <button onClick={changeName}>Enviar</button>
      </form>

      {dataUser && (
          <section>
            <h2>{dataUser.name}</h2>
            <img src={dataUser.avatar_url} alt="" />
            <p>{dataUser.bio}</p>
          </section>
        )
      }
    </div>
  )
}    