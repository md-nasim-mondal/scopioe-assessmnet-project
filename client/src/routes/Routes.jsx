import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import SignUp from "../pages/SignUp/SignUp";
import ResponsiveLogin from "../pages/ResponsiveLogin/ResponsiveLogin";
import ResponsiveRoutes from "./ResponsiveRoutes"; // Adjust the import path accordingly

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ResponsiveRoutes />,
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
