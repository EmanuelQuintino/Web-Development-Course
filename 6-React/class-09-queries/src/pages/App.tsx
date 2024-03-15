import { useQuery } from "@tanstack/react-query";
import { UserCard } from "../components/UserCard";

type User = {
  id: number;
  name: string;
  phone: string;
};

export function App() {
  async function getUsers() {
    const API = "https://jsonplaceholder.typicode.com/users";
    const data = await fetch(API);
    return data.json();
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  console.log(data);

  if (error) console.error(error);

  return (
    <>
      <h1>Class 09 Queries</h1>
      {isLoading && <div>Loading...</div>}
      {!isLoading && error && <div>Error...</div>}

      {data?.map((user: User) => {
        return <UserCard key={user.id} name={user.name} phone={user.phone} />;
      })}
    </>
  );
}
