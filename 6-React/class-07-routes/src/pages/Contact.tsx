import { Link } from "react-router-dom";

export function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <Link to={"/details"}>Saiba mais...</Link>
    </>
  );
}
