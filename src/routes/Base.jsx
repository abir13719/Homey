import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Base = () => {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </>
  );
};

export default Base;
