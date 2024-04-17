import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Colleges from "../pages/Colleges/Colleges";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Reset from "../pages/Reset/Reset";
import CollegeDetails from "../Shared/CollegeDetails/CollegeDetails";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "colleges",
        element: <Colleges></Colleges>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "reset",
        element: <Reset></Reset>,
      },
      {
        path: "college/:collegeId",
        element: (
          <PrivateRoute>
            <CollegeDetails></CollegeDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
