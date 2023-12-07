import { CardProfile } from "../components/CardProfile";

function calcAge(birth: number) {
  const currentYear = new Date().getFullYear();
  return currentYear - birth;
}

export function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Class Components</h1>
      <CardProfile
        gitHub={"EmanuelQuintino"}
        name={"Emanuel Quintino"}
        birth={1992}
        calcAge={calcAge}
      />

      <CardProfile
        gitHub={"EmanuelQuintino"}
        name={"Emanuel Quintino"}
        birth={1992}
        calcAge={calcAge}
      />
    </>
  );
}
