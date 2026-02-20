import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useThemeStore = create(devtools((set) => {
  return {
    theme: "dark",
    changeTheme: () => {
      set((state) => {
        //op. ternario para cambiar entre temas
        const newTheme = state.theme === "dark" ? "light" : "dark";
        //aqui obtienemos la etiqueta html
        const tagHtml = document.querySelector("html");
        //damos valor al attr data-theme
        tagHtml.setAttribute("data-theme", newTheme);
        //esto es para actualizar el estado
        return { theme: newTheme }
      })
    }
  }
}));

export default useThemeStore;
