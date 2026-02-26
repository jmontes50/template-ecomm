import { Link } from "react-router-dom";
import { useAuthStore } from "../../../store/useAuthStore";
import { toast } from "react-toastify";
import { auth } from "../../../config/configFirebase";
import { signOut } from "firebase/auth";

export const AuthButtons = () => {

  const { isLoggedIn } = useAuthStore();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success('Logged out successfully!', { theme: "dark" });
    } catch (error) {
      toast("Error logging out: " + error.message, { type: "error", autoClose: 5000, theme: "dark" });
    }
  };

  if (isLoggedIn) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm">Usuario Demo</span>
        <button onClick={handleLogout} className="btn btn-sm btn-outline">
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
