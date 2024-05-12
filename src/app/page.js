import Image from "next/image";
import { Button } from "flowbite-react";
import { Component } from "./components/carousel/Component";
import { Tarjeta } from "./components/tarjeta/Tarjeta";
import pastelChoclo from "./components/imagenes/pastel-de-choclo.jpg";
import { TarjetaCompleta } from "./components/tarjeta/TarjetaCompleta";
import { TarjetaH } from "./components/tarjeta/TarjetaH";

export default function Home() {
  let contador = 1;
  return (
    <main>

      < div>
        <Component className={'w-10'} />

        <div className="justify-center pt-1 flex flex-wrap w-5/6 centrado">
          <div className="w-full flex">
          <TarjetaH key={contador++}  titulo={"Como en casa" } texto={"Que no te detenga nadie, crea tu propio negocio, sosotros somos tu plataforma"} imagen={"/imagenes/pastel-de-choclo.jpg"}/>
          <Tarjeta/>
          </div>
    

        </div>

      </div>



    </main>
  );
}
