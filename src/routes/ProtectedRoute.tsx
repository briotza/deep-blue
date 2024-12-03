import { Route, Navigate, RouteProps as ReactRouterProps } from "react-router-dom";
import { ReactNode } from "react";
import { useAuth } from "../AuthContext";

interface ProtectedRouteProps extends ReactRouterProps {
  element: ReactNode;  
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, ...rest }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  return <Route {...rest} element={element} />; 
};

export default ProtectedRoute;
