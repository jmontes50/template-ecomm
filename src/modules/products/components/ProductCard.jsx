import { useCartStore } from '../../../store/cartStore';

export const ProductCard = ({ product }) => {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {product.name}
          <div className="badge badge-secondary">{product.category}</div>
        </h2>
        <p className="text-sm">{product.description}</p>
        <div className="card-actions justify-between items-center mt-4">
          <div className="text-2xl font-bold">${product.price}</div>
          <button onClick={handleAddToCart} className="btn btn-primary">
            Agregar al carrito
          </button>
        </div>
        <div className="text-xs text-gray-500 mt-2">
          Stock disponible: {product.stock}
        </div>
      </div>
    </div>
  );
};
