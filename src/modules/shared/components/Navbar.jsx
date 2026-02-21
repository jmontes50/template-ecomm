import { Link } from 'react-router-dom';
import { useCartStore } from '../../../store/cartStore';
import { AuthButtons } from '../../auth/components/AuthButtons';

export const Navbar = () => {
  const itemCount = useCartStore((state) => state.getItemCount());

  const handleTheme = (event) => {
    console.log(event.target.checked)
  }

  return (
    <div className="navbar bg-base-100 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Productos</Link></li>
            <li><Link to="/cart">Carrito</Link></li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">E-Commerce</Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Productos</Link></li>
          <li><Link to="/cart">Carrito</Link></li>
        </ul>
      </div>

      <div className="navbar-end gap-2">

        <input type="checkbox" onChange={handleTheme} className="toggle" />

        <AuthButtons />

        <Link to="/cart" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {itemCount > 0 && (
              <span className="badge badge-sm indicator-item">{itemCount}</span>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};
