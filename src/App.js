import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import AddRecipes from "./pages/AddRecipes";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Login from "./pages/login";

import axios from "axios";

import { store } from "./store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
  {
    path: "/AddRecipes",
    element: <AddRecipes />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
]);

function App() {
  axios.interceptors.request.use(
    (config) => {
      if (localStorage.getItem("token")) {
        config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
      }

      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;