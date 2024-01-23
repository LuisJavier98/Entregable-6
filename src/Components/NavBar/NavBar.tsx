import { Card } from '@mui/material'
import { IoClose } from "react-icons/io5";

const NavBar = () => {
  return (
    <nav
      id='navigate'
      className=' absolute -left-full lg:relative lg:left-auto flex justify-between px-12 text-white font-bold text-xl bg-navBar navBar'>
      <button className='lg:hidden border-b-2 border-header w-full ' onClick={() => {
        document.querySelector("#navigate")?.classList.remove("displayNav")
        document.querySelector("body")?.classList.remove("before")
      }} >
        <p className='py-3 px-5 w-full text-end flex justify-end'><IoClose />Close</p>
      </button>
      <p className='relative card_product'>
        <p className='flex items-center optionNav'>Productos</p>
        <Card className='cardEffect'>
          <h2 className='mb-4'>Productos</h2>
          <ul>
            <p className='option protein'>
              Proteinas
            </p>
            <p className='option mass'>
              Ganadores de peso
            </p>
            <p className='option creatine'>
              Creatinas
            </p>
            <p className='option pack '>
              Packs
            </p>
          </ul>
        </Card>
      </p>
      <p className='cursor-pointer relative card_product'>
        <p className='flex items-center optionNav'>Mis Objetivos</p>
        <Card className='cardEffect'>
          <h2>Mis Objetivos</h2>
          <ul className='transition-all'>
            <li className='option '>Construir musculo</li>
            <li className='option'>Perder peso y tonificar</li>
            <li className='option'>Aumentar fuerza y rendimiento</li>
            <li className='option'>Definicion muscular</li>
            <li className='option'>Salud y bienestar</li>
            <li className='option'>¿Estas empezando?</li>
          </ul>
        </Card>
      </p>
      <p className='optionNav'>
        Promociones
      </p>
      <p className='optionNav'>Nuestra tienda</p>
      <p className='optionNav'>Asesoria online</p>
      <p className='optionNav'>Unete al equipo</p>
      <p className='optionNav' >Compras mayores </p>
    </nav>
  )
}

export default NavBar
