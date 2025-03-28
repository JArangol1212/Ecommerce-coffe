import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import { useLovesProducts } from "@/hooks/use-loved-products"
import { formatPrice } from "@/lib/format.price"
import { ProductType } from "@/types/product"
import { Separator } from "@radix-ui/react-dropdown-menu"
import { Heart } from "lucide-react"

export type InfoProductProps={
      product:ProductType
}


export function InfoProduct(props:InfoProductProps){

      const {product} = props
      const {addItem} = useCart()
      const {addLoveItem} = useLovesProducts()

      return (

            <div className="px-6">

                  <div className="justify-between mb-3 sm:flex">
                        
                        <h1 className="text-2xl">{product.productName}</h1>
                        <div className="flex items-center justify-between gap-3">
                              <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
                                   {product.taste} 
                              </p>
                              <p className="px-2 py-1 text-xs text-white bg-yellow-900 rounded-full w-fit">
                                    {product.origin}
                              </p>

                        </div>
                        

                  </div>
                  <Separator className="my-4"/>
                  <p>{product.description}</p>
                  <Separator className="my-4"/>
                  <p className="py-4 text-2xl">{formatPrice(product.price)}</p>
                  <div className="flex items-center gap-5">
                        <Button className="w-[350px]" onClick={() => addItem(product)}>
                         Comprar
                        </Button>
                        <Heart 
                        width={30} strokeWidth={1} className="transition duration-300 cursor-pointer hover:fill-black"
                        onClick={() =>addLoveItem(product)}
                        />


                  </div>

            </div>
      )
}