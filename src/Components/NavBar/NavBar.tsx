import { Card } from '@mui/material'
import { IoClose } from "react-icons/io5";
import { FaArrowUp } from "react-icons/fa";
import { useLayoutEffect, useState, useSyncExternalStore } from 'react';
import { width } from '@mui/system';
import './NavBar.scss'




const NavBar = () => {

  const [showIcon, setshowIcon] = useState<boolean>(window.innerWidth < 1024 ? true : false)
  const [isProductOpen, setisProductOpen] = useState<boolean>(false)
  const [isObjectiveOpen, setisObjectiveOpen] = useState<boolean>(false)


  useLayoutEffect(() => {
    const callback = (e: Event) => {
      if (!e.target) return
      if (!('innerWidth' in e.target)) return
      if (e.target.innerWidth as number < 1024) {
        setshowIcon(true)
      } else {
        setshowIcon(false)
        setisObjectiveOpen(false)
        setisProductOpen(false)
      }
    }
    window.addEventListener("resize", callback)
    return () => window.removeEventListener("resize", callback)
  }, [])


  return (
    <nav
      id='navigate'
      className='absolute w-0 lg:w-auto -left-full lg:relative lg:left-auto flex justify-between px-12 text-white font-bold text-xl bg-navBar navBar'>
      <button className='lg:hidden border-b-2 border-header w-full ' onClick={() => {
        document.querySelector("#navigate")?.classList.remove("displayNav")
        document.querySelector("body")?.classList.remove("before")
      }} >
        <p className='py-3 px-5 w-full text-end flex justify-end'><IoClose />Ocultar</p>
      </button>
      <p className='relative card_product'>
        <p className='optionNav flex justify-between w-full' id='proteinas' onClick={() => setisProductOpen(!isProductOpen)}>
          <p>
            Productos
          </p>
          <FaArrowUp className={`scale-50 transition-all ${isProductOpen ? 'rotate-180' : 'rotate-0'} ${showIcon ? 'block' : 'hidden'}`} />
        </p>
        <Card className={`cardEffect ${isProductOpen ? 'h-auto' : showIcon ? 'h-0 p-0' : ''}`}>
          <h2 className='mb-4 hidden lg:block underline decoration-1'>Productos</h2>
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
        <p className='optionNav flex justify-between w-full' onClick={() => setisObjectiveOpen(!isObjectiveOpen)}>
          <p>
            Mis Objetivos
          </p>
          <FaArrowUp className={`scale-50 transition-all ${isObjectiveOpen ? 'rotate-180' : 'rotate-0'} ${showIcon ? 'block' : 'hidden'}`} />
        </p>
        <Card className={`cardEffect ${isObjectiveOpen ? 'h-auto' : showIcon ? 'h-0 p-0' : ''}`}>
          <h2 className='hidden lg:block underline decoration-1'>Mis Objetivos</h2>
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
