import axios from "axios";

export const registerRequest = (user) => axios.post(`/users`, user);

export const getUsers = (user) => axios.get(`/users`, user);
