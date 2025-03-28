"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function PageSuccess() {
  const router = useRouter()

  return (
    <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px-24">
      <div className="flex flex-col-reverse gap-2 sm:flex-row">
        <div className="flex justify-center md:min-w[400px]">
          <Image src="/sucess.jpg" alt="Success" width={800} height={800} className="rounded-lg" />
        </div>

        <div>
          <h1 className="text-3xl ml-10"> ¡Gracias por tu compra</h1>
          <p className="my-3 ml-10">
            En breve, nuestro equipo se pondrá manos a la obra
            para seleccionar los granos más frescos y preparar tu envio
            con cuidado y dedicación, Mientras tanto, siéntate, relájate y
            deja que la anticipación del dellicio aroma del café recién hecho
            te envuelva
          </p>
          <p className="my-3 ml-10">
            Gracias de nuevo por confiar en nosotros para satisfacer tu amor
            por el cafe. ¡Estamos deseando que pruebes nuestros exquisitos sabores
          </p>
          <p className="my-3 ml-10">¡Disfruta del Café</p>
          <Button onClick={() => router.push("/")} className="ml-10"> Volver a la tienda</Button>
        </div>
      </div>
    </div>
  )
}