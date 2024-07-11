import { ROUTES } from "./Helpers/RoutesPath";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import CreateAccount from "./views/Registration/CreateAccount";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path={ROUTES.HOME} element={<Home />} />
          <Route
            exact
            path={ROUTES.CREATEACCOUNT}
            element={<CreateAccount />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
