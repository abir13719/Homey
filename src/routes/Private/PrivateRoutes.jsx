import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location.pathname);

  if (loading) {
    return <span>Loading...</span>;
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoutes;
