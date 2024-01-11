import "./style.css";

type CardProps = {
  name: string;
  birth: string;
  calcUserAge: (birth: string) => number;
};

export function CardProfile({ name, birth, calcUserAge }: CardProps) {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Idade: {calcUserAge(birth)}</p>
    </div>
  );
}
