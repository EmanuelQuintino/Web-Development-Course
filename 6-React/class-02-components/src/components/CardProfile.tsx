import "./style.css";

type CardProfileProps = {
  gitHub: string;
  name: string;
  birth: number;
  calcAge: (age: number) => number;
};

export function CardProfile({ gitHub, name, birth, calcAge }: CardProfileProps) {
  return (
    <div className="card">
      <img src={`https://github.com/${gitHub}.png`} alt="image-profile" />
      <strong>{name}</strong>
      <p>Idade: {calcAge(birth)}</p>
    </div>
  );
}
