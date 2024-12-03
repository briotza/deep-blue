import { Navigate, RouteProps as ReactRouterProps } from "react-router-dom";
import { ReactNode } from "react";
import { useAuth } from "../AuthContext";

// Definindo o tipo de rota com base nas propriedades de rota do React Router
interface ProtectedRouteProps extends ReactRouterProps {
  element: ReactNode; 
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, ...rest }) => {
  const { user } = useAuth(); 

  if (!user) {
    return <Navigate to="/" />;
  }

  return <>{element}</>;
};

export default ProtectedRoute;
