import { Button } from "./styles";

export type ButtonProps = {
  name: string;
  disabled?: boolean;
  backgroundColor: "red" | "green";
};

export function Button({ name, disabled = false, backgroundColor }: ButtonProps) {
  return (
    <>
      <button disabled={disabled}>{name}</button>
    </>
  );
}
