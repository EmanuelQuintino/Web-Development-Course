export function PropDrilling() {
  const userName = "Prop Drilling";
  return (
    <>
      <Card name={userName} />
    </>
  );
}

export function Card({ name }: { name: string }) {
  return (
    <>
      <h1>Card {name}</h1>
      <Description name={name} />
    </>
  );
}

export function Description({ name }: { name: string }) {
  return (
    <>
      <p>Class example {name}</p>
    </>
  );
}
