import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Colleges from "../pages/Colleges/Colleges";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Reset from "../pages/Reset/Reset";
import CollegeDetails from "../Shared/CollegeDetails/CollegeDetails";
import PrivateRoute from "./PrivateRoute";
import Admission from "../pages/Admission/Admission";
import AdmissionForm from "../Shared/AdmissionForm/AdmissionForm";
import MyCollege from "../pages/MyCollege/MyCollege";
import AddReview from "../Shared/AddReview/AddReview";
import Profile from "../Shared/Profile/Profile";

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
      {
        path: "admission",
        element: (
          <PrivateRoute>
            <Admission></Admission>
          </PrivateRoute>
        ),
      },

      {
        path: "admission/:caId",
        element: (
          <PrivateRoute>
            <AdmissionForm></AdmissionForm>
          </PrivateRoute>
        ),
      },
      {
        path: "myCollege",
        element: (
          <PrivateRoute>
            <MyCollege></MyCollege>
          </PrivateRoute>
        ),
      },
      {
        path: "myCollege/:caName",
        element: (
          <PrivateRoute>
            <AddReview></AddReview>
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
