
"use client";

import { Card } from "flowbite-react";
import Image from "next/image";
export function TarjetaCompleta({titulo, texto, imagen}) {

  const defaulTitle = "Noteworthy technology acquisitions 2021";
  const defaultText = "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.";


  return (
    <Card href="#" className="w-full text-center border border-black shadow-xl centrado">
        {
            imagen &&   <Image 
                        src={imagen}
                        width={200}
                        height={200}
                        className="rounded-2xl"

                        /> 
        }
      <h5 className="text-3xl py-5 font-bold tracking-tight text-gray-900 dark:text-white">
        {titulo ? titulo: defaulTitle}
      </h5>
      <hr/>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {texto ? texto : defaultText}
      </p>
    </Card>
  );
}
