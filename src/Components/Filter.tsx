// import axios from 'axios'
// import React, { ReactElement, useEffect, useState } from 'react'
// import { IoIosArrowDown } from 'react-icons/io'
// import { useDispatch } from 'react-redux'
// // import { setCategory, setRangeValues } from '../store/slices/products.slice'
// import { Category } from '../Interfaces/Interfaces'


// export default function Filter(): ReactElement {

//   const [filter, setfilter] = useState<boolean>(true)
//   const [priceActive, setpriceActive] = useState<boolean>(false)
//   const [categoryActive, setcategoryActive] = useState<boolean>(false)
//   const [categories, setcategories] = useState<Category[]>()


//   const activatePrice = (): void => {
//     setpriceActive(!priceActive)
//   }

//   const activateCategory = (): void => {
//     setcategoryActive(!categoryActive)
//   }

//   const dispatch = useDispatch()

//   const dataPrice = (e: React.FormEvent<HTMLFormElement>): void => {
//     e.preventDefault();
//     const target = e.target as HTMLFormElement;
//     if (target && '0' in target && '1' in target) {
//       const firstInputValue = (target[0] as HTMLInputElement)?.value;
//       const secondInputValue = (target[1] as HTMLInputElement)?.value;

//       if (firstInputValue && secondInputValue && +firstInputValue < +secondInputValue) {
//         // dispatch(setRangeValues([+firstInputValue, +secondInputValue]));
//         setfilter(true);
//       } else {
//         window.alert('Please check the range of prices');
//       }
//     } else {
//       console.error('Invalid target or missing properties');
//     }
//   };

//   const dataCategory = (e: React.MouseEvent<HTMLLIElement>): void => {
//     const target = e.target as HTMLInputElement

//     if ('id' in target && target) {
//       // dispatch(setCategory([(+target.id as Number)]))
//       setfilter(true)
//     }
//   }

//   useEffect(() => {
//     const controller: AbortController = new AbortController()
//     const URL = 'https://e-commerce-api.academlo.tech/api/v1/products/categories'
//     axios.get(URL, { signal: controller.signal })
//       .then(res => setcategories(res.data.data.categories))
//       .catch(err => console.log(err))
//     return () => controller.abort()
//   }, [])


//   return (
//     <div className={filter ? 'card_filter' : 'card_filter_active'}>
//       <div className='sticky top-10  h-auto'>
//         <div className='font-black text-2xl border-b-2 border-gray-900 pb-2'>Filters</div>
//         <div className='flex justify-between pt-4 pb-2'>
//           <p className='font-bold text-2xl  '>Price</p>
//           <button onClick={activatePrice} className={priceActive ? 'transition-all' : 'rotate-180 transition-all'}><IoIosArrowDown /></button>
//         </div>
//         <form onSubmit={(e: React.FormEvent<HTMLFormElement>): void => { dataPrice(e) }} className={priceActive ? 'flex gap-3 flex-wrap md:flex-col md:flex-nowrap h-auto overflow-hidden transition-height' : ' transition-height flex h-0 gap-4 flex-wrap md:flex-col overflow-hidden '}>
//           <label className='flex items-center text-lg font-medium'>From</label>
//           <input className='h-10' type="number" min='0' placeholder='Please, write a price' required />
//           <label className='flex items-center text-lg font-medium'>To</label>
//           <input className='h-10' type="number" min='0' placeholder='Please, write a price' required />
//           <button className='bg-red-600 hover:bg-red-700  rounded-md px-5 h-10 text-xl font-medium text-white'>Filter price</button>
//           <div className='bg-orange-600 cursor-pointer hover:bg-orange-700 flex items-center justify-center rounded-md px-5 h-10 text-xl font-medium text-white' onClick={() => dispatch(setRangeValues([]))}>Reset Filter</div>
//         </form>
//         <div>
//           <div className='flex pt-3 pb-4 justify-between'>
//             <p className='font-bold text-2xl '>Category</p>
//             <button onClick={activateCategory} className={categoryActive ? 'transition-all' : 'rotate-180 transition-all'}><IoIosArrowDown /></button>
//           </div>
//           <ul className={categoryActive ? ' h-auto overflow-hidden transition-height flex flex-col gap-3' : 'h-0 overflow-hidden transition-height flex flex-col gap-2'}>
//             {/* <li className='cursor-pointer font-medium text-lg ' id='0' onClick={() => dispatch(setCategory([1, 2, 3, 4]))} >All Products</li> */}
//             {categories?.map((category: Category): ReactElement => <li className='cursor-pointer font-medium text-lg ' onClick={(e: React.MouseEvent<HTMLLIElement>): void => { dataCategory(e) }} id={category.id.toString()} key={category.id.toString()}>{category.name}</li>)}
//           </ul>
//         </div>
//       </div>
//     </div>
//   )
// }
