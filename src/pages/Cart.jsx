import { useCartStore } from '../store/cartStore';
import { Link } from 'react-router-dom';

export const Cart = () => {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearCart = useCartStore((state) => state.clearCart);
  const getTotal = useCartStore((state) => state.getTotal);

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <h1 className="text-3xl font-bold mb-4">Carrito de Compras</h1>
        <p className="text-xl text-gray-500">Tu carrito está vacío</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Carrito de Compras</h1>
        <button onClick={clearCart} className="btn btn-error btn-outline">
          Vaciar Carrito
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={item.id} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h2 className="card-title">{item.name}</h2>
                    <p className="text-sm text-gray-500">{item.description}</p>
                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="btn btn-sm btn-circle"
                        >
                          -
                        </button>
                        <span className="w-12 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="btn btn-sm btn-circle"
                        >
                          +
                        </button>
                      </div>
                      <div className="text-xl font-bold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="btn btn-sm btn-error ml-auto"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="card bg-base-100 shadow-xl sticky top-4">
            <div className="card-body">
              <h2 className="card-title">Resumen del Pedido</h2>
              <div className="divider"></div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>${getTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Envío:</span>
                  <span>Gratis</span>
                </div>
                <div className="divider"></div>
                <div className="flex justify-between text-xl font-bold">
                  <span>Total:</span>
                  <span>${getTotal().toFixed(2)}</span>
                </div>
              </div>
              <Link to="/checkout" className="btn btn-primary mt-4 w-full">
                Proceder al Pago
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
