import { useState, useEffect } from 'react'

const MENSAJES = ['Preparados', 'Listos', '¡Ya!']

interface CuentaRegresivaProps {
  onTerminada: () => void
}

export default function CuentaRegresiva({ onTerminada }: CuentaRegresivaProps) {
  const [indice, setIndice] = useState(0)

  useEffect(() => {
    if (indice >= MENSAJES.length) {
      onTerminada()
      return
    }

    const timeout = setTimeout(() => {
      setIndice(prev => prev + 1)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [indice, onTerminada])

  const mensaje = MENSAJES[indice] ?? ''

  return (
    <div className="cuenta-regresiva">
      <span className={`cuenta-mensaje ${indice === MENSAJES.length - 1 ? 'cuenta-ya' : ''}`}>
        {mensaje}
      </span>
    </div>
  )
}
