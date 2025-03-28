/* eslint-disable @next/next/no-img-element */
"use client"


import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import { ResponseType } from "@/types/response"
import { SkeletonSchema } from "./skeletonSchema"
import { ProductType } from "@/types/product"

import { Card, CardContent } from "./ui/card"
import { Expand, ShoppingCart } from "lucide-react"
import { IconButton } from "./icon-button"
import { useRouter } from "next/navigation"
import { useCart } from "@/hooks/use-cart"

const FeacturedProducts =()=>{
  const {result,loading}:ResponseType = useGetFeaturedProducts()

      const router = useRouter()

      const {addItem} =useCart()

      

    
      return (

            <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
                  <h3 className="px-6 text-3xl sm:pb-8"> Productos Descacados</h3>
               <Carousel>
                 <CarouselContent className="-ml-2 md:-ml-4">
                  {loading && (
                        <SkeletonSchema grid={3}/>
                  )}
                  {result !== null && (
                        result.map((product :ProductType)=>{
                             const {id } = product
                            
                             return(

                              <CarouselItem key={id} className="md:basis-1/4 lg:basis-1/3 group ">
                              <div className="p-1">
                                <Card className="py-4 border border-gray-200 shadow-none">
                                  <CardContent className="relative flex items-center justify-center px-6 py-2">
                                    
                                    <img 
                                      src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`}
                                      alt="Image feature" 
                                      className="w-[250px] h-[260px]"
                                    /> 
                            
                                    
                                    <div className="absolute w-full px-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bottom-5">
                                      <div className="flex justify-center gap-x-6">
                                          <IconButton onClick={() => router.push(`product/${product.slug}`)} 
                                          icon={<Expand size={20}/>}
                                          className="text-gray-600 "/>

                                         <IconButton onClick={() => addItem(product)} 
                                          icon={<ShoppingCart size={20}/>}
                                          className="text-gray-600 "/>
                                      </div>
                                    </div>
                            
                                  </CardContent>
                                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-8">
                                    <h3 className="text-lg font-bold">{product.productName}</h3>
                                    <div className="flex items-center justify-between gap-3">
                                        <p className="px-2 py-1 text-white bg-yellow-900 rounded-full ">{product.taste}</p>
                                        <p>{product.origin}</p>
                                    </div>


                                  </div>
                                </Card>
                              </div>
                            </CarouselItem>
                             )
                        })
                  )}
                 </CarouselContent>
                 <CarouselPrevious/>
                 <CarouselNext className="hidden sm:flex"/>

                 
               </Carousel>
            
            </div>
      )
}
export default FeacturedProducts;
