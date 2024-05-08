// src/axiosConfig.ts

import axios, { AxiosInstance } from "axios";
//aqui se importaria una variable de entorno

const fetchApi: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API || "http://localhost:3000", // Aquí especificar la URL base del servidor
  timeout: 10000, // Tiempo máximo de espera para las solicitudes en milisegundos
});

export default fetchApi;
