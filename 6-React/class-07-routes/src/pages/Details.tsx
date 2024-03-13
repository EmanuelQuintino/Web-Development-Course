import { useNavigate } from "react-router-dom";

export function Details() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Details</h1>
      <button onClick={() => navigate(-1)}>Back</button>
    </>
  );
}
