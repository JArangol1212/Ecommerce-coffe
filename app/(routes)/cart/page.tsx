"use client"


import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/hooks/use-cart"
import { formatPrice } from "@/lib/format.price"
import { CartItem } from "./components/cart-item"
import {loadStripe} from "@stripe/stripe-js"


import { makePaymentRequest } from "@/api/payment"



export default function Page(){
      const {items, removeAll} = useCart()
      const prices = items.map((product =>product.price))
      const totalPrice = prices.reduce((total,price) => total + price, 0)
      

       // Cargar Stripe con la clave pública
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');
  
  console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  const buyStripe = async () => {
      try {
        const stripe = await stripePromise;
  
        // Hacer la solicitud POST al backend para crear la sesión de pago
        const res = await makePaymentRequest.post('/api/orders', {
            products: items,
          });
        console.log(` datos recientes ${res}`)
        // Verificar que la respuesta contiene el ID de la sesión de Stripe
        if (!res.data.stripeSession?.id) {
          throw new Error('No se pudo obtener el ID de la sesión de Stripe');
        }
  
        // Redirigir a la página de pago de Stripe
        await stripe?.redirectToCheckout({
          sessionId: res.data.stripeSession.id,
        });
        removeAll()
      } catch (error) {
        console.error('Error al procesar el pago:', error);
      }
    };

      return(
            <div className="max-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                 <h1 className="mb-5 text-3xl font-bold">Shoping Cart</h1>
                 <div className="grid sm:grid-cols-2 sm:gap-5">
                  <div>
                        {items.length === 0 && (
                              <p>No hay Productos en el Carrito</p>
                        )}
                        <ul>
                              {
                                    items.map((item) =>(
                                         <CartItem key={item.id} product={item}/>
                                    ))
                              }
                        </ul>
                  </div>
                  <div className="max-w-xl">
                        <div className="p-6 rounded-lg bg-slate-50-100">
                              <p className="mb-3 text-lg font-semibold">Order Summary</p>
                              <Separator/>
                              <div className="flex justify-between gap-5 my-4">
                                    <p> OrdenTotal   {formatPrice(totalPrice)}</p>

                              </div>
                              <div className="flex items-center justify-center w-full mt-3">
                                    <Button className="w-full" onClick={buyStripe}>Comprar</Button>

                              </div>

                        </div>

                  </div>

                 </div>
            </div>
      )
}