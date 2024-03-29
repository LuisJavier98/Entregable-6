import React, { useCallback, useEffect, useMemo, useState } from 'react'
import style from './Categories.module.scss'
import Carrousel from '../Carrousel'



const Categories = () => {

  const params = [
    { title: 'Proteinas', button: 'Ver Productos', imageUrl: "https://via.placeholder.com/800x400" },
    { title: 'Definición muscular', button: 'Ver Productos', imageUrl: "https://via.placeholder.com/800x400" },
    { title: 'Volumen muscular', button: 'Ver Productos', imageUrl: "https://via.placeholder.com/800x400" },
    { title: 'Aumento de fuerza y rendimiento', button: 'Ver Productos', imageUrl: "https://via.placeholder.com/800x400" }
  ]

  return (
    <section className='min-h-screen flex items-center justify-center flex-col'>
      <Carrousel params={params} sectionTitle='Compras por categoria' style={style} />
    </section>
  )
}

export default Categories
