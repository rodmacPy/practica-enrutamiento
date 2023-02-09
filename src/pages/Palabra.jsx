import React from 'react'
import { useParams } from 'react-router-dom'

export const Palabra = () => {

  const {string, color1, color2} = useParams();
  return (
    <div style={{backgroundColor: color2}}>
      <p style={{color: color1}}>The word is: {string}</p>
    </div>
  )
}
