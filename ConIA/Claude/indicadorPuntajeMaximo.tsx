import React from 'react'

interface IndicadorPuntajeMaximoProps {
  puntajeMaximo: number
}

export function IndicadorPuntajeMaximo({ puntajeMaximo }: IndicadorPuntajeMaximoProps) {
  return (
    <div className="indicador">
      <span className="indicador-label">Máximo</span>
      <span className="indicador-valor indicador-maximo">{puntajeMaximo}</span>
    </div>
  )
}
