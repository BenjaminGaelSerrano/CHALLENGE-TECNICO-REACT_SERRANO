import React from 'react'

interface IndicadorPuntajeProps {
  puntaje: number
}

export function IndicadorPuntaje({ puntaje }: IndicadorPuntajeProps) {
  return (
    <div className="indicador">
      <span className="indicador-label">Puntaje</span>
      <span className="indicador-valor">{puntaje}</span>
    </div>
  )
}
