

import style from './DiscoverMore.module.scss'

const DiscoverMore = () => {
  return (
    <section className='min-h-screen'>
      <h2 className='font-bold text-center text-navBar mb-5'>Descubre más</h2>
      <div className={style.containerDiscover}>
        <picture>
          <img src="https://via.placeholder.com/800x400" alt="" />
          <div>
            <h3>Titulo</h3>
            <h4>Subtitulo</h4>
            <p>CONTENIDO</p>
          </div>
        </picture>
        <picture >
          <img src="https://via.placeholder.com/800x400" alt="" />
          <div>
            <h3>Titulo</h3>
            <h4>Subtitulo</h4>
            <p>CONTENIDO</p>
          </div>
        </picture>
        <picture >
          <img src="https://via.placeholder.com/800x400" alt="" />
          <div>
            <h3>Titulo</h3>
            <h4>Subtitulo</h4>
            <p>CONTENIDO</p>
          </div>
        </picture>
      </div>
    </section>
  )
}

export default DiscoverMore
