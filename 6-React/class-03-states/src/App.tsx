import { useState } from "react";

export function App() {
  // let count = 0;
  const [count, setCount] = useState(0); // inference
  const [name, setName] = useState("");
  const [users, setUsers] = useState(["user1", "user2"]);

  function addCount() {
    // count += 1;
    setCount((prevCount) => prevCount + 1);
    console.log(count);
  }

  function handleName(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function addUsers() {
    setUsers((users) => [...users, `user${users.length + 1}`]);
  }

  function removeUser(userName: string) {
    setUsers(users.filter((user) => user != userName));
  }

  return (
    <>
      <h1>Class 03 States</h1>

      <section>
        <p>Count: {count}</p>
        <button onClick={addCount}>Add+</button>
      </section>

      <section>
        <p>Name: {name}</p>
        <input type="text" onInput={handleName} />
      </section>

      <section>
        <h2>Users</h2>
        <button onClick={addUsers}>+ user</button>

        <ul>
          {users.map((user) => {
            return (
              <li key={user}>
                {user} <button onClick={() => removeUser(user)}>-</button>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
