import { Link } from "react-router-dom";

export function Contact() {
  // console.log(A);

  return (
    <>
      <h1>Contact</h1>
      <Link to={"/details"}>Saiba mais...</Link>
    </>
  );
}
