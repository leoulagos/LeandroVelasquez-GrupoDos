import { create } from 'zustand';

export const useCartStore = create((set) => ({
    cart: [],
    addToCart: (product, quantity) => {
        set((state) => {
            const existingItem = state.cart.find(item => item.id === product.id);
            if (existingItem) {
                return {
                    cart: state.cart.map(item =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + quantity }
                            : item
                    ),
                };
            }
            return {
                cart: [...state.cart, { ...product, quantity }],
            };
        });
    },
    removeFromCart: (productId) => {
        set((state) => ({
            cart: state.cart.filter(item => item.id !== productId),
        }));
    },
    clearCart: () => set({ cart: [] }),

    // Nueva función para reducir la cantidad
    reduceQuantity: (productId) => {
        set((state) => ({
            cart: state.cart.map(item =>
                item.id === productId && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }  // Reducir la cantidad
                    : item
            ),
        }));
    },
}));
