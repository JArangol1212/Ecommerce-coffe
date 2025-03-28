
import { ProductImageMinature } from "@/components/shared/product-image-miniature";
import { ProductTasteOrigin } from "@/components/shared/product-taste-origin";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { useLovesProducts } from "@/hooks/use-loved-products";
import { formatPrice } from "@/lib/format.price";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/product";
import { X } from "lucide-react";


interface LovedItemProductProps{
      product:ProductType
}



const LovedItemProduct = (props:LovedItemProductProps) => {

      const {product} = props
    

      const {removeLovedItem} =useLovesProducts()
      const {addItem} = useCart() 
      const addToCheckout=()=>{
            addItem(product)
            removeLovedItem(product.id)
      }
      return ( 
            <li className="flex py-6 border-b">
                  {/* <div onClick={()=>router.push(`/product/${product.slug}`)} className="cursor-pointer">
                        <img 
                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`} 
                        alt="Product"
                        className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32" />
                        

                  </div> */}
                  <ProductImageMinature slug={product.slug} url={product.images[0].url}/>
                  <div className="flex justify-between flex-1 px-6">
                        <div>
                              <h2 className="text-lg font-bold">{product.productName}</h2>
                              <p className="font-bold">{formatPrice(product.price)}</p>
                            
                              <ProductTasteOrigin origin={product.origin} taste={product.taste}/>

                              <Button className="mt-5 rounded-full" onClick={addToCheckout}>Añadir al Carrito</Button>
                              </div>
                                   
                              <div>
                                   <button 
                                   className={cn("rounded-full flex items-center justify-center border shadow-md bg-white dark:bg-black p-1 hover:scale-110 transition mt-2")}>
                                      <X size={20}
                                      onClick={()=> removeLovedItem(product.id)}>

                                      </X>
                                   </button>

                              </div>

                        </div>

                  

            </li>
       );
}
 
export default LovedItemProduct;