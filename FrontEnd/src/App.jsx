import { ROUTES } from "./Helpers/RoutesPath";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./views/LandingPage/Landing";
import CreateAccount from "./views/Registration/CreateAccount";
import Home2 from "./views/Home/Home2";
import Login from "./views/LogIn/Login";
import AdminLogin from "./admin/AdminLogin";
import AdminHome from "./admin/AdminHome";
import AdminAddUser from "./admin/AdminAddUser";
import AdminListUsers from "./admin/AdminListUsers";
import AdminEditUser from "./admin/AdminEditUser";
import { TestProvider } from "./context/testContext";
import Landing from "./views/LandingPage/Landing";
import TransactionsList from "./views/TransactionsPage/TransactionsList";
import CreateTransaction from "./views/TransactionsPage/CreateTransaction";
import CheckIn from "./views/TransactionsPage/CheckIn";


import EmployeeList from "./views/EmployeesPage/EmployeesList";
import AddEmployee from "./views/EmployeesPage/AddEmployee";
import EmployeeProfile from "./views/EmployeesPage/EmployeeProfile";
import EditEmployee from "./views/EmployeesPage/EditEmployee";

import ActivityList from "./views/ActivityPage/ActivityList";
import ActivityDetail from "./views/ActivityPage/ActivityDetail";

import UserProfile from "./views/UserProfile/UserProfile";
import MenuHome from "./components/MenuHome/MenuHome";

function App() {
  

  return (
    <TestProvider>
      <div className="App">
        <Routes>
          {/*Rutas Públicas */}

          <Route exact path={ROUTES.LANDING} element={<Landing />} />
          <Route
            exact
            path={ROUTES.CREATEACCOUNT}
            element={<CreateAccount />}
          />
          <Route exact path={ROUTES.LOGIN} element={<Login />} />
          <Route exact path={ROUTES.ADMIN_LOGIN} element={<AdminLogin />} />

          {/*Rutas protegidas */}
          {/* {isAuthenticated ? ( */}
          <>
            <Route exact path={ROUTES.HOME} element={<Home2 />} />
            <Route
              exact
              path={ROUTES.ADMIN_NEW_USER}
              element={<AdminAddUser />}
            />
            <Route
              exact
              path={ROUTES.ADMIN_USERS_LIST}
              element={<AdminListUsers />}
            />

            <Route exact path={ROUTES.ADMIN_HOME} element={<AdminHome />} />
            <Route
              exact
              path={ROUTES.ADMIN_EDIT_USER}
              element={<AdminEditUser />}
            />
            <Route exact path={ROUTES.USERPROFILE} element={<UserProfile />} />
            <Route
              exact
              path={ROUTES.TRANSACTIONS_LIST}
              element={<TransactionsList />}
            />
            <Route
              path={ROUTES.CREATE_TRANSACTION}
              element={<CreateTransaction />}
            />
            <Route path={ROUTES.CHECKIN} element={<CheckIn />} />

            <Route path={ROUTES.EMPLOYEE_LIST} element={<EmployeeList />} />
            <Route path={ROUTES.ADD_EMPLOYEE} element={<AddEmployee />} />
            <Route
              path={ROUTES.EMPLOYEE_PROFILE}
              element={<EmployeeProfile />}
            />
            <Route path={ROUTES.EDIT_EMPLOYEE} element={<EditEmployee />} />
            <Route path={ROUTES.ACTIVITY} element={<ActivityList />} />
            <Route path={ROUTES.ACTIVITY_DETAIL} element={<ActivityDetail />} />
          </>
          {/* ): (<Route path="*" element={<Landing/>}/>)} */}
        </Routes>
      </div>
    </TestProvider>
  );
}

export default App;
