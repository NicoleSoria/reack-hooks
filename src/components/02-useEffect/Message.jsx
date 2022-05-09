import React, { useEffect, useState } from 'react'


export const Message = () => {

  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const { x, y } = coords;

  const mouseMove = (e) => {
    console.log(':D');
    const coords = { x: e.x, y: e.y };
    setCoords(coords);
  }

  useEffect(() => {

    window.addEventListener('mousemove', mouseMove);

    return () => {
      console.log('Componente message ocultado');
      window.removeEventListener('mousemove', mouseMove);
    }
  }, [])

  return (
    <div>
      <h3>Message</h3>
      <p>
        x: {x}
      </p>
      <p>
        y: {y}
      </p>
    </div>
  )
}
