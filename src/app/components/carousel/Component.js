
import { Carousel } from "flowbite-react";
import Image from "next/image";
import { Tarjeta } from "../tarjeta/Tarjeta";
import imagenes from "./imagenes/vercel.svg"
import img1 from "./imagenes/pastel-de-choclo.jpg"

export function Component() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-5/6 centrado">
      <Carousel leftControl="left" rightControl="right">
        <Image src={img1} alt="..." width={500} height={500} />
        <Tarjeta titulo={"esta es el titulo"} imagen={imagenes}/>
        <Image src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." width={500} height={500} />
        <Image src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." width={500} height={500} />
        <Image src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." width={500} height={500} />
      </Carousel>
    </div>
  );
}
