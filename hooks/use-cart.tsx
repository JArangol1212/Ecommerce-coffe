import { ProductType } from "@/types/product";
import { toast } from "sonner";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartStore {
  items: ProductType[]; 
  addItem: (data: ProductType) => void;
  removeItem: (id: number) => void;
  removeAll: () => void;
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [], 
      
      addItem: (data: ProductType) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          return toast.error("El producto ya está en el carrito");
        }

        set({ items: [...currentItems, data] });
        toast.success("Producto añadido al carrito");
      },

      removeItem: (id: number) => {
        set({ items: get().items.filter((item) => item.id !== id) });
        toast.success("Producto eliminado del carrito");
      },

      removeAll: () => {
        set({ items: [] });
        toast.success("Todos los productos fueron eliminados del carrito");
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
