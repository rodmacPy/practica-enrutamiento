import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Parametro , Palabra, Home } from '../pages/'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/Home',
        element: <Home/>
    },
    {
        path: '/:parametro',
        element: <Parametro/>
    },
    {
        path: '/:string/:color1/:color2',
        element: <Palabra/>
    },
])
