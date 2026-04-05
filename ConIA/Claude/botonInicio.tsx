import React from 'react'

interface BotonInicioProps {
  onClick: () => void
  disabled: boolean
}

export default function BotonInicio({ onClick, disabled }: BotonInicioProps) {
  return (
    <button
      className="btn btn-inicio"
      onClick={onClick}
      disabled={disabled}
    >
      INICIAR
    </button>
  )
}
