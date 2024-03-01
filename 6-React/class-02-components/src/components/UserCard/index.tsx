type Props = {
  name: string;
  age: number;
  color?: string;
};

export function UserCard({ name, age, color }: Props) {
  return (
    <div style={{ background: color }}>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
    </div>
  );
}
