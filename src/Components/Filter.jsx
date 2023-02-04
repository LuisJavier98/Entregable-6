import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

export default function Filter({ setValues, setcategory }) {

  const [filter, setfilter] = useState(true)
  const [priceActive, setpriceActive] = useState(false)
  const [categoryActive, setcategoryActive] = useState(false)
  const [categories, setcategories] = useState()


  const activate = () => {
    setfilter(!filter)
  }

  const activatePrice = () => {
    setpriceActive(!priceActive)
  }

  const activateCategory = () => {
    setcategoryActive(!categoryActive)
  }


  const dataPrice = e => {
    e.preventDefault()
    if (+e.target[0].value < +e.target[1].value) {
      setValues([+e.target[0].value, +e.target[1].value])
      setfilter(true)
    }
    else {
      window.alert('Please check the range of prices')
    }
  }
  const dataCategory = e => {
    setcategory([+e.target.id])
    setfilter(true)
  }

  useEffect(() => {
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/products/categories'
    axios.get(URL)
      .then(res => setcategories(res.data.data.categories))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className={filter ? 'card_filter' : 'card_filter_active'}>
      <div className='sticky top-10  h-auto'>
        <div className='font-black text-2xl border-b-2 border-gray-900 pb-2'>Filters</div>
        <div className='flex justify-between pt-4 pb-2'>
          <p className='font-bold text-2xl  '>Price</p>
          <button onClick={activatePrice} className={priceActive ? 'transition-all' : 'rotate-180 transition-all'}><IoIosArrowDown /></button>
        </div>
        <form onSubmit={dataPrice} className={priceActive ? 'flex gap-3 flex-wrap md:flex-col md:flex-nowrap h-auto overflow-hidden transition-height' : ' transition-height flex h-0 gap-4 flex-wrap md:flex-col overflow-hidden '}>
          <label className='flex items-center text-lg font-medium'>From</label>
          <input className='h-10' type="number" min='0' placeholder='Please, write a price' required />
          <label className='flex items-center text-lg font-medium'>To</label>
          <input className='h-10' type="number" min='0' placeholder='Please, write a price' required />
          <button className='bg-red-600 hover:bg-red-700  rounded-md px-5 h-10 text-xl font-medium text-white'>Filter price</button>
          <div className='bg-orange-600 cursor-pointer hover:bg-orange-700 flex items-center justify-center rounded-md px-5 h-10 text-xl font-medium text-white' onClick={() => setValues([0, 900000])}>Reset Filter</div>
        </form>
        <div>
          <div className='flex pt-3 pb-4 justify-between'>
            <p className='font-bold text-2xl '>Category</p>
            <button onClick={activateCategory} className={categoryActive ? 'transition-all' : 'rotate-180 transition-all'}><IoIosArrowDown /></button>
          </div>
          <ul className={categoryActive ? ' h-auto overflow-hidden transition-height flex flex-col gap-3' : 'h-0 overflow-hidden transition-height flex flex-col gap-2'}>
            <li className='cursor-pointer font-medium text-lg ' id='0' onClick={() => setcategory([1, 2, 3, 4])} >All Products</li>
            {categories?.map(category => <li className='cursor-pointer font-medium text-lg ' onClick={dataCategory} id={category.id} key={category.id}>{category.name}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}
