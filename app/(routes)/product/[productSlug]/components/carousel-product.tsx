/* eslint-disable @next/next/no-img-element */
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

interface CarouselProductProps {
      images: {
          id: number;
          url: string;
      }[];
  }


export default function CarouselProduct(props: CarouselProductProps) {

      const { images } = props


     console.log(images)
      return (

            <div className="sm:px-16">


                  <Carousel>
                         <CarouselContent>
                              {images.map((image) => {

                                    return (
                                          <CarouselItem key={image.id}>
                                                <img
                                                      src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
                                                      alt="image product"
                                                      className="rounded-lg"
                                                />
                                          </CarouselItem>
                                    );
                              })}

                        </CarouselContent> 
                        <CarouselPrevious/>
                        <CarouselNext/>

                  </Carousel>
            </div>
      )
}