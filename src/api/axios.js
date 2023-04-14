import axios from "axios";

// const BASE_URL = "http://localhost:3333/api";
const BASE_URL = "https://realinvesting.ca/api/api";

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
  // credentials: "include",
});
