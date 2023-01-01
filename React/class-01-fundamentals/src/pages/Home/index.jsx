import React, {useState} from "react";
import "./style.css"

export function Home() {
  const [num, setNum] = useState(1)
  const [name, setName] = useState('Emanuel')
  // let num = 1
  const array = ['A', 'B', 'C']

  function arrayList() {
    return array.map((item, index) => <li key={index}>{item}</li>)    
  }

  function increment() {
    array.push(num)
    setNum(num + 1)
    // num += 1
    console.log(num);
    console.log(array);
  }

  return (
    <React.Fragment>
      <header>
        <h1>Class React Fundamentals</h1>
      </header>

      <ul>{arrayList()}</ul>

      <main>
        <article>
          <section>
            <h2>Paragraph {num}</h2>
            <button onClick={increment}>Increment</button>
          </section>

          <section>
            <form action="">
              <label htmlFor="name">Nome </label>
              <input 
                type="text" 
                id="name" 
                onChange={(event) => setName(event.target.value)}/>
            </form>
            <p>{name}</p>
          </section>

        </article>
      </main>

      <footer>
        &copy; Web Development Course - Jucás
      </footer>
    </React.Fragment>
  )
}