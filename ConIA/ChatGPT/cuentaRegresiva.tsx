import { useEffect, useState } from "react";

export default function CuentaRegresiva({
  onFinish,
}: {
  onFinish: () => void;
}) {
  const mensajes = ["Preparados", "Listos", "Ya"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prev) => {
        if (prev === mensajes.length - 1) {
          clearInterval(intervalo);
          onFinish();
          return prev;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return <h2>{mensajes[index]}</h2>;
}