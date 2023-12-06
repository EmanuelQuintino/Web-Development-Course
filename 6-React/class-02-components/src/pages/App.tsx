import { CardProfile } from "../components/CardProfile";

const users = [
  { id: 1, gitHub: "EmanuelQuintino", name: "Emanuel Quintino", age: 30 },
  { id: 2, gitHub: "EmanuelQuintino", name: "Emanuel Quintino", age: 30 },
  { id: 3, gitHub: "EmanuelQuintino", name: "Emanuel Quintino", age: 30 },
];

export function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Class Components</h1>
      {users.map(({ id, gitHub, name, age }) => {
        return <CardProfile gitHub={gitHub} name={name} age={age} key={id} />;
      })}
    </>
  );
}
