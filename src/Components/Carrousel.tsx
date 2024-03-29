import { useCallback, useEffect, useRef, useState } from 'react'
import { Card } from 'react-bootstrap'

interface Params {
  title: string
  button: string
  imageUrl: string
}

const Carrousel = ({ style, params, sectionTitle, format = 'standart' }: { style: any, params: Params[], sectionTitle: string, format?: string }) => {
  const [buttons, setbuttons] = useState(
    () => {
      if (window.innerWidth < 640) {
        return Array.from({ length: params.length }, (_, i) => i * 100)
      } else if (window.innerWidth >= 640 && window.innerWidth < 1024) {
        return Array.from({ length: params.length - 1 }, (_, i) => i * 50)
      }
      return Array.from({ length: params.length - 4 }, (_, i) => i * 50)
    })

  const [clicked, setClicked] = useState(0)

  const category = useRef<HTMLDivElement>()
  const scrollTo = useCallback(
    (id: number, click: number) => {
      setClicked(click)
      category.current?.setAttribute('style', `margin-left:-${id}%`)
    }, []
  )

  useEffect(() => {
    const resetStyle = (e: Event): void => {
      if (category.current?.hasAttribute('style')) {
        category.current?.setAttribute('style', `margin-left:0%`)
        setClicked(0)
      }
      const button640 = Array.from({ length: params.length - 1 }, (_, i) => i * 50)
      const button1024 = Array.from({ length: params.length }, (_, i) => i * 100)
      if ((e.target as Window).innerWidth < 640) {
        setbuttons(button1024)
      } else if ((e.target as Window).innerWidth >= 640 && (e.target as Window).innerWidth < 1024) {
        setbuttons(button640)
      } else {
        setbuttons([])
      }
    }
    window.addEventListener('resize', resetStyle)
    return () => {
      window.removeEventListener('resize', resetStyle)
    }
  }, [])


  function render(param: Params): any {
    if (format === 'standart') {
      return <picture className='relative'>
        <div className='absolute z-2 w-full h-full flex flex-col items-center justify-center'>
          <p className='title'>{param.title}</p>
          <button className='button'>{param.button}</button>
        </div>
        <img className='w-full h-full' src={param.imageUrl} alt="" />
      </picture>
    }
    else if (format === 'card') {
      return <div>
        <Card>
          <Card.Img src={param.imageUrl}></Card.Img>
          <Card.Header>{param.title}</Card.Header>
          <Card.Body>{param.button}</Card.Body>
        </Card>
      </div>
    }
  }



  return (
    <>
      <h2 className='font-bold text-navBar text-center' >{sectionTitle}</h2>
      <div className='w-auto overflow-hidden mx-10 h-1/2' >
        <div className={style.container} ref={category} style={{ marginLeft: '0px' }}>
          {params.map(param => (
            render(param)
          ))}
        </div>
      </div>
      <div className='flex justify-center gap-3'>
        {buttons.map((button, i) => (<button onClick={() => scrollTo(button, i)} className={`rounded-full border-navBar p-1 border-2 ${clicked == i && 'bg-navBar'}`}></button>))}
      </div>
    </>
  )
}

export default Carrousel
