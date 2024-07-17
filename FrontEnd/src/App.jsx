import { ROUTES } from "./Helpers/RoutesPath";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./views/LandingPage/Landing";
import CreateAccount from "./views/Registration/CreateAccount";
import Home from './views/Home/Home'

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
          <Route exact path={ROUTES.HOME} element={<Home />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
