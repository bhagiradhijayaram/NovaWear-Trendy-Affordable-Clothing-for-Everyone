import { Outlet, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import Cart from "../Cart/Cart";

const ProtectedRoute = () => {
  const token = Cookies.get("access_token");
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
