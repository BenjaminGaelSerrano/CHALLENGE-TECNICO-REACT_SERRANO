import React, { Children,useState,useEffect } from 'react'
import CuentaRegresiva from './cuentaRegresiva';
export default function BotonJuego({ children, onClick }: { children: React.ReactNode, onClick: () => void }) {
  const [aparece,setAparece] = useState(false);
  const [contador, setContador] = useState(0);
  const cuentaRef = React.useRef<{ getSegundos: () => number }>(null);
  useEffect(() => {
    if (!aparece) return;
    if(cuentaRef.current?.getSegundos() === 0){
        setAparece(true);}
    if(aparece){
        onClick();
        setContador(prev => prev + 1);
    }    
  }, [onClick, aparece]);      

  return (
    <>
      <button onClick={onClick}>PRESIONAR{children}</button>
    </>
  )
}