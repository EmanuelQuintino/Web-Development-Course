import { useEffect, useState } from "react";

type UserData = {
  avatar_url: string;
  name: string;
  bio: string;
};

type Props = {
  name: string;
};

export function UserCard({ name }: Props) {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${name}`)
      .then((resp) => resp.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error(error));
  }, [name]);

  return (
    userData && (
      <div style={{ textAlign: "center" }}>
        <img src={userData.avatar_url} alt="user-image" width={200} />
        <h2>{userData.name}</h2>
        <p>{userData.bio}</p>
      </div>
    )
  );
}
