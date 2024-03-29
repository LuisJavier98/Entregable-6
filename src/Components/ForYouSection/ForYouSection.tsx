import style from './ForYoySection.module.scss'
import Carrousel from '../Carrousel'

const params = [
  { title: 'Producto 1', button: 'Ver Productos', imageUrl: "https://via.placeholder.com/800x400" },
  { title: 'Producto 2', button: 'Ver Productos', imageUrl: "https://via.placeholder.com/800x400" },
  { title: 'Producto 3', button: 'Ver Productos', imageUrl: "https://via.placeholder.com/800x400" },
  { title: 'Producto 4', button: 'Ver Productos', imageUrl: "https://via.placeholder.com/800x400" },
  { title: 'Producto 5', button: 'Ver Productos', imageUrl: "https://via.placeholder.com/800x400" },
  { title: 'Producto 6', button: 'Ver Productos', imageUrl: "https://via.placeholder.com/800x400" }
]

const ForYouSection = () => {
  return (

    <section className=' min-h-screen flex items-center justify-center flex-col'>
      <Carrousel params={params} sectionTitle='Recomendados para tí' style={style} format='card' />
    </section>
  )
}

export default ForYouSection
