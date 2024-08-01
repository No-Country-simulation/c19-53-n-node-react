import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const TestContext = createContext({
  company: {
    _id: '',
    name: '',
    legalDocument: '',
    email: '',
    balance: 0,
    __v: 0,

  },
  logout: () => {},
});

export const registerRequest = (company) => axios.post(`api/companies`, company);
export const getUsers = (user) => axios.get(`api/users`, user);
export const deleteUser = (id) => axios.delete(`api/user/${id}`);
export const getUserById = (id) => axios.get(`api/userbyid/${id}`);
export const updateUser = (id, user) => axios.put(`api/user/${id}`, user);
// /companies/:companyId/users

//Company routes
export const companyLogin = (companyData) =>
  axios.post("api/company/login", companyData);

//Employee routes
export const getEmployees = (id) => axios.get(`api/usersbycompany/${id}`); //Get all employees
export const createEmployee = (id, employeeData) =>
  axios.post(`/companies/${id}/users`, employeeData); //Add employee
export const deleteEmployee = (id) => axios.delete(`api/user/${id}`); //Delete employee

export const TestProvider = ({ children }) => {
  const [company, setCompany] = useState(null);

  const [ loading, setLoading] = useState(true);
  const  [isAuthenticated, setIsAuthenticated] = useState(false)


  const login = async (companyData) => {
    try {
      const response = await companyLogin(companyData);

      setCompany(response.data.company)
      localStorage.setItem('company', JSON.stringify(response.data.company))
      Swal.fire('Success', 'Logged in successfully!', 'success')
      setIsAuthenticated(true)

      return true;
    } catch (error) {
      Swal.fire("Error", "Login failed!", "error");
      return false;
    }
  };

  const logout = (navigate) => {
    setCompany(null);

    localStorage.removeItem('compány');
    Swal.fire('Success', 'Logged out successfully!', 'success');
    setIsAuthenticated(false)
    setTimeout(() => {
      navigate('/')
    }, 2000)
  }


  useEffect(() => {
    const storedCompany = localStorage.getItem("company");
    if (storedCompany) {
      setCompany(JSON.parse(storedCompany));
      setIsAuthenticated(true)
      console.log('QUE TRAE COMPANY',company);
    }
    setLoading(false);
  }, []);

  return (
    <TestContext.Provider

      value={{ isAuthenticated, company, loading, login, logout, getUsers, registerRequest, deleteUser, getUserById, updateUser,  getEmployees,
        createEmployee, }}

    >
      {children}
    </TestContext.Provider>
  );
};
