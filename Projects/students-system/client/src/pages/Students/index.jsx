import { useEffect } from "react"
import axios from "axios";

export function Students() {
  const API = "http://localhost:3000/students"
  async function listStudents() {
    axios.get(API)
    .then((res) => console.log(res.data))
    .catch((error) => console.error(error));
  }

  useEffect(() => {
    listStudents()
  }, []);

  return (
    <div className="container">
      <h1>Estudantes</h1>
    </div>
  )
}