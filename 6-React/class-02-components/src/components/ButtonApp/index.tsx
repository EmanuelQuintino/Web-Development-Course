type Props = {
  name: string;
};

export function ButtonApp({ name }: Props) {
  return (
    <>
      <button>{name}</button>
    </>
  );
}
