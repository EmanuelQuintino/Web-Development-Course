import "./style.css";

type CardProfileProps = {
  gitHub: string;
  name: string;
  age: number;
};

export function CardProfile({ gitHub, name, age }: CardProfileProps) {
  return (
    <div className="card">
      <img src={`https://github.com/${gitHub}.png`} alt="image-profile" />
      <strong>{name}</strong>
      <p>Idade: {age}</p>
    </div>
  );
}
