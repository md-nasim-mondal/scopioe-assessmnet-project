import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ResponsiveHome from "../pages/ResponsiveHome/ResponsiveHome";
import ResponsiveLogin from "../pages/ResponsiveLogin/ResponsiveLogin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <>{window.innerWidth > 500 ? <Login /> : <ResponsiveHome />}</>
        ),
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <ResponsiveLogin />,
      },
    ],
  },
]);
