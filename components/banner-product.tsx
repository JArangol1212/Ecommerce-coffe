
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export default function BannerProduct() {
  return (
    <>
      <div className="mt-4 text-center">
        <p> Sumégete en una experiencia única</p>
        <h4 className="mt-2 text-5xl font-extrabold uppercase">Café Exquisito</h4>
        <p className="my-2 text-lg">Despierta tus sentidos cada sorbo </p>

        <Link href="#" className={buttonVariants()}> Comprar</Link>
      </div>

      <div className="h-[350px] bg-cover  md:h-[650px] bg-[url('/tostado.jpg')] bg-center mt-5 bg-no-repeat ">

      </div>
    </>
  );
}