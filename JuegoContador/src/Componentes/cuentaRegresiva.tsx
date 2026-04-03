import { useState, useEffect } from 'react';
import BotonInicio from './botonInicio';
export default function CuentaRegresiva() {
    const [segundos, setSegundos] = useState(5);
    const [corriendo, setCorriendo] = useState(false);

    useEffect(() => {
        if (!corriendo) return;
        const intervalo = setInterval(() => {
            setSegundos(prev => {
                if (prev === 0) {
                    setCorriendo(false);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(intervalo);
    }, [corriendo]);

  return (
    <div>
      <h1>{segundos}</h1>
      <BotonInicio onClick={() => setCorriendo(true)}>Iniciar</BotonInicio>
    </div>
  );
}