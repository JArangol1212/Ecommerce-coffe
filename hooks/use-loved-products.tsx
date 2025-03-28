import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware";
import { ProductType } from "@/types/product"
import { toast } from "sonner"


interface UseLovedProductsType {

      lovedItem: ProductType[],
      addLoveItem: (data: ProductType) => void
      removeLovedItem: (id: number) => void

}
export const useLovesProducts = create(persist<UseLovedProductsType>((set, get) => ({
      lovedItem:[],
      addLoveItem:(data:ProductType)=>{
            const currentLovedItems = get().lovedItem
            const existingItem = currentLovedItems.find((item)=> item.id === data.id)

            if(existingItem){
                  return toast.success("El proyecto ya existe en la lista")
            }
            set({
                  lovedItem: [...get().lovedItem, data]
            })
            {

            }
            toast.success("Producto añadido a la lista")
      },
      removeLovedItem:(id:number)=>{
            set({lovedItem:[...get().lovedItem.filter((item)=>item.id !==id)]})
            toast.success("Producto se ha eliminado de la lista")
      }

}),{
      name:"Loved-product-storage",
      storage:createJSONStorage(()=>localStorage)

}))



