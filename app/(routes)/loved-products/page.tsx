"use client"

import { useLovesProducts } from "@/hooks/use-loved-products"
import LovedItemProduct from "./components/loved-item-product"

export default function Page() {

      const {lovedItem} = useLovesProducts()

      return (
            

            <div className="max-w-4xl py-4 mx-auto sm:py-32 sm:px-24">

                  <h1 className="sm:text-2xl">
                        Productos que te gustan </h1>
                        <div>
                              <div>
                                    {lovedItem.length ===0 &&(
                                         <p> No hay productos en la sección de Me gusta </p> 
                                    )}
                                    <ul>
                                          {lovedItem.map((item)=>(
                                              <LovedItemProduct key={item.id} product={item}/>
                                          ))}
                                    </ul>
                              </div>
                        </div>
            </div>
      )
}