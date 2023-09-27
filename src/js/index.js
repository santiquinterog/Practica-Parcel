import axios from "axios";
import { Saludar } from "./modulo.js";

console.log(Saludar());
const API_URL = "https://rickandmortyapi.com/api/character";

axios.get(API_URL).then((response) => {
  console.log(response.data);
});