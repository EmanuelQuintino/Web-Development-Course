import "./App.css";
import { useState, useEffect, ChangeEvent } from "react";

type UserData = {
  name: string;
  avatar_url: string;
  bio: string;
};

export function App() {
  const [count, setCount] = useState(0);
  const [userName, setUserName] = useState("EmanuelQuintino");
  const [userData, setUserData] = useState<UserData>({} as UserData);

  function addCount() {
    setCount((prevCount) => prevCount + 1);
  }

  function removeCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function handleChangeUserName(event: ChangeEvent<HTMLInputElement>) {
    setUserName(event.target.value);
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
    <div className="container">
      <h1>Class States</h1>

      <section>
        <p>Nome: {userName}</p>
        <p>Count: {count}</p>

        <button onClick={removeCount}>&lt;Rem</button>
        <button onClick={addCount}>Add&gt;</button>
      </section>

      <form>
        <input type="text" onChange={handleChangeUserName} />
      </form>

      {userData && (
        <section>
          <h2>{userData.name}</h2>
          <img src={userData.avatar_url} />
          <p>{userData.bio}</p>
        </section>
      )}
    </div>
  );
}
