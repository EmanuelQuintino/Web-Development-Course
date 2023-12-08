import { CardProfile } from "../components/CardProfile";

function calcUserAge(birth: string) {
  const dateNow = new Date().getTime();
  const dateBirth = new Date(birth).getTime();
  const userAge = Math.floor((dateNow - dateBirth) / (1000 * 60 * 60 * 24 * 365.25));
  return userAge;
}

const dataAPI = [
  { id: 1, name: "Emanuel", birth: "12-25-1992" },
  { id: 2, name: "Éric", birth: "06-18-2004" },
  { id: 3, name: "Jorge", birth: "01-23-1995" },
  { id: 4, name: "Jonatas", birth: "12-01-2004" },
];

export function App() {
  return (
    <>
      <h1>Class 02 Components</h1>

      {dataAPI.map(({ id, name, birth }) => {
        return (
          <CardProfile key={id} name={name} birth={birth} calcUserAge={calcUserAge} />
        );
      })}
    </>
  );
}
