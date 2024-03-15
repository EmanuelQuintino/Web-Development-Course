type Props = {
  name: string;
  phone: string;
};

export function UserCard({ name, phone }: Props) {
  return (
    <>
      <strong>{name}</strong>
      <p>{phone}</p>
    </>
  );
}
