import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import axios from "axios";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// import { store, persistor } from "./redux/store/store.jsx";
import { BrowserRouter } from "react-router-dom";
// import { AuthProvider } from "./components/authContext/authContext.jsx";

axios.defaults.baseURL = "http://localhost:3001/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <PersistGate persistor={persistor}> */}
        <BrowserRouter>
        {/* <AuthProvider> */}
          <App />
        {/* </AuthProvider> */}
        </BrowserRouter>
      {/* </PersistGate>
    </Provider> */}
  </React.StrictMode>
);
