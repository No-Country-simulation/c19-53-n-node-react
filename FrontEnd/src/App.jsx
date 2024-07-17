import { ROUTES } from "./Helpers/RoutesPath";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./views/LandingPage/Landing";
import CreateAccount from "./views/Registration/CreateAccount";
import MenuHome from "./components/MenuHome/MenuHome";
import Login from "./views/LogIn/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path={ROUTES.LANDING} element={<LandingPage />} />
          <Route
            exact
            path={ROUTES.CREATEACCOUNT}
            element={<CreateAccount />}
          />
          <Route exact path={ROUTES.HOME} element={<MenuHome />} />
          <Route exact path={ROUTES.LOGIN} element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
