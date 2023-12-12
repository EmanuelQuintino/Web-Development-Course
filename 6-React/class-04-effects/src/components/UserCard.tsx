type Props = {
  name: string;
  avatar_url: string;
  bio: string;
};

export function UserCard({ name, avatar_url, bio }: Props) {
  return (
    <section>
      <h2>{name}</h2>
      <img src={avatar_url} width={240} />
      <p>{bio}</p>
    </section>
  );
}
