import React, { Children,useState,useEffect } from 'react'
import CuentaRegresiva from './cuentaRegresiva';
export default function BotonInicio({ children, onClick }: { children: React.ReactNode, onClick: () => void }) {
  const [aparece,setAparece] = useState(true);
  useEffect(() => {
    if (!aparece) return;
    onClick();
    setAparece(false);
  }, [onClick, aparece]);

  return (
    <button onClick={onClick}>INICIAR{children}</button>
  )
}