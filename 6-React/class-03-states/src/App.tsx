import { useState, useEffect, ChangeEvent, FormEvent } from "react";

type UserData = {
  name: string;
  avatar_url: string;
  bio: string;
};

export function App() {
  const [count, setCount] = useState(0);
  const [inputName, setInputName] = useState("Emanuel Quintino");
  const [userName, setUserName] = useState("EmanuelQuintino");
  const [userData, setUserData] = useState<UserData>({} as UserData);

  function addCount() {
    setCount((prevCount) => prevCount + 1);
  }

  function removeCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function handleChangeUserName(event: ChangeEvent<HTMLInputElement>) {
    setInputName(event.target.value);
  }

  function handleFormSubmit(event: FormEvent) {
    event.preventDefault();
    setUserName(inputName);
  }

  useEffect(() => {
    if (userName) {
      fetch(`https://api.github.com/users/${userName}`)
        .then((response) => response.json())
        .then((data) => setUserData(data))
        .catch((error) => console.error(error));
    }
  }, [userName]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Class States</h1>

      <section>
        <p>Nome: {inputName}</p>
        <p>Count: {count}</p>

        <button onClick={removeCount}>&lt;Rem</button>
        <button onClick={addCount}>Add&gt;</button>
      </section>

      <form onSubmit={handleFormSubmit} style={{ marginTop: 16 }}>
        <input
          type="text"
          placeholder="Nome do usuário"
          onChange={handleChangeUserName}
        />
        <button>Pesquisar</button>
      </form>

      {userData && (
        <section>
          <h2>{userData.name}</h2>
          <img src={userData.avatar_url} width={240} />
          <p>{userData.bio}</p>
        </section>
      )}
    </div>
  );
}
