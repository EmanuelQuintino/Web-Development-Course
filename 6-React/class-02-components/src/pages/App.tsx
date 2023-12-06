import { CardProfile } from "../components/CardProfile";

const users = [
  { id: 1, gitHub: "EmanuelQuintino", name: "Emanuel Quintino", birth: 1992 },
  { id: 2, gitHub: "EmanuelQuintino", name: "Emanuel Quintino", birth: 1992 },
  { id: 3, gitHub: "EmanuelQuintino", name: "Emanuel Quintino", birth: 1992 },
];

function calcAge(birth: number) {
  const currentYear = new Date().getFullYear();
  return currentYear - birth;
}

export function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Class Components</h1>
      {users.map(({ id, gitHub, name, birth }) => {
        return (
          <CardProfile
            gitHub={gitHub}
            name={name}
            birth={birth}
            key={id}
            calcAge={calcAge}
          />
        );
      })}
    </>
  );
}
