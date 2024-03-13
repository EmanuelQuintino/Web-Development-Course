import { Link } from "react-router-dom";

export function Gallery() {
  return (
    <>
      <h1>Gallery</h1>
      <Link to={"/details"}>Saiba mais...</Link>
    </>
  );
}
