import { Link } from "react-router-dom";
import { useAuthStore } from "../../../store/useAuthStore";

export const AuthButtons = () => {

  const { isLoggedIn } = useAuthStore();

  if (isLoggedIn) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm">Usuario Demo</span>
        <button className="btn btn-sm btn-outline">
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="flex gap-2">
      <Link to="/login" className="btn btn-sm btn-primary">
        Login
      </Link>
      <Link to="/register" className="btn btn-sm btn-ghost">
        Register
      </Link>
    </div>
  );
};
