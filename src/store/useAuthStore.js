import { create } from "zustand";
import { auth } from "../config/configFirebase";
import { onAuthStateChanged } from "firebase/auth";

export const useAuthStore = create((set) => ({
  user: null,
  isLoggedIn: false,
  error: null,

  startAuthListener: () => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        set({ user, isLoggedIn: true, error: null });
      } else {
        set({ user: null, isLoggedIn: false, error: null });
      }
    });
    return unsubscribe; // Devuelve la función de limpieza para detener el listener, nos estamos desuscribiendo al listener cuando el componente se desmonta para evitar fugas de memoria
  },
}));
