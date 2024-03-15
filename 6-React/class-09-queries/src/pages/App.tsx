import { useQuery } from "@tanstack/react-query";

type User = {
  id: number;
  name: string;
  email: string;
};

export function App() {
  async function getUsers() {
    const API = "ahttps://jsonplaceholder.typicode.com/users";
    const data = await fetch(API);
    return data.json();
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  console.error(error);

  return (
    <>
      <h1>Class 09 Queries</h1>
      {isLoading && <div>Loading...</div>}
      {!isLoading && error && <div>Error...</div>}

      {data?.map((user: User) => {
        return (
          <div key={user.id}>
            <strong>{user.name}</strong>
            <p>{user.email}</p>
          </div>
        );
      })}
    </>
  );
}
