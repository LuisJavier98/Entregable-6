import React from 'react'
import style from './Categories.module.scss'

const Categories = () => {
  return (
    <section className=' min-h-screen flex items-center justify-center flex-col'>
      <h2 className='flex-1 flex items-end font-bold text-navBar' >Compras por categorias</h2>
      <div className={`flex-2 basis-5/6 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:items-stretch lg:justify-center gap-2 p-16 ${style.containerCategories}`}>
        <picture className='relative'>
          <div className='absolute z-2 w-full h-full flex flex-col items-center justify-center'>
            <p className='title'>Proteinas</p>
            <button className='button'>Ver producto</button>
          </div>
          <img className='w-full h-full' src="https://via.placeholder.com/800x400" alt="" />
        </picture>
        <picture className='relative'>
          <div className='absolute z-2 w-full h-full flex flex-col items-center justify-center'>
            <p className='title'>Definición muscular</p>
            <button className='button'>Ver producto</button>
          </div>
          <img className='w-full h-full' src="https://via.placeholder.com/800x400" alt="" />
        </picture>
        <picture className='relative'>
          <div className='absolute z-2 w-full h-full flex flex-col items-center justify-center'>
            <p className='title'>Volumen Muscular</p>
            <button className='button' >Ver producto</button>
          </div>
          <img className='w-full h-full' src="https://via.placeholder.com/800x400" alt="" />
        </picture>
        <picture className='relative'>
          <div className='absolute z-2 w-full h-full flex flex-col items-center justify-center'>
            <p className='title'>Aumento de Fuerza y Rendimiento</p>
            <button className='button'>Ver producto</button>
          </div>
          <img className='w-full h-full' src="https://via.placeholder.com/800x400" alt="" />
        </picture>
      </div>
    </section>
  )
}

export default Categories
