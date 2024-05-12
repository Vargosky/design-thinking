
"use client";

import { Card } from "flowbite-react";
import Image from "next/image";
export function Tarjeta({titulo, texto, imagen}) {

  const defaulTitle = "Noteworthy technology acquisitions 2021";
  const defaultText = "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.";


  return (
    <Card href="#" className="max-w-sm text-center border border-black shadow-xl centrado w-1/2">
        {
            imagen &&   <Image 
                        src={imagen}
                        width={300}
                        height={300}

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
