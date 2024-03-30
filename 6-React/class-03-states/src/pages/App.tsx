import { useState } from "react";

export function App() {
  // let count = 0;
  const [count, setCount] = useState(0); // inference
  const [status, setStatus] = useState("");
  const [users, setUsers] = useState(["User 1", "User 2"]);

  function incrementCount() {
    // count += 1;
    setCount((prevCount) => prevCount + 1);
    setStatus("Increment");
    console.log(count);
  }

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
    setStatus("Decrement");
  }

  function addUsers() {
    setUsers((users) => [...users, `User ${users.length + 1}`]);
  }

  function removeUser(userName: string) {
    setUsers(users.filter((user) => user != userName));
  }

  return (
    <>
      <h1>Class 03 States</h1>

      <section>
        <p>Count: {count}</p>
        <p>{status ? status : "Status"}</p>

        <button onClick={decrementCount}>&lt; Dec</button>
        <button onClick={incrementCount}>Inc &gt;</button>
      </section>

      <section>
        <h2>Users</h2>
        <button onClick={addUsers}>Add user</button>

        <ul>
          {users.map((user) => {
            return (
              <li key={user}>
                {user} <button onClick={() => removeUser(user)}>x</button>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
