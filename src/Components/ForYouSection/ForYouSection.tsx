import React from 'react'

const ForYouSection = () => {
  return (

    <section className=' min-h-screen flex items-center justify-center flex-col'>
      <h2 className='flex-1 flex items-end' >Recomendados para tí</h2>
      <div className='flex-2 p-16 flex flex-col gap-3'>
        <div className='grid lg:grid-cols-2 xl:flex xl:flex-wrap gap-3 xl:justify-center xl:flex-1  '>
          <picture className='relative basis flex flex-col'>
            <img className='flex-1' src="https://via.placeholder.com/800x400" alt="" />
            <div className='text-3xl'>
              <p >Antes <strong className='line-through decoration-[1px]'>400</strong></p>
              <p>Ahora <strong>300</strong></p>
            </div>
          </picture>
          <picture className='relative basis flex flex-col'>
            <img className='flex-1' src="https://via.placeholder.com/800x400" alt="" />
            <div className='text-3xl'>
              <p>Antes <strong className='line-through decoration-[1px]'>400</strong></p>
              <p>Ahora <strong>300</strong></p>
            </div>
          </picture>
          <picture className='relative basis flex flex-col'>
            <img className='flex-1' src="https://via.placeholder.com/800x400" alt="" />
            <div className='text-3xl'>
              <p>Antes <strong className='line-through decoration-[1px]'>400</strong></p>
              <p>Ahora <strong>300</strong></p>
            </div>
          </picture>
          <picture className='relative basis flex flex-col'>
            <img className='flex-1' src="https://via.placeholder.com/800x400" alt="" />
            <div className='text-3xl'>
              <p>Antes <strong className='line-through decoration-[1px]'>400</strong></p>
              <p>Ahora <strong>300</strong></p>
            </div>
          </picture>
          <picture className='relative basis flex flex-col '>
            <img className='flex-1 ' src="https://via.placeholder.com/800x400" alt="" />
            <div className='text-3xl'>
              <p>Antes <strong className='line-through decoration-[1px]'>400</strong></p>
              <p>Ahora <strong>300</strong></p>
            </div>
          </picture>
        </div>
      </div>
    </section>
  )
}

export default ForYouSection
