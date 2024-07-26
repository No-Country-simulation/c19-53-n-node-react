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

import UserProfile from "./views/UserProfile/UserProfile";

function App() {
  return (
    <TestProvider>
      <div className="App">
        <Routes>
          <Route exact path={ROUTES.LANDING} element={<Landing />} />
          <Route
            exact
            path={ROUTES.CREATEACCOUNT}
            element={<CreateAccount />}
          />
          <Route exact path={ROUTES.HOME} element={<Home2 />} />
          <Route exact path={ROUTES.LOGIN} element={<Login />} />
          <Route exact path={ROUTES.ADMIN_LOGIN} element={<AdminLogin />} />

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
          <Route exact path={ROUTES.USERPROFILE} element={<UserProfile/>}/>
        </Routes>
      </div>
    </TestProvider>
  );
}

export default App;
