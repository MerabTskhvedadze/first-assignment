import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute() {
  if (localStorage.getItem("isLogedIn")) {
    return <Outlet />;
  }

  return <Navigate to={"/"} />;
}
