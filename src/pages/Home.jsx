import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="hero min-h-[80vh]">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Bienvenido a E-Commerce</h1>
          <p className="py-6">
            Proyecto educativo para aprender React, Custom Hooks, Zustand y React Router.
            Explora nuestro catálogo de productos y experimenta con el carrito de compras.
          </p>
          <Link to="/products" className="btn btn-primary">
            Ver Productos
          </Link>
        </div>
      </div>
    </div>
  );
};
