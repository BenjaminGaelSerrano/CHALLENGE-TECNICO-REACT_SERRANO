import { useEffect, useRef } from 'react'

interface IndicadorSegundosRestantesProps {
  segundos: number
  corriendo: boolean
  onTick: (segundos: number) => void
}

export function IndicadorSegundosRestantes({
  segundos,
  corriendo,
  onTick,
}: IndicadorSegundosRestantesProps) {
  const segundosRef = useRef(5)
  const onTickRef = useRef(onTick)

  useEffect(() => {
    onTickRef.current = onTick
  }, [onTick])

  useEffect(() => {
    if (!corriendo) return

    segundosRef.current = 5

    const intervalo = setInterval(() => {
      segundosRef.current -= 1
      onTickRef.current(segundosRef.current)
      if (segundosRef.current <= 0) {
        clearInterval(intervalo)
      }
    }, 1000)

    return () => clearInterval(intervalo)
  }, [corriendo])

  return (
    <div className="indicador-segundos">
      <span className="segundos-label">Tiempo restante</span>
      <span className={`segundos-valor ${segundos <= 2 ? 'segundos-urgente' : ''}`}>
        {segundos}s
      </span>
    </div>
  )
}
