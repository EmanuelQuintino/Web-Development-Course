import { useNavigate } from "react-router-dom";

export function Page404() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Error 404</h1>
      <p>Page not found...</p>
      <button onClick={() => navigate("/", { replace: true })}>Back</button>
    </>
  );
}
