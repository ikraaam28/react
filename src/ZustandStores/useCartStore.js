import { create } from "zustand";
import useAuthStore from "./useAuthStore";
const useCartStore = create((set, get) => (
    {
        items: [],
        addItem: (item) => {
            const
                user = useAuthStore.getState().user;
            if (!user) {
                console.error("Vous devez êtreconnecté pour ajouter un article au panier !");
                return;
            }
            set((state) => ({
                items:
                    [...state.items, item]
            }));
        },
        removeItem: (id) => set((state) => ({
            items: state.items.filter((item) => item
                .id !== id),
        })),
        clearCart: () => set({ item: [] }),
    }
)
)
export default useCartStore;
useCartStore.js