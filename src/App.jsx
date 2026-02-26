import { useEffect } from 'react';
import { useAuthStore } from './store/useAuthStore';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Layout } from './modules/shared/components/Layout';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Cart } from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './modules/auth/components/ProtectedRoute';

const App = () => {

  const { startAuthListener } = useAuthStore();

  useEffect(() => {
    const unsubscribe = startAuthListener();
    return () => {
      unsubscribe(); // Limpia el listener de autenticación al desmontar el componente
      //prevenir fugas de memoría
    };
  }, [startAuthListener]);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Layout>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
