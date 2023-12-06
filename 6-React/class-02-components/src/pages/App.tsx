import { CardProfile } from "../components/CardProfile";

export function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Class Components</h1>
      <CardProfile gitHub={"EmanuelQuintino"} name={"Emanuel Quintino"} age={30} />
    </>
  );
}
