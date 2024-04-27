import { createBrowserRouter } from "react-router-dom";
import Base from "./Base";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import UpdateProfile from "../pages/UpdateProfile";
import PrivateRoutes from "./Private/PrivateRoutes";
import HomeDetails from "../pages/HomeDetails";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base></Base>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("residents.json"),
      },
      {
        path: "/:id",
        element: (
          <PrivateRoutes>
            <HomeDetails></HomeDetails>
          </PrivateRoutes>
        ),
        loader: () => fetch("residents.json"),
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoutes>
            <UpdateProfile></UpdateProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
