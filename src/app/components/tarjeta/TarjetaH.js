
import { Card } from "flowbite-react";


export function TarjetaH({titulo, texto,imagen}) {
    const defaultTitulo = "Este es el titulo";
    const defaultTexto = "Este es el texto que va en la card, la idea es que lleve una idea mas que nada y un boton mas adelante"
  return (
    <Card className="max-w-sm" imgSrc={imagen} horizontal>
      <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
        {titulo ? titulo : defaultTitulo}
      </h5>
      <hr/>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      { texto ? texto : defaultTexto}
      </p>
    </Card>
  );
}
