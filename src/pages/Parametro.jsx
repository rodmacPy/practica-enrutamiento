import React from 'react'
import { useParams } from 'react-router-dom'

export const Parametro = () => {
    const {parametro } = useParams()
    return isNaN(+`${parametro}`)
        ? <p>The word is: {parametro}</p>
        : <p>The number is: {parametro}</p>
}