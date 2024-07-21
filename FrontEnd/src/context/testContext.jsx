import { createContext } from "react";
import axios from "axios";

export const TestContext = createContext();

export const registerRequest = (user) => axios.post(`api/users`, user);
export const getUsers = (user) => axios.get(`api/users`, user);
export const deleteUser = (id) => axios.delete(`api/user/${id}`);
export const getUserById = (id) => axios.get(`api/userbyid/${id}`);
export const updateUser = (id, user) => axios.put(`api/user/${id}`, user);

export const TestProvider = ({ children }) => {
  return (
    <TestContext.Provider
      value={{ getUsers, registerRequest, deleteUser, getUserById, updateUser }}
    >
      {children}
    </TestContext.Provider>
  );
};
