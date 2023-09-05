import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./routes/protecctedRoute";

const AuthView = lazy(() => import("./views/AuthView"));
const UserView = lazy(() => import("./views/UserView"));

function App() {
  return (
    <Suspense element={<div>loading...</div>}>
      <Routes>
        <Route path="/" element={<AuthView />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/user" element={<UserView />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </Suspense>
  );
}

export default App;
