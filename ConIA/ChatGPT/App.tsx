import { useEffect, useState } from "react";
import BotonInicio from "./botonInicio";
import BotonJuego from "./botonJuego";
import CuentaRegresiva from "./cuentaRegresiva";
import { IndicadorPuntaje } from "./indicadorPuntaje";
import { IndicadorPuntajeMaximo } from "./indicadorPuntajeMaximo";
import { IndicadorSegundosRestantes } from "./indicadorSegundosRestantes";
type Estado = "idle" | "countdown" | "playing";

function App() {
  const [estado, setEstado] = useState<Estado>("idle");
  const [segundos, setSegundos] = useState(5);
  const [puntaje, setPuntaje] = useState(0);
  const [maximo, setMaximo] = useState(0);
  useEffect(() => {
  setMaximo((prev) => Math.max(prev, puntaje));
}, [puntaje]);
  useEffect(() => {
    if (estado !== "playing") return;

    const intervalo = setInterval(() => {
      setSegundos((prev) => {
        if (prev === 1) {
          clearInterval(intervalo);
          finalizarJuego();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalo);
  }, [estado]);

  const iniciarJuego = () => {
    setPuntaje(0);
    setSegundos(5);
    setEstado("countdown");
  };

  const comenzarJuego = () => {
    setEstado("playing");
  };

  const finalizarJuego = () => {
  setEstado("idle");
};
  const handleClick = () => {
    if (estado === "playing") {
      setPuntaje((prev) => prev + 1);
    }
  };

  return (
    <>
      <h1>Juego Contador</h1>

      <IndicadorPuntaje puntaje={puntaje} />
      <IndicadorPuntajeMaximo maximo={maximo} />

      {estado === "countdown" && (
        <CuentaRegresiva onFinish={comenzarJuego} />
      )}

      {estado === "playing" && (
        <IndicadorSegundosRestantes segundos={segundos} />
      )}

      <BotonInicio onClick={iniciarJuego} disabled={estado !== "idle"} />

      <BotonJuego onClick={handleClick} disabled={estado !== "playing"} />
    </>
  );
}

export default App;