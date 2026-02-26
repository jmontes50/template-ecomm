import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../../store/useAuthStore";

const ProtectedRoute = ({ children }) => {

  const { isLoggedIn } = useAuthStore();
  console.log('ProtectedRoute - isLoggedIn:', isLoggedIn);

  //SI EL USUARIO NO ESTÁ LOGUEADO, REDIRIGE A LOGIN
  if (!isLoggedIn) {
    //Navigate es un componente de react-router-dom que se utiliza para redirigir a los usuarios a una ruta específica. En este caso, si el usuario no está autenticado, se redirige a la página de login.
    return <Navigate to="/login" replace />;
  }

  //SI EL USUARIO ESTÁ LOGUEADO, RENDERIZA LOS HIJOS (EL CONTENIDO PROTEGIDO, los children que se pasan como props a este componente)
  return children
}

export default ProtectedRoute
