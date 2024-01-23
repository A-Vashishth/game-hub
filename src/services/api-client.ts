import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "11bd4be796054cf1b79c496490e6e9c4",
  },
});
