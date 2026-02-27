import { create } from 'zustand';

export const useCartStore = create((set, get) => ({
  items: [],

  addItem: (product) => set((state) => {
    const existingItem = state.items.find(item => item.id === product.id);
    console.log({product, existingItem});
    if (existingItem) {
      return {
        items: state.items.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      };
    }

    return {
      items: [...state.items, { ...product, quantity: 1 }]
    };
  }),

  removeItem: (productId) => set((state) => ({
    items: state.items.filter(item => item.id !== productId)
  })),

  updateQuantity: (productId, quantity) => set((state) => {
    if (quantity <= 0) {
      return {
        items: state.items.filter(item => item.id !== productId)
      };
    }

    return {
      items: state.items.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      )
    };
  }),

  clearCart: () => set({ items: [] }),

  getTotal: () => {
    const { items } = get();
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  },

  getItemCount: () => {
    const { items } = get();
    return items.reduce((count, item) => count + item.quantity, 0);
  }
}));
