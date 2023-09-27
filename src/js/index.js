import axios from "axios"

import { Saludar, Sumar } from "./modulo.js";

console.log(Saludar(), Sumar());


axios.get("https://rickandmortyapi.com/api/character").then((response)=>console.log(response.data.results))
