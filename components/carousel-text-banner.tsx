"use client"

import { useRouter } from "next/navigation"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"
import { dataCarouselTop } from "@/data/dataCarouselTop"
import {CardContent,Card } from './ui/card'
import Autoplay from 'embla-carousel-autoplay'


export function CarouselTextBanner(){

  const router = useRouter()
 
    return (
      <div className="bg-gray-200 dark:bg-primary">

        <Carousel className="w-full max-w-4xl mx-auto" 
        plugins={[
          Autoplay({
            delay:2500

          })
        ]}>
          <CarouselContent>

          {dataCarouselTop.map(({id, titel,link, description}) =>(
              
              <CarouselItem key={id} onClick={()=> router.push(link)} className="cursor-pointer">
                 <div>
                  <Card className="shadow-none border-none bg-transparent">
                    <CardContent className="flex flex-col justify-center p-2 items-center">
                        <p className="sm:tex-lg text-wrap dark:text-secondary font-bold">{titel}</p>
                        <p className="text-xs sm:text-sm text-wrap dark:text-secondary">{description}</p>
                    </CardContent>

                  </Card>
                 </div>
                 

              </CarouselItem>
          ))}
          </CarouselContent>
      

        </Carousel>

      </div>
    )
}