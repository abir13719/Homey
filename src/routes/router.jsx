import { createBrowserRouter } from "react-router-dom";
import Base from "./Base";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base></Base>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
