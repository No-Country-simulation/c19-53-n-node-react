import { createContext, useState } from "react";
import axios from "axios";

export const TestContext = createContext();

export const registerRequest = (user) => axios.post(`/users`, user);
export const getUsers = (user) => axios.get(`api/users`, user);

export const TestProvider = ({ children }) => {
  return (
    <TestContext.Provider value={{ getUsers, registerRequest }}>
      {children}
    </TestContext.Provider>
  );
};
