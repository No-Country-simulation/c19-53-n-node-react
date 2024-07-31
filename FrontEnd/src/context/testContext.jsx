import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const TestContext = createContext();

export const registerRequest = (user) => axios.post(`api/users`, user);
export const getUsers = (user) => axios.get(`api/users`, user);
export const deleteUser = (id) => axios.delete(`api/user/${id}`);
export const getUserById = (id) => axios.get(`api/userbyid/${id}`);
export const updateUser = (id, user) => axios.put(`api/user/${id}`, user);

export const companyLogin = (companyData) => axios.post('api/company/login', companyData)

export const TestProvider = ({ children }) => {
  const [company, setCompany] = useState(null);
  const [ loading, setLoading] = useState(true);

  const login = async (companyData) => {
    try {
      const response = await companyLogin(companyData);
      setCompany(response.data.company)
      localStorage.setItem('company', JSON.stringify(response.data.company))
      Swal.fire('Success', 'Logged in successfully!', 'success')
      return true;
    } catch (error) {
      Swal.fire('Error', 'Login failed!', 'error')
      return false;
    }
  }

  const logout = (navigate) => {
    setCompany(null);
    localStorage.removeItem('compány');
    Swal.fire('Success', 'Logged out successfully!', 'success');
      navigate('/')
  }

  useEffect(() => {
    const storedCompany = localStorage.getItem('company');
    if(storedCompany) {
      setCompany(JSON.parse(storedCompany));
    }
    setLoading(false)
  }, []);

  return (
    <TestContext.Provider
      value={{ company, loading, login, logout, getUsers, registerRequest, deleteUser, getUserById, updateUser }}
    >
      {children}
    </TestContext.Provider>
  );
};
