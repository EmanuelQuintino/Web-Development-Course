import axios from "axios";

export default axios.create({
    API: "localhost:3000/users"
});