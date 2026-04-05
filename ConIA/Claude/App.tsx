import { useState, useCallback } from 'react'
import BotonInicio from './botonInicio'
import BotonJuego from './botonJuego'
import CuentaRegresiva from './cuentaRegresiva'
import { IndicadorPuntaje } from './indicadorPuntaje'
import { IndicadorPuntajeMaximo } from './indicadorPuntajeMaximo'
import { IndicadorSegundosRestantes } from './IndicadorSegundosRestantes'
type FaseJuego = 'espera' | 'cuenta-regresiva' | 'jugando' | 'fin'

function App() {
  const [fase, setFase] = useState<FaseJuego>('espera')
  const [puntaje, setPuntaje] = useState(0)
  const [puntajeMaximo, setPuntajeMaximo] = useState(0)
  const [segundosRestantes, setSegundosRestantes] = useState(5)

  const handleIniciar = useCallback(() => {
    setPuntaje(0)
    setSegundosRestantes(5)
    setFase('cuenta-regresiva')
  }, [])

  const handleCuentaTerminada = useCallback(() => {
    setFase('jugando')
  }, [])

  const handleTick = useCallback((segundos: number) => {
    setSegundosRestantes(segundos)
    if (segundos === 0) {
      setFase('fin')
      setPuntajeMaximo(prev => (puntaje > prev ? puntaje : prev))
    }
  }, [puntaje])

  const handleClickJuego = useCallback(() => {
    setPuntaje(prev => prev + 1)
  }, [])

  return (
    
    <div className="juego-container">
      <h1 className="juego-titulo">JuegoContador</h1>
      <p className="juego-subtitulo">¡Clickeá la mayor cantidad de veces posible en 5 segundos!</p>

      <div className="juego-panel">
        <div className="juego-indicadores">
          <IndicadorPuntaje puntaje={puntaje} />
          <IndicadorPuntajeMaximo puntajeMaximo={puntajeMaximo} />
        </div>

        {fase === 'jugando' && (
          <IndicadorSegundosRestantes
            segundos={segundosRestantes}
            corriendo={fase === 'jugando'}
            onTick={handleTick}
          />
        )}

        {fase === 'cuenta-regresiva' && (
          <CuentaRegresiva onTerminada={handleCuentaTerminada} />
        )}

        {fase === 'fin' && (
          <div className="juego-mensaje-fin">
            <span>¡Tiempo!</span>
            {puntaje > 0 && puntaje === puntajeMaximo && (
              <span className="juego-record">🏆 ¡Nuevo récord!</span>
            )}
          </div>
        )}

        <div className="juego-botones">
          <BotonInicio
            onClick={handleIniciar}
            disabled={fase === 'cuenta-regresiva' || fase === 'jugando'}
          />
          <BotonJuego
            onClick={handleClickJuego}
            disabled={fase !== 'jugando'}
          />
        </div>
      </div>
    </div>
  )
}

export default App
