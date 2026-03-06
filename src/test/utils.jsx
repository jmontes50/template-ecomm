//función de render personalizada para que los componentes funcionen correctamente

//render
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const renderWithRouter = (ui, options = {}) => {
  return render(ui, {
    wrapper: ({ children }) => <BrowserRouter>{children}</BrowserRouter>,
    ...options,
  });
};

export default renderWithRouter;
