import React, {useState, useRef} from 'react'
import BotonJuego from './botonJuego';
export const IndicadorPuntaje = () => {
  const [puntaje, setPuntaje] = useState(0);
  const contador = useRef<{ getContador: () => number | null }>(null);
  const incrementarPuntaje = () => {
          setPuntaje(contador.current?.getContador() || 0);
  };
  return (
    <div>
        <p>{puntaje}</p>
    </div>)
}