import React from 'react'

interface BotonJuegoProps {
  onClick: () => void
  disabled: boolean
}

export default function BotonJuego({ onClick, disabled }: BotonJuegoProps) {
  return (
    <button
      className="btn btn-juego"
      onClick={onClick}
      disabled={disabled}
    >
      PRESIONAR
    </button>
  )
}
